<template>

    <div class="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div v-if="loadingGames"> <i class='fa fa-spinner animate-spin'></i> Loading ...</div>
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
                            <p class="text-xs font-medium text-gray-900">{{ game.location}}</p>
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
                <div v-if="fetchingDetails"> <i class='fa fa-spinner animate-spin'></i> Loading ...</div>
               {{details }} 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import {EyeIcon, PlayIcon} from "@heroicons/vue/outline"
export default {
    setup (props) {
        
        const state = reactive({
            games: props.games,
            details: {},
            count: 0,
            fetchingDetails: false
        })
    
        return {
            ...toRefs(state),
        }
    },
    methods:{
        gameLink(game){
            return "/play-game?id=" + game;
        },
        async gameDetails(id){
            this.fetchingDetails = true
            let game = await this.run.load(id);
            await game.sync();
            this.currentGame = game;
            this.details = game.details;
            this.fetchingDetails = false
        },
    },
    computed:{
        loadingGames(){
            return this.games.length === 0 
        },
    },
    components:{
        EyeIcon, PlayIcon
    },
    props:["games", "run"]
}
</script>

<style lang="scss" scoped>

</style>