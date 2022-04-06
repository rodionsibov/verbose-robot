<script lang="ts" setup>
import Dialog from '../components/Dialog.vue'
import { computed, ref } from '@vue/reactivity';
import { onMounted } from 'vue';
import HelloWorld from '../components/HelloWorld.vue';

const headers = [
    'Section 1',
    'Section 2',
    'How this works',
    'Placeholder',
    'Section 5',
]

const currentSection: any = ref('')

onMounted(() => {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                currentSection.value = entry.target.getAttribute('id')
            }
        })
    })
    document.querySelectorAll('article summary').forEach((section) => {
        observer.observe(section)
    })
})

const showModal = (event: Event): void => {
    const modal: any = document.querySelector('dialog')
    modal.showModal();
}
</script>

<template>
    <div class="my-8">
        <main class="text-left p-10 flex pb-96">
            <article class="space-y-6 w-3/4">
                <h1 class="text-3xl font-bold">My Article</h1>

                <details
                    :open="[0, 1, 3].includes(index)"
                    v-for="(header, index) in headers"
                    :key="header"
                    class="space-y-6 text-justify"
                >
                    <summary
                        class="text-lg font-bold mb-2 cursor-pointer"
                        :id="`${index}`"
                    >{{ header }}</summary>

                    <HelloWorld msg="I am a props! Hello from Contact component" />

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem blanditiis accusamus mollitia deleniti sapiente, omnis perferendis nemo dolorum delectus ut rerum. Fugit, earum repellat sequi at consequatur, incidunt voluptatum aperiam nam tempora beatae cum ducimus pariatur dicta perferendis quod dolor, blanditiis odit magni. Pariatur sunt expedita a iste ipsam porro</p>
                    <p>Aliquid veritatis quia autem quos voluptas consectetur qui, illo libero fugiat animi, similique consequatur dolores sapiente saepe cum nihil deleniti? Dolores tenetur enim eaque architecto minus quia aspernatur odit impedit sequi maiores, reprehenderit ea optio modi. Magnam in sequi ad accusamus qui quasi exercitationem repudiandae numquam! Minus expedita facilis fugiat repudiandae, quaerat adipisci laudantium tempore aspernatur distinctio.</p>
                    <p>Quasi libero modi fuga, cumque nemo dolor eligendi dolorem laborum vitae fugit eius asperiores reprehenderit consequatur nisi aut nam id, quidem sapiente est vel. Doloremque voluptates obcaecati nam culpa impedit exercitationem unde omnis enim explicabo consequuntur suscipit cum deserunt id, numquam harum voluptas sed ducimus autem corporis cumque, veniam neque pariatur quasi? Odio ut, optio nobis iure non suscipit rerum veniam laudantium aspernatur eius amet repellat quaerat aperiam. Natus accusantium soluta incidunt corporis deserunt in libero corrupti explicabo suscipit blanditiis. Excepturi unde dignissimos id error a facere aperiam ea beatae neque.</p>
                </details>
            </article>
            <aside class="pl-10 w-1/4">
                <div class="flex flex-col sticky top-12">
                    <a
                        class="border-l-2 pl-4"
                        v-for="(header, index) in headers"
                        :key="header"
                        :href="`#${index}`"
                        :class="{ active: index == currentSection }"
                    >{{ header }}</a>
                    <button class="w-fit bg-slate-700 text-white hover:shadow-lg duration-200 hover:shadow-blue-300 mt-4 ml-4" @click="showModal($event)">Show modal</button>
                </div>
            </aside>

            <Dialog
                title="Dialog"
                msg="Lorem ipsum dolor sit amet consectet consequatur laboriosam vel ex, aspernatur? Numquam debitis accusamus esse?"
            ></Dialog>
        </main>
        <div id="error" class="w-full h-screen flex items-center justify-center p-8">
            <p
                class="text-blue-600 animate-pulse text-xl"
            >Please enlarge your window for the site to work</p>
        </div>
    </div>
</template>

<style scoped>
main,
#error {
    background-color: #222;
    color: whitesmoke;
}

summary {
    list-style: none;
}

summary::-webkit-details-marker {
    display: none;
}

details summary::before {
    content: "🡒 ";
    color: tomato;
}

details[open] summary::before {
    content: "🡑 ";
    color: tomato;
}

aside a.active {
    font-weight: bold;
    border-color: tomato;
}

@media only screen and (max-width: 800px) {
    main,
    button {
        display: none;
    }
}

@media only screen and (min-width: 800px) {
    #error {
        display: none;
    }
}
</style>