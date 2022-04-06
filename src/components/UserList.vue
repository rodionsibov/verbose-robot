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
    <div class="w-11/12 mx-auto my-20">
        <!-- header -->
        <div class="my-8">
            <h1 class="text-3xl text-center">Users & Posts</h1>
        </div>
        <!-- filter -->
        <div class="mb-4">
            <input type="text" placeholder="Filter" class="w-full border-b-2" />
        </div>
        <!-- table -->
        <div class="overflow-auto">
            <table>
                <tr v-for="i in 10">
                    <thead>
                        <tr>
                            <th v-for="i in 20" class="cursor-pointer">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td v-for="i in 20" class="cursor-pointer">table</td>
                        </tr>
                        <!-- posts -->
                        <div v-if="false">posts</div>
                    </tbody>
                </tr>
            </table>
        </div>
    </div>
</template>

<style></style>
