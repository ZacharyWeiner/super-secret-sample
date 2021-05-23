<template>
    <div>
        <two-col-background>
            <template v-slot:title>
                My Games
            </template>
            <template v-slot:subtitle>
                My History
            </template>
            <template v-slot:left>
            <div>
                <div class="relative">
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                    <div class="w-full border-t border-gray-300" />
                    </div>
                    <div class="relative flex justify-center">
                    <span class="px-3 bg-white text-lg font-medium text-gray-900">
                        Games
                    </span>
                    </div>
                </div>
                <div v-for="game in games" :key="game.location" class='bg-white rounded shadow-xl m-2 p-2 border-indigo-500 border-2 rounded'>
                    <ul>
                    <li class="" >
                        <div class='flex flex-col items-center justify-center '>
                            <div > <img :src="game.details.question_1.imgUrl" class="h-16 w-16 rounded-full"></div>
                            <div>
                            <h3 class='text-xl text-indigo-600 font-extrabold'> {{game.details.title}}  </h3>
                            <p class='text-gray-800'>{{game.satoshis /500}} Duros</p>
                            </div>
                        </div>
                    </li>
                    </ul>
                </div>
            </div>
            </template>
            <template v-slot:right>
                <div> 
                 <div class="relative">
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                    <div class="w-full border-t border-gray-300" />
                    </div>
                    <div class="relative flex justify-center">
                    <span class="px-3 bg-white text-lg font-medium text-gray-900">
                        Answers
                    </span>
                    </div>
                </div>
                <div v-for="answer in answers" :key="answer.toString()" class='bg-white rounded shadow-xl m-2 p-2'>
                    <ul>
                    <li >
                        
                        <span v-for="a in answer.answers" :key="a" class='font-bold text-gray-800'> {{ ` ${a} ` }} </span>
                        <p><router-link :to="`/play-game/?id=${answer.gameId}`" class="text-sm text-gray-800 p-2 underline"> Play Again</router-link></p>
                        <p class='break-all text-sm'>{{answer.gameId}} </p>
                    </li>
                    </ul>
                </div>
                </div>
            </template>
        </two-col-background>
    </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import {useStore} from 'vuex'
import TwoColBackground  from "./../components/shared/sections/TwoColBackground.vue";
import RunStore from './../store/RunStore.js'
export default {
    async setup () {
        let store = useStore()
        let run = RunStore.useRun(store);
        let games = ref([]);
        let gameObjects = ref([]);
        let answers = ref([]);
        let _answers = [];
        let _games = [];
        let answersToDisplay = ref([]);
        await run.inventory.sync()
        console.log(store.state.gameCodeLocation)
        await run.inventory.jigs.find((jig) => {if(jig.constructor.origin === store.state.answerCodeLocation) _answers.push(jig)})
        await run.inventory.jigs.find((jig) => {if(jig.constructor.origin === store.state.gameCodeLocation) _games.push(jig)})
        answers.value = _answers;
        games.value = _games;
        const state = reactive({
            count: 0,
        })
    
        return {
            ...toRefs(state),
            run,
            games,
            answers,
            answersToDisplay,
            gameObjects,
        }
    },
    methods:{
        async loadMyAnswers(){
          
        },
        selectGame(id){
            this.answersToDisplay = [];
            this.answers.forEach((a) =>{ console.log(a.gameId, id); if(a.gameId === id){ this.answersToDisplay.push(a.answers)}})
            console.log("Answers To Display:", this.answersToDisplay);
            this.filterAnswers();
        },

    },
    components:{
        TwoColBackground
    }
}
</script>

<style lang
        TwoColBackground="scss" scoped>

</style>