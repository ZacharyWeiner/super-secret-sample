<template >
<div class="flex flex-col h-auto bg-white">
  <div class=' p-6 m-6 '>
  <div class="p-5 bg-clip-text text-transparent font-extrabold text-5xl bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 "> 
    Play Games With Us 
  </div>
  <div class="pt-3 bg-clip-text text-transparent font-extrabold text-3xl bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 "> 
    Where winning the game, means <br/> WINNING THE GAME.  
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
  
  <div class="p-3 m-3"></div>
  </div>
  <div class="p-3 m-3"></div>
  <div class='bg-gray-200 rounded '>
    <div class="p-3 m-3"></div>
  <div class="pt-3 bg-clip-text text-transparent font-extrabold text-3xl bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800"> 
    How It Works
  </div>
  <div class="p-3 m-3"></div>
  <!-- HOW IT WORKS 1--> 

<!-- 
  <div class="flex flex-col w-auto shadow-xl rounded-t m-2">
    <div class="w-full rounded-t-xl  bg-gradient-to-r from-purple-400 via-purple-700 to-blue-400 text-white "> 
      <h3 class='text-md pt-4'> Step 1.  </h3>
      <div class="text-2xl font-extrabold" >Take The Journey </div>
    </div>
    <div class="mt-4 text-lg">
      Each game asks a series of questions. Your answers to each question form your journey. After making it through all the doors, picking up all the jewels, and decoding all the scrolls, you'll reach the chance to see if youve won.
    </div>
    <div class="mt-4 text-lg">
      After making it through all the doors, picking up all the jewels, and decoding all the scrolls, you'll reach the chance to see if youve won.
    </div>
  </div>

  <div class="flex flex-col w-auto shadow-xl rounded-t m-2">
    <div class="w-full rounded-t-xl  bg-gradient-to-r from-blue-400 via-blue-900 to-green-600 text-white "> 
      <h3 class='text-md pt-4'> Step 2.  </h3>
      <div class="text-2xl font-extrabold" >Save Your Story </div>
    </div>
    <div class="mt-4">
      To check &amp; see if you won, you must first save your story to the blockchain for all time. (dont worry you just click a button)<br/>
      Once your answers are written to the blockchain, you can check to see if you won. A hash of the game's winning code is stored at the release of the game. If the hash of your journey matches the winning hash you've won!
    </div>
    <div class='pt-4'> Every time you check a journey to see if you've won the game will package up an NFT with a few satoshis. If your journey does not unlock the puzzle, 1/2 of the satoshis will be sent to the game, increasing the value of the game. </div>
  </div>

  <div class="flex flex-col w-auto shadow-xl rounded-t m-2">
    <div class="w-full rounded-t-xl  bg-gradient-to-r from-green-700 via-green-500 to-green-200 text-white "> 
      <h3 class='text-md pt-4'> Step 3.  </h3>
      <div class="text-2xl font-extrabold" >Win </div>
    </div>
    <div class="mt-4">
            If you are the first to take the winning journey, you win the game! In our games that means you actually WIN the game. The records (NFT) on the bllockchain are transfered to your account immediately, and are avaialble on the next block confirmation. 
    </div>
  </div> -->


<!-- HOW IT WORKS 2--> 

 <div class="flex flex-col w-auto shadow-2xl rounded m-2 rounded-b-xl">
   <div class="bg-white rounded-t">
    <div class="w-full bg-clip-text text-transparent rounded  bg-gradient-to-r from-purple-400 via-purple-700 to-blue-400  "> 
      <h3 class='text-md pt-4'> Step 1.  </h3>
      <div class="text-2xl font-extrabold" >Take The Journey </div>
    </div>
   </div>
    <div class="bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 rounded-b-xl text-white">
      <div class="mt-4">
        Each game asks a series of questions. Your answers to each question form your journey. After making it through all the doors, picking up all the jewels, and decoding all the scrolls, you'll reach the chance to see if youve won.
      </div>
      <div class="mb-4">
        After making it through all the doors, picking up all the jewels, and decoding all the scrolls, you'll reach the chance to see if youve won.
      </div>
    </div>
  </div>
