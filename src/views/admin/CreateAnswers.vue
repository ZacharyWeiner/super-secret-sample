<template>
    <div>
        <button @click="createGame"> Create Answers Class </button>
        <div class="flex">
            <div class="">Answers Location {{answersLocation}}</div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import Answers from "./../../contracts/answers.js"
import RunStore from "./../../store/RunStore.js"
//import Run from "run-sdk"
export default {
    setup () {
        const state = reactive({
            count: 0,
            answersLocation: ""
        })
    
        return {
            ...toRefs(state),
        }
    },
    methods:{
        async createGame(){
            let run = RunStore.useRun(this.$store)
            console.log("Run", run.network)

            //let gameCodeLocation = "dc41006ab31a88dc7879cc10a62a0f7ff9eb987dea5d0b823004a5122cced187_o1"
            //let GameClass = await run.load(gameCodeLocation)//new ZasteGame({}, 12500, "", [], {})
             const emoji = '🔏'
//a87f93af5d9721b2871583e3cbab60aea181c5975c35b4a2d5a819d69ade0ce0
            // const image = await Run.extra.B.loadWithMetadata('a87f93af5d9721b2871583e3cbab60aea181c5975c35b4a2d5a819d69ade0ce0', {
            //     title: 'Gold Trophy icon',
            // })
            Answers.metadata = { emoji }
            
            let answers = new Answers("gameId", ["answers"], 100, "winAddress")
            try{
                let response = await answers.sync()
                console.log({response})
                this.answersLocation = response.location;
            }catch(err){
                alert(err);
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>