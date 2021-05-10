<template >
<div class="p-6 m-6 flex flex-col h-auto">
  <div class="pb-5 bg-clip-text text-transparent font-extrabold text-5xl bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 "> 
    Play Games With Us 
  </div>
  <div class="pt-3 bg-clip-text text-transparent font-extrabold text-3xl bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 "> 
    Where winning the game, means winning <br/>THE GAME.  
  </div>
  <div class="pt-6 pb-6 flex">
    <div class="flex-grow"></div>
    <!-- <div class="px-2">
      <button class="w-48 h-full bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-4 px-4 rounded outline-white">
        How it works
      </button>
    </div> -->
    <div class="">
      <router-link to="/play-game" class="w-48 h-full bg-white-500 hover:bg-blue-700 text-gray-900 hover:text-white font-bold py-4 px-4 rounded outline-black">
        <i class="fa fa-play"></i> Play
      </router-link >
    </div>
    <div class="flex-grow"></div>
  </div>
  <div class="flex p-6 m-6  justify-center">
    <div class="text-4xl font-bold underline"> How It Works </div>
  </div>
  <div class="flex">
    <div class="flex-grow shadow-xl text-xl font-extrabold rounded-t-xl text-white bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 m-1">
      <div class='p-2 m-2'> 1. Take The Journey </div>
      <div class='text-md bg-white text-gray-800 font-thin text-wrap'>
      <p class='p-4'> Each game consists of a set of questions. Answering each question will move you along your journey. At the end of the journey, you're ready to see if you've won. </p>
      </div>
    </div>
    <div class="flex-grow shadow-xl text-xl font-extrabold rounded-t-xl text-white bg-gradient-to-r from-purple-400 via-blue-500 to-purple-500 m-1">
     <div class='p-2 m-2'> 2. Check Your Path </div>
      <div class='text-md bg-white text-gray-800 font-thin text-wrap'>
      <p class='p-4'> Each game consists of a set of questions. Answering each question will move you along your journey. At the end of the journey, you're ready to see if you've won. </p>
      </div>
    </div>
    <div class="flex-grow shadow-xl text-xl font-extrabold rounded-t-xl text-white bg-gradient-to-r from-pink-400 via-blue-500 to-pink-500 m-1">
     <div class='p-2 m-2'> 3. Win The Game</div>
      <div class='text-md bg-white text-gray-800 font-thin text-wrap'>
      <p class='p-4'> Each game consists of a set of questions. Answering each question will move you along your journey. At the end of the journey, you're ready to see if you've won. </p>
      </div>
    </div>
  </div>
</div>
</template>




<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Run from 'run-sdk'
import {useStore} from 'vuex';
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
    let run;
    if(store.state.playerOwnerPrivKey !== "" && store.state.playerPursePrivKey){
      run = new Run({network: "test", purse: store.state.playerPursePrivKey, owner: store.state.playerOwnerPrivKey, trust: "*"})
    }
    else{
       run = new Run({network: "test", purse: "cQdpg2oTVvbeb47GzRxqn467RmJNp8rJzfoPMfkSBRyzqEdbJcSz", owner: 'cTQPGSZiCXQD3UmrF4rKE6Gub3tmjYYvrjspU7BhXCYbg5f2r7AW', trust: "*"})
    }
    return {run}
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
      }
    },
  mounted(){},
  components: {
    //HelloWorld
  }
}
</script>
