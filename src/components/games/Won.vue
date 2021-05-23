<template>
    <div>
    <one-col-background> 
        <template v-slot:title >
            <h3 class='text-indigo-600 font-extrabold text-3xl'> This Game Is Already Won</h3>
        </template>
        <template v-slot:subtitle >
            <h3 class='text-indigo-600 font-extrabold text-3xl'> {{game.details.title}}</h3>
        </template>
        <template v-slot:content >
            <img :src="game.details.question_1.imgUrl" class='rounded-xl shadow-xl' />
            <div class="p-2 m-2">
                <router-link to="/" class="pb-2 mb-2 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-bold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-lg">
                <span class='h-6 w-6' > <HomeIcon /> </span> <span class='px-2 mx-2'> Home </span>
                </router-link>
            </div>
        </template>
    </one-col-background>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import OneColBackground from "./../shared/sections/OneColBackground.vue"
import { useStore } from 'vuex'
import {useRouter } from "vue-router"
import RunStore from "./../../store/RunStore.js"
import {HomeIcon} from "@heroicons/vue/outline"

export default {
    async setup () {
        const store = useStore();
        let run;
        let router = useRouter();
        if(router.currentRoute.value.query.id){
            store.commit("setGameLocation", router.currentRoute.value.query.id);
        }
        run = RunStore.useRun(store)
        let game = await run.load(store.state.gameLocation);
        await game.sync();
        const state = reactive({
            count: 0,
        })
    
        return {
            ...toRefs(state),
            game
        }
    },
    components: {
        OneColBackground,
        HomeIcon
    }
}
</script>

<style lang="scss" scoped>

</style>