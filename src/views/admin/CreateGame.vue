<template>
    <div>
        <button @click="createGame"> Create Game </button>
        <div class="flex">
            <div class="">Game Location {{gameLocation}}</div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import ZasteGame from "./../../contracts/game.js"
import RunStore from "./../../store/RunStore.js"
import Run from "run-sdk"
export default {
    setup () {
        const state = reactive({
            count: 0,
            gameLocation: ""
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
             const emoji = '🏆'
            const image = await Run.extra.B.loadWithMetadata('a87f93af5d9721b2871583e3cbab60aea181c5975c35b4a2d5a819d69ade0ce0', {
                title: 'Gold Trophy icon',
            })
            ZasteGame.metadata = { emoji, image }
            
            let game = new ZasteGame({}, 12500, "", ["default", "adventure"], {})
            try{
                let response = await game.sync()
                console.log({response})
                this.gameLocation = response.location;
            }catch(err){
                alert(err);
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>