<template>
    <div>
        <div v-for="game in list" :key="game" class="flex bg-gray-200 rounded shadow p-6 m-1">
            <div class="flex flex-grow" >{{game}} </div>
            <div> <button @click="gameDetails(game)"> view details </button> </div>
        </div>
        <div> {{details}} </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import Run from "run-sdk"
// class GameList extends Run.Jig {
//     init(title){
//         this.title = title;
//         this.gameList = [];
//     }
//     updateTitle(title){
//         this.title = title;
//     }
//     addGame(id){
//         this.gameList.push(id);
//     }
//     removeGame(id){
//         this.gameList.pop(id);
//     }
// }
export default {
    async setup () {
        const run = new Run({network: "test", purse: "cQdpg2oTVvbeb47GzRxqn467RmJNp8rJzfoPMfkSBRyzqEdbJcSz", owner: 'cTQPGSZiCXQD3UmrF4rKE6Gub3tmjYYvrjspU7BhXCYbg5f2r7AW', trust: "*"})
        console.log("Run loaded with purse address:", run.purse.address);
        
        // const gameList = new GameList("Front Page Games");
        // await gameList.sync();
        await run.inventory.sync();
        const gameListClassOrigin = '3abf31ab5fe29789ea0c14737065787760f31779561ec7edd0b3d018a15fc73d_o1'
        const gameList = run.inventory.jigs.find((jig)=> jig.constructor.origin === gameListClassOrigin)
        console.log(gameList);
        //gameList.addGame("b7b57aed6bce702619d3f5cab7c68307e86b9429cfc2489228831348702f2c9f_o2");
        //gameList.removeGame("b7b57aed6bce702619d3f5cab7c68307e86b9429cfc2489228831348702f2c9f_o2");
        await gameList.sync();
        console.log(gameList.gameList);
        const state = reactive({
            count: 0,
            list: gameList.gameList,
            details: {},
        })
    
        return {
            ...toRefs(state),
            run
        }
    },
    methods:{
        async gameDetails(id){
            let game = await this.run.load(id);
            await game.sync();
            this.details = game.details
        }
    }
}
</script>

<style scoped>

</style>