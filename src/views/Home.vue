<script lang="ts" setup>
import Dialog from '../components/Dialog.vue';

const showModal = (): void => {
  const modal: any = document.querySelector('dialog')
  modal.showModal()
}
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
    <div v-for="i in 10">
      <!-- table headers -->
      <div class="flex justify-around border-b p-3 overflow-auto">
        <div v-for="i in 20" class="px-2 cursor-pointer">Name</div>
      </div>
      <!-- table data -->
      <div>Table data</div>
      <!-- posts -->
      <div>posts</div>
    </div>
  </div>
</template>

<style scoped>
</style>