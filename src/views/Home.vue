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
        <GameCardList :games="games" />
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
import { ref, reactive, toRefs, onMounted } from 'vue'
//import Run from 'run-sdk'
import {useStore} from 'vuex';
import Hero from "./../components/home/Hero.vue"
import NFT from "./../components/home/NFT.vue"
import GameCardList from './../components/games/GameCardList.vue';
import Steps from './../components/shared/Steps.vue';
import RunStore from "./../store/RunStore.js"
//import {ref} from 'vue';




export default {
  name: 'Home',
  async setup(){
    const store = useStore();
    store.dispatch("resetGame");
    let run = RunStore.useRun(store);
    const games = ref([]);
    let locationList = [];
    const state = reactive({
        count: 0
        
    })
    const syncGame = async (_run, _location) => {
      _run.activate()
      let g = await _run.load(_location)
      console.log("Loaded Game: ", g)
      try{
        await g.sync()
        games.value.push(g);
      }catch (err){
        console.log({err})
      }
    }
    const syncGames = async (_run) => {
      let stop = locationList.length > 8 ? 8 : locationList.length
      let iterations = 0;
      while(iterations < stop){
        let _gL = locationList[iterations]
        console.log("syncGames - iteration:", iterations, "Location: ", _gL)
        iterations = iterations + 1; 
        await syncGame(_run, _gL)
      }
    }
    const hydrateGames = async (_run, _store) =>{
      _run.activate()
      console.log("Awaiting Load of Game List:", _store.state.gameListLocation)
      let _listObj = await _run.load(_store.state.gameListLocation); 
      console.log("Awaitng Sync of Game List:", _store.state.gameListLocation)
      await _listObj.sync(); 
      console.log("Sync of Game List:", _store.state.gameListLocation, "Complete")
      let _gameList = _listObj.gameList
      console.log(_gameList.length)
      locationList = []
      _gameList.forEach(_location => {
        console.log({_location})
        locationList.push(_location)
      });
      syncGames(_run);
      _store.commit("setLoading", false);
    } 

    onMounted(async ()=> await hydrateGames(run, store))
    return {
      ...toRefs(state),
      games,
      run,
      hydrateGames,
      syncGame
    }
  },
  methods:{

  },
  components: {
    Hero,
    GameCardList,
    Steps,
    NFT
  }
}
</script>
