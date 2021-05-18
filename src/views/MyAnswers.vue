<template>
    <div>
        <one-col-background>
            <template v-slot:title>
                My Games
            </template>
            <template v-slot:subtitle>
                My Answers
            </template>
            <!-- <template v-slot:left>
                <div> 
                  <div class="relative">
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                    <div class="w-full border-t border-gray-300" />
                    </div>
                    <div class="relative flex justify-center">
                    <button @click="loadMyAnswers" type="button" class="inline-flex items-center shadow-sm px-4 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <PlusSmIcon class="-ml-1.5 mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span>Load Games </span>
                    </button>
                    </div>
                </div>
                
                <div v-for="game in gameObjects" :key="game.location">
                    <button @click="selectGame(game.location)" class='w-full rounded-xl text-lg text-indigo-600 border-indigo-600 border-2 hover:bg-gray-200 m-2 p-2'> {{game.details.title}} </button>
                </div>
            </div>
            </template> -->
            <template v-slot:content>
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
                        <p>{{answer.gameId}}  </p>
                        <span v-for="a in answer.answers" :key="a" class='font-bold text-gray-800'> {{ ` ${a} ` }} </span>
                        <p><router-link :to="`/play-game/?id=${answer.gameId}`" class="text-sm text-gray-800 p-2"> Play Again</router-link></p>
                    </li>
                    </ul>
                </div>
                </div>
            </template>
        </one-col-background>
    </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import {useStore} from 'vuex'
import OneColBackground  from "./../components/shared/sections/OneColBackground.vue";
import Run from 'run-sdk'
export default {
    async setup () {
        let store = useStore()
        let run = new Run({network: "test", purse: store.state.playerPursePrivKey, owner: store.state.playerOwnerPrivKey, trust: "*"})
        let games = ref([]);
        let gameObjects = ref([]);
        let answers = ref([]);
        let _answers = [];
        let answersToDisplay = ref([]);
        await run.inventory.sync()
        console.log(store.state.gameCodeLocation)
        await run.inventory.jigs.find((jig) => {if(jig.constructor.origin === store.state.answerCodeLocation) _answers.push(jig)})
        answers.value = _answers;
        const state = reactive({
            count: 0,
        })
    
        return {
            ...toRefs(state),
            run,
            games,
            answers,
            answersToDisplay,
            gameObjects
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
        OneColBackground
    }
}
</script>

<style lang
        TwoColBackground="scss" scoped>

</style>