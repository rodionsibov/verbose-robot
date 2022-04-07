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
    users: User,
    posts: Post,
    currentUser,
    isSubmitting,
} = storeToRefs(store);
const { getUsers } = store;

watch(
    store,
    (state) => {
        // persist the whole state to the local storage whenever it changes
        localStorage.setItem("piniaState", JSON.stringify(state));
    },
    { deep: true }
);

onMounted(() => {
    getUsers();
});
</script>

<template>
    <div
        class="code-preview h-screen bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
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

        <div class="relative shadow-md overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead
                    class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                >
                    <tr>
                        <th scope="col" class="px-6 py-3">Product name</th>
                        <th scope="col" class="px-6 py-3">Color</th>
                        <th scope="col" class="px-6 py-3">Category</th>
                        <th scope="col" class="px-6 py-3">Price</th>
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <td class="px-6 py-4">Sliver</td>
                        <td class="px-6 py-4">Sliver</td>
                        <td class="px-6 py-4">Laptop</td>
                        <td class="px-6 py-4">$2999</td>
                        <td class="px-6 py-4 text-right">
                            <a
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
                class="inline-flex items-center px-5 py-3 text-sm font-medium text-white transition-colors bg-[#171515] border-2 border-[#171515] hover:border-white rounded hover:bg-transparent hover:text-white focus:outline-none focus:ring active:opacity-75"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
            >
                GitHub
                <svg
                    class="w-5 h-5 ml-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                    />
                </svg>
            </a>
        </div>
    </div>
</template>

<style></style>