<div class="p-1 m-1"></div>
  <div class="flex flex-col w-auto shadow-xl rounded-t m-2 rounded-b-xl">
    <div class="bg-white rounded-t">
    <div class="w-full bg-clip-text text-transparent rounded-t-xl  bg-gradient-to-r from-blue-400 via-blue-900 to-green-600 "> 
      <h3 class='text-md pt-4'> Step 2.  </h3>
      <div class="text-2xl font-extrabold" >Save Your Story </div>
    </div>
    </div>
    <div class="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 rounded-b-xl text-white">
    <div class="mt-4">
      To check &amp; see if you won, you must first save your story to the blockchain for all time. (dont worry you just click a button)<br/>
      Once your answers are written to the blockchain, you can check to see if you won. A hash of the game's winning code is stored at the release of the game. If the hash of your journey matches the winning hash you've won!
    </div>
    <div class='mb-4'> Every time you check a journey to see if you've won the game will package up an NFT with a few satoshis. If your journey does not unlock the puzzle, 1/2 of the satoshis will be sent to the game, increasing the value of the game. </div>
    </div>
  
  </div>
<div class="p-1 m-1"></div>
  <div class="flex flex-col w-auto shadow-xl rounded-t m-2 rounded-b-xl">
    <div class="bg-white rounded-t">
    <div class="w-full bg-clip-text text-transparent rounded-t-xl  bg-gradient-to-r from-green-700 via-green-600 to-green-400 "> 
      <h3 class='text-md pt-4'> Step 3.  </h3>
      <div class="text-2xl font-extrabold" >Win </div>
    </div>
    </div>
     <div class="bg-gradient-to-r from-green-700 via-green-800 to-green-900 rounded-b-xl text-white">
    <div class="m-4 p-4">
            If you are the first to take the winning journey, you win the game! In our games that means you actually WIN the game. The records (NFT) on the bllockchain are transfered to your account immediately, and are avaialble on the next block confirmation. 
    </div>
    </div>
  </div>

<!-- !HOW IT WORKS 2--> 
</div>
<div class="p-1 m-1"></div>
  <div class="flex justify-center">
    <div class="w-full bg-gray-200">
      <div class="p-2 m-2"></div>
      <div class="pt-3 bg-clip-text text-transparent font-extrabold text-3xl bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800 "> 
        Available Games
      </div>
      <div class="p-2 m-2"></div>
    </div>
  </div>
  <div class='flex rounded-xl m-2 p-4 shadow'>
    <div v-for="game in games" :key="game.location" class="rounded shadow sm:w-1/2 md:w-1/4">
      
      <div class="text-white rounded-t text-xl bg-blue-500">
        <span class="p-2 m-2"> {{game.details.title}} </span>
      </div>
      <div class=''> 
        <img :src="game.details.question_1.imgUrl" />
      </div>
      <div class="">
         <router-link :to="`/play-game?id=${game.origin}`" class="no-underline  text-lg flex-1 text-center p1 m-1"><i class="fa fa-play"></i>Play</router-link> 
      </div>
    </div>
  </div>
</div>
</template>




<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import { ref, reactive, toRefs } from 'vue'
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
    if(store.state.playerOwnerPrivKey !== "" && store.state.playerPursePrivKey !== ""){
      console.log("has priv keys");
      run = new Run({network: "test", purse: store.state.playerPursePrivKey, owner: store.state.playerOwnerPrivKey, trust: "*"})
    }
    else{
       //run = new Run({network: "test", purse: "cQdpg2oTVvbeb47GzRxqn467RmJNp8rJzfoPMfkSBRyzqEdbJcSz", owner: 'cTQPGSZiCXQD3UmrF4rKE6Gub3tmjYYvrjspU7BhXCYbg5f2r7AW', trust: "*"})
       run = new Run({network: "test", trust: "*"})
       store.commit("setPlayerOwnerPrivKey", run.owner.privkey);
       store.commit("setPlayerPursePrivKey", run.purse.privkey)
    }
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
        const gameList = await this.run.load(this.$store.state.gameListLocation);
        await gameList.sync();
        this.gameList = gameList.gameList;
        console.log(gameList);
        //let _games = [];
        await this.gameList.forEach(async (g) => {
          let ga = await this.run.load(g);
          this.games.push(ga);
          console.log(ga)
        })
        //this.games = _games;
    },
  },
  async mounted(){
    await this.hydrateGames();
  },
  components: {
    //HelloWorld
  }
}
</script>
