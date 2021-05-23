<template>
<div>
  <div class="bg-white">
    <!-- Header -->
    <div class="relative pb-32 bg-gray-800">
      <div class="absolute inset-0">
        <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100" alt="" />
        <div class="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Games</h1>
        <p class="mt-6 max-w-7xl text-xl text-gray-300">Below is a list of all the published games that are yet to be won.</p>
        <p class="mt-6 max-w-7xl text-xl text-gray-300">Play One. Go win!</p>
      </div>
    </div>

    <!-- Overlapping cards -->
    <section class="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
      <h2 class="sr-only" id="contact-heading">Contact us</h2>
      <GameCardList :games="games" />
    </section>
  </div>
    <div>
        
    </div>
</div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import GameCardList from '../components/games/GameCardList.vue'
import RunStore from "./../store/RunStore.js"

export default {
    setup () {
        const games = ref([])
        const state = reactive({
            count: 0,
            gameList: []
        })
        return {
            ...toRefs(state),
            games
        }
    },
    async mounted(){
        await this.hydrateGames();
    },
    methods:{
        async hydrateGames(){
            try{
                let run = RunStore.useRun(this.$store)
                const gameList = await run.load(this.$store.state.gameListLocation);
                await gameList.sync();
                this.gameList = gameList.gameList;
                console.log(gameList);
                //let _games = [];
                
                await this.gameList.forEach(async (g) => {
                let ga = await run.load(g);
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
    components:{
        GameCardList
    }
}
</script>

<style lang="scss" scoped>

</style>