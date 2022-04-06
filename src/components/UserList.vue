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

const { users: User, posts: Post, currentUser, isSubmitting } = storeToRefs(store);
const { getUsers } = store

watch(
    store,
    (state) => {
        // persist the whole state to the local storage whenever it changes
        localStorage.setItem('piniaState', JSON.stringify(state))
    },
    { deep: true }
)

onMounted(() => {
    getUsers()
});

</script>

<template>
   
lsit
</template>

<style>
</style>
