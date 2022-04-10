<script setup lang="ts">
import { computed, onMounted, watch } from "@vue/runtime-core";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useStore } from "../stores/useStore";
import { useRoute, useRouter } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";

const router = useRouter();
const route = useRoute();
const store = useStore();

const {
    users,
    posts,
    currentUser,
    isSubmitting,
} = storeToRefs(store);
const { getUsers, getPosts, editUser } = store;

watch(
    store,
    (state) => {
        // persist the whole state to the local storage whenever it changes
        localStorage.setItem("piniaState", JSON.stringify(state));
    },
    { deep: true }
);

const headers = [
    'id',
    'name',
    'phone',
    'username',
    'email',
    'website',
    'suite',
    'city',
    'street',
    'zipcode',
    'company name',
    'company catchphrase',
    ''
]

onMounted(() => {
    getUsers();
});

</script>

<template>
    <div
        class="code-preview min-h-screen bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
    >
        <div class="mt-16 mb-5">
            <h1 class="text-3xl text-center text-white">Users & Posts</h1>
        </div>

        <div class="py-4">
            <div class="relative mt-1">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </div>
                <input
                    type="text"
                    id="table-search"
                    class="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search for items"
                />
            </div>
        </div>

        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead
                    class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                >
                    <tr>
                        <th
                            v-for="header, index in headers"
                            :key="index"
                            scope="col"
                            class="px-6 py-3"
                        >{{ header }}</th>

                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="user, index in users"
                        :key="index"
                        @click="getPosts(user.id)"
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <td v-for="data, index in user" :key="index" class="px-6 py-4 whitespace-nowrap">{{ data }}</td>

                        <td class="px-6 py-4 text-right dark:bg-gray-800 sticky right-0 left-0 w-fit">
                            <a
                            @click="editUser(user.id)"
                                href="#"
                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="mt-8 w-fit mx-auto">
            <a
                href=""
                rel="noopener nofollow noreferrer"
                class="flex items-center px-4 py-2 mr-3 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="github"
                    class="w-4 h-4 mr-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                >
                    <path
                        fill="currentColor"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    />
                </svg> Edit on GitHub
            </a>
        </div>
    </div>
</template>

<style></style>
