<template >
<div class="flex flex-col h-auto bg-white">
  <Hero />
  <div class="border-t-2"></div>
    <div class="bg-indigo-700">
    <div class="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
      <h2 class="text-base font-semibold text-white tracking-wide uppercase">Active</h2>
      <p class="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Games</p>
       <p class="max-w-xl mt-5 mx-auto text-xl text-white">Each game is a unique journey. </p>
        <p class="max-w-xl mt-5 mx-auto text-xl text-white">There are many answer combos, only one unlocks the game.</p>
      <div class="mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
        <GameCardList :games="games.slice(1, 5)" />
      </div>
    </div>
  </div>
<div class="bg-white pt-12 lg:pt-32">
    <div class="max-w-7xl mx-auto py-0 px-4 sm:px-6 lg:pb-12 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
      <div>
        <h2 class="text-base font-semibold text-indigo-600 uppercase tracking-wide">Take The Journey</h2>
        <p class="mt-2 text-3xl font-extrabold text-gray-900">Win the Game</p>
        <p class="mt-4 text-lg text-gray-500">Every time a player checks if they've won, the purse increases slightly. Win the game, the purse is yours.</p>
      </div>
      <div class="mt-12 lg:mt-0 lg:col-span-2">
        <Steps />
      </div>
    </div>
  </div>
  <NFT />







  
</div>
</template>




<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import { ref, reactive, toRefs } from 'vue'
//import Run from 'run-sdk'
import {useStore} from 'vuex';
import Hero from "./../components/home/Hero.vue"
import NFT from "./../components/home/NFT.vue"
import GameCardList from './../components/games/GameCardList.vue';
import Steps from './../components/shared/Steps.vue';
import RunStore from "./../store/RunStore.js"
//import {ref} from 'vue';

// class SimpleStore extends Run.Jig {
//   set(value) {
//     this.value = value
//   }
// }



export default {
  name: 'Home',
  async setup(){
    const store = useStore();
    store.dispatch("resetGame");
    let run = RunStore.useRun(store);
    const games = ref([]);
    const state = reactive({
        gameList: []
        
    });
    console.log(state);
    return {
      ...toRefs(state),
      games,
      run
    }
  },
  methods:{
    innards() {
      // var classobj = Array;
        if(this.jigs.length > 0){
         console.log(Object.getOwnPropertyNames(this.jigs[0]));
        var obj = this.jigs[0];
         var result = [];
          for (var id in obj) {
            try {
              if (typeof(obj[id]) == "function") {
                result.push(id + ": " + obj[id].toString());
              }
            } catch (err) {
              result.push(id + ": inaccessible");
            }
          }
          console.log(result);
        }
        return ""
      },
      async hydrateGames(){
        try{
          let _run = RunStore.useRun(this.$store);
          console.log("Trying to load game list:", this.$store.state.gameListLocation);
        const gameList =  await _run.load(this.$store.state.gameListLocation);
        await gameList.sync();
        this.gameList = gameList.gameList;
        console.log(gameList);
        //let _games = [];
        await this.gameList.forEach(async (g) => {
          let ga = await _run.load(g);
          await ga.sync();
          this.games.push(ga);
          console.log(ga)
        })
        //this.games = _games;
        this.$store.commit("setLoading", false);
        }
        catch(err){
          this.$store.commit("setLoading", false);
          console.log(err);
        }
    },
  },
  async mounted(){
    await this.hydrateGames();
    
  },
  components: {
    Hero,
    GameCardList,
    Steps,
    NFT
  }
}
</script>
