<template>
    <div>
        <div class="flex">
            <div class="m-1 flex-grow border-indigo-500 border-2 shadow sm:rounded-lg">
                <div class="px-4 py-5 sm:p-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        Add A Game
                    </h3>
                    <div class="mt-2 max-w-xl text-sm text-gray-500">
                        <p>
                        Add the location of a game that should be included in the list
                        </p>
                    </div>
                    <div class="mt-5 sm:flex sm:items-center">
                        <div class="w-full sm:max-w-xs">
                            <label for="toAdd" class="sr-only">Add Game</label>
                            <input type="text" name="toAdd" id="toAdd"  v-model="toAdd" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="xu6yd65gd....o1" />
                        </div>
                        <button @click="addToList" class="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Save
                        </button>
                    </div>
                </div>
            </div>
            <div class="m-1 flex-grow border-red-500 border-2 shadow sm:rounded-lg">
                <div class="px-4 py-5 sm:p-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        Remove A Game
                    </h3>
                    <div class="mt-2 max-w-xl text-sm text-gray-500">
                        <p>
                        Add the location of a game that should be removed from the list
                        </p>
                    </div>
                    <div class="mt-5 sm:flex sm:items-center">
                        <div class="w-full sm:max-w-xs">
                            <label for="toRemove" class="sr-only">Remove Game</label>
                            <input type="text" name="toAdd" id="toAdd"  v-model="toRemove" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="xu6yd65gd....o1" />
                        </div>
                        <button @click="removeFromList" class="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Save
                        </button>
                    </div>
                </div>
            </div>
            <!-- <div class=" flex flex-grow bg-gray-200 rounded shadow p-2">
                <label class='text-2xl'>Add:</label>
                <input class='flex-grow rounded' v-model="toAdd" />
                <button class='rounded bg-green-500 text-white p-2 m-2' @click="addToList">add</button>
            </div>
            <div class=" flex flex-grow bg-gray-200 rounded shadow p-2">
                <label class='text-2xl'>Remove:</label>
                <input class='flex-grow rounded' v-model="toRemove" />
                <button class='rounded bg-red-500 text-white p-2 m-2' @click="removeFromList">remove</button>
            </div> -->
        </div>

        <game-list-basic :games="games" :run="run"></game-list-basic >
    </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import {useStore} from "vuex"
import Run from "run-sdk"
import GameListBasic from "./../components/games/GameListBasic.vue"
export default {
    async setup () {
        const store = useStore();
        store.commit("setLoading", true);
        let run;
        if(store.state.playerOwnerPrivKey !== "" && store.state.playerPursePrivKey !== ""){
            run = new Run({network: "test", purse: store.state.playerPursePrivKey, owner: store.state.playerOwnerPrivKey, trust: "*"})
        } else {
            run =  new Run({network: "test", purse: "cQdpg2oTVvbeb47GzRxqn467RmJNp8rJzfoPMfkSBRyzqEdbJcSz", owner: "cQ6T6gHBeRfYXNQmqQW81UgvK1umM6zoRkgZGCpGqtzceyTpVMr8", trust: "*"})
            store.commit("setPlayerOwnerPrivKey", run.owner.privkey);
            store.commit("setPlayerPursePrivKey", run.purse.privkey);
        }
        let games = ref([]);
        const gameList = ref([])
       
        const state = reactive({
            count: 0,
            list: [],
            currentGame: null,
            toAdd: "",
            toRemove: "",
        })
        
        return {
            ...toRefs(state),
            run,
            gameList,
            games,
            store
        }
    },
    async mounted(){
        console.log("Run loaded with purse address:", this.run.purse.address);
        const gameList = await  this.run.load(this.$store.state.gameListLocation);
        console.log(gameList);
        await gameList.sync();
        console.log(gameList.gameList);
        this.list = gameList.gameList;
        gameList.gameList.forEach(async (g) => {
            let hydrated = await this.run.load(g);
            this.games.push(hydrated);
            if(this.games.length === gameList.gameList.length){
                this.$store.commit("setLoading", false);
            }

        })
    },
    methods:{
        
        
        async addToList(){
            this.gameList.addgame(this.toAdd);
            this.gameList.sync();
        },
        async removeFromList(){
            this.gameList.removeGame(this.toRemove);
            this.gameList.sync();
        },
        async getImage(game){
            await this.run.load(game).then((g) => {
                console.log(g.details.question_1.imgUrl)
                return g.details.question_1.imgUrl;
            })
            
        }
    },
    components: {
       GameListBasic
        // Modal
    }
}
</script>

<style scoped>

</style>