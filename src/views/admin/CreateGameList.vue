<template>
    <div>
        <button @click="createGameList"> Create Game LIst </button>
        <button @click="findOrigins"> Find origins </button>
        <div class="flex">
            <div class="">Game List Location {{gameListLocation}}</div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import GameList from "./../../contracts/gameList.js"
import RunStore from "./../../store/RunStore.js"
//import Run from "run-sdk"
export default {
    setup () {
        const state = reactive({
            count: 0,
            gameListLocation: ""
        })
    
        return {
            ...toRefs(state),
        }
    },
    methods:{
        async createGameList(){
            let run = RunStore.useRun(this.$store)
            console.log("Run", run.network)

            //let gameCodeLocation = "dc41006ab31a88dc7879cc10a62a0f7ff9eb987dea5d0b823004a5122cced187_o1"
            //let GameClass = await run.load(gameCodeLocation)//new ZasteGame({}, 12500, "", [], {})
             const emoji = '📋'
//a87f93af5d9721b2871583e3cbab60aea181c5975c35b4a2d5a819d69ade0ce0
            // const image = await Run.extra.B.loadWithMetadata('a87f93af5d9721b2871583e3cbab60aea181c5975c35b4a2d5a819d69ade0ce0', {
            //     title: 'Gold Trophy icon',
            // })
            GameList.metadata = { emoji }
            
            let gameList = new GameList("Coolest Games")
            try{
                let response = await gameList.sync()
                console.log({response})
                this.gameListLocation = response.location;
            }catch(err){
                alert(err);
            }
        },
        async findOrigins(){
            let run = RunStore.useRun(this.$store)
            await run.inventory.sync();
            await run.inventory.jigs.forEach( (j) => console.log(j.constructor.origin))
        }
    }
}
</script>

<style lang="scss" scoped>

</style>