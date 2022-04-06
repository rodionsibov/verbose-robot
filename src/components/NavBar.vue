<script lang="ts" setup>

const routes = [
    {
        path: '/',
        name: 'Home',
    },
    {
        path: '/articles',
        name: 'Articles',
    },
    {
        path: '/about',
        name: 'About',
    },
]
</script>

<template>
    <div class="p-2 fixed top-0 w-full flex gap-x-4 justify-center text-white bg-slate-800">
        <router-link
            class="hover:underline"
            v-for="(route, index) in routes"
            :key="index"
            :to="route.path"
        >{{ route.name }}</router-link>
    </div>
</template>

<style scoped>
dialog::backdrop {
    background: linear-gradient(45deg, red, blue);
    opacity: 0.5;
}

.router-link-active {
    font-weight: bold;
}
</style>