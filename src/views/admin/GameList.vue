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
import { ref, reactive, toRefs, onMounted } from 'vue'
import {useStore} from "vuex"
import RunStore from "../../store/RunStore.js"
import GameListBasic from "./../../components/games/GameListBasic.vue"
export default {
    async setup () {
        const store = useStore();
        store.commit("setLoading", true);
        let run = RunStore.useRun(store)
        let games = ref([]);
        //const gameList = ref([])

        const loadList = async(_run, _store) => {
            _run.activate()
            console.log("Run loaded with purse address:", _run.purse.address);
            let lc = _store.state.gameListLocation
            console.log(lc)
            //let gameList ;
            await _run.load(lc)
            console.log("Completed Load")
            
        }
       
        const state = reactive({
            count: 0,
            list: [],
            currentGame: null,
            toAdd: "",
            toRemove: "",
        })
        onMounted(async()=>{await loadList(run, store)})
        
        return {
            ...toRefs(state),
            run,
            //gameList,
            games,
            store,
            loadList
        }
    },
    async mounted(){
        // console.log("Run loaded with purse address:", this.run.purse.address);
        // let _run = RunStore.useRun(this.$store)
        // _run.activate()
        // let lc = this.$store.state.gameListLocation
        // let gameList;
        // try{
        //  gameList  = await  _run.load(lc);
        // }catch(err){console.log({err})}
        // console.log(gameList);
        // await gameList.sync();
        // console.log(gameList.gameList);
        // this.list = gameList.gameList;
        // console.log(gameList.gameList.length)
        // if(gameList.gameList.length == 0){
        //     this.$store.commit("setLoading", false);
        //     return
        // }
        // gameList.gameList.forEach(async (g) => {
        //     let hydrated = await this.run.load(g);
        //     this.games.push(hydrated);
        //     if(this.games.length === gameList.gameList.length){
        //         this.$store.commit("setLoading", false);
        //     }

        // })
    },
    methods:{
        
        
        async addToList(){
            let gl = await this.run.load(this.$store.state.gameListLocation)
            await gl.sync()
            gl.addGame(this.toAdd);
            await gl.sync();
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