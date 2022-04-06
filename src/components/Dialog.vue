<script lang="ts" setup>

defineProps<{
    title: string,
    msg: string
}>();

const closeModal = (event: any): void => {
    const modal: any = document.querySelector('dialog')
    if (event.target.innerText === 'Cancel') {
        modal.close();
        console.log('Canceled');
    } else {
        modal.close();
        console.log('Saved');
    }
}

</script>

<template>
    <dialog class="bg-slate-800 text-slate-50 shadow-lg p-6 w-96 rounded-2xl">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 text-yellow-400 mx-auto"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
                fill-rule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clip-rule="evenodd"
            />
        </svg>
        <h2 class="text-2xl font-bold text-center my-4">{{ title }}</h2>
        <div class="text-center">{{ msg }}</div>

        <div class="flex justify-between mt-8">
            <button
                class="bg-slate-900 border-none text-red-900 duration-300 hover:text-red-600 hover:shadow-red-800 shadow"
                @click="closeModal($event)"
            >Cancel</button>
            <button
                class="bg-slate-900 text-green-900 border-none hover:text-green-600 duration-300 hover:shadow-green-800 shadow"
                @click="closeModal($event)"
            >Save</button>
        </div>
    </dialog>
</template>

<style scoped>
dialog::backdrop {
    background: linear-gradient(45deg, red, blue);
    opacity: 0.5;
}


</style>