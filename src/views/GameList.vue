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

    <div class="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
    <div class="max-w-max lg:max-w-7xl mx-auto">
      <div class="relative z-10 mb-8 md:mb-2 md:px-6">
        <div class="text-base max-w-prose lg:max-w-none">
          <h2 class="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Games In Process</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Explore all the games in the list</p>
        </div>
      </div>
      <div class="relative">
        <svg class="hidden md:block absolute top-0 right-0 -mt-20 -mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
          <defs>
            <pattern id="95e8f2de-6d30-4b7e-8159-f791729db21b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
        </svg>
        <svg class="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
          <defs>
            <pattern id="7a00fe67-0343-4a3c-8e81-c145097a3ce0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
        </svg>
        <div class="relative md:bg-white md:p-6">
          <div class="lg:grid lg:grid-cols-2 lg:gap-6">
            <div class="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
                <ul class="space-y-3 bg-gray-200" style=" max-height:500px;overflow-y: scroll;">
                    <li v-for="game in games" :key="game" class="flex bg-white shadow overflow-hidden px-4 py-4 m-2 sm:px-6 sm:rounded-md">
                        <img class="h-16 w-16 rounded-full" :src="game.details.question_1.imgUrl" alt="" />
                        <div class="ml-3">
                            <p class="text-md font-medium text-gray-900">{{ game.details.title}}</p>
                            <button class="inline-flex items-center m-1 px-4 py-2 text-sm border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="gameDetails(game.location)"> 
                                <EyeIcon class='h-4 w-4 m-2' />
                                view details 
                            </button>
                            <a class='inline-flex items-center px-4 py-2 text-sm border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500' :href="gameLink(game.location)"> 
                                <PlayIcon class='h-4 w-4 m-2'/> 
                                launch 
                            </a> 
                        </div>
                    </li>
                </ul>         
            </div>
            <div class="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
                <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Details</p>
                 <div class="relative">
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                    <div class="w-full border-t border-gray-300" />
                    </div>
                    <div class="relative flex justify-center">
                    <span class="px-3 bg-white text-lg font-medium text-gray-900">
                        As JSON
                    </span>
                    </div>
                </div>
               {{details }} 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import Run from "run-sdk"
import {EyeIcon, PlayIcon} from "@heroicons/vue/outline"
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
        await run.inventory.sync();
        const gameListClassOrigin = '3abf31ab5fe29789ea0c14737065787760f31779561ec7edd0b3d018a15fc73d_o1'
        const gameList = run.inventory.jigs.find((jig)=> jig.constructor.origin === gameListClassOrigin)
        console.log(gameList);
        await gameList.sync();
        console.log(gameList.gameList);
        let games = ref([]);
        gameList.gameList.forEach(async (g) => {
            let hydrated = await run.load(g);
            games.value.push(hydrated);

        })
        const state = reactive({
            count: 0,
            list: gameList.gameList,
            currentGame: null,
            details: {},
            toAdd: "",
            toRemove: "",
            showModal: false
        })
    
        return {
            ...toRefs(state),
            run,
            gameList,
            games
        }
    },
    methods:{
        gameLink(game){
            return "/play-game?id=" + game;
        },
        async gameDetails(id){
            let game = await this.run.load(id);
            await game.sync();
            this.currentGame = game;
            this.details = game.details;
        },
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
        EyeIcon,
        PlayIcon
    }
}
</script>

<style scoped>

</style>