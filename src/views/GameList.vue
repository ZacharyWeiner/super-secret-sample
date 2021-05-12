<template>
    <div>
        <div class="flex">
            <div class=" flex flex-grow bg-gray-200 rounded shadow p-2">
                <label class='text-2xl'>Add:</label>
                <input class='flex-grow rounded' v-model="toAdd" />
                <button class='rounded bg-green-500 text-white p-2 m-2' @click="addToList">add</button>
            </div>
            <div class=" flex flex-grow bg-gray-200 rounded shadow p-2">
                <label class='text-2xl'>Remove:</label>
                <input class='flex-grow rounded' v-model="toRemove" />
                <button class='rounded bg-red-500 text-white p-2 m-2' @click="removeFromList">remove</button>
            </div>
        </div>
        <div v-for="game in list" :key="game" class="flex bg-gray-200 rounded shadow p-6 m-1">
            <div class="flex flex-grow" >{{game}} </div>
            <div> <button @click="gameDetails(game)"> view details </button> </div>
        </div>
        <div> {{details}} </div>
        <button @click="showModal = true"> show modal </button>
        <Modal v-if="showModal" @close="showModal = false">
            <!--
            you can use custom content here to overwrite
            default content
            -->
            <template v-slot:header>
                <div class='bg-green-500 w-full'>
                    <h3 class='text-white font-extrabold'>Show me something new</h3>
                </div>
            </template>
        </Modal>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import Run from "run-sdk"
import Modal from "./../components/Modal.vue"
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
        //gameList.addGame("e79beac68a5ff6f3a617afb3091f3010fbc9d6de9cadc06496dc4053776529d1_o2");
        //gameList.removeGame("e29d9bcf51b5423956a58efdf3662e08d7a725656912b643e2bea2a10a91cb3b_o2");
        await gameList.sync();
        console.log(gameList.gameList);
        const state = reactive({
            count: 0,
            list: gameList.gameList,
            details: {},
            toAdd: "",
            toRemove: "",
            showModal: false
        })
    
        return {
            ...toRefs(state),
            run,
            gameList
        }
    },
    methods:{
        async gameDetails(id){
            let game = await this.run.load(id);
            await game.sync();
            this.details = game.details
        },
        async addToList(){
            this.gameList.addgame(this.toAdd);
            this.gameList.sync();
        },
        async removeFromList(){
            this.gameList.removeGame(this.toRemove);
            this.gameList.sync();
        }
    },
    components: {
        Modal
    }
}
</script>

<style scoped>

</style>