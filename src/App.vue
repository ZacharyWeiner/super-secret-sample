<template>
<div>

    <Suspense >
      <template #default>
        <div>
          <MainMenu />
          <!-- <div id="nav" class="shadow sm:flex items-center bg-grey-lightest">
            <a href="/" >
              <span class="text-blue-500"> støºpˆd qåm3s </span>
            </a> 
            <div class="flex flex-grow"></div>
            <router-link to="/" class="no-underline text-blue-dark text-md flex-1 text-center sm:ml-4">Home</router-link> |
            <router-link to="/play-game" class="no-underline text-blue-dark text-md flex-1 text-center sm:ml-4">Play </router-link> |
            <router-link to="/profile" class="no-underline text-blue-dark text-md flex-1 text-center sm:ml-4">Wallet</router-link> 
          </div> -->
          <!-- {{ $browserDetect }}
          <div v-if="!isSafari"> -->
            <router-view/>
          <!-- </div>
          <div v-else>
            <div class="lg:text-center">
              <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">We Apologize</h2>
              <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                This browser is not supported 
              </p>
              <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Please Try Chrome or Firefox. 
              </p>
            </div>
          </div> -->
          <Footer />
        </div>
      </template>
      <template #fallback>
        <div><i class="fas fa-spinner animate-spin"></i> Loading ...</div>
      </template>
  </Suspense>
</div>
</template>
<script>
 import Footer from "./components/shared/Footer.vue"
 import MainMenu from "./components/shared/menus/MainMenu.vue"
 import {useStore} from 'vuex'
 export default {
   setup(){
     let store = useStore()
     store.commit("setLoading", true);
     return {store}
   },
   methods:{
     isLoading(){
       console.log("Calling isLoading", this.$store.state.loading)
       return this.$store.state.loading;
     }
   },
   computed:{
     loadingText(){
       return this.$store.state.loadingText
     },
     isSafari(){
       var isSafari = !!navigator.userAgent.match(/Version\/[\d.]+.*Safari/);
        var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        
        if (isSafari && iOS) {
            //alert("You are using Safari on iOS!");
            return true;
        } else if(isSafari) {
            //alert("You are using Safari.");
            return true
        }
        return false;
     }
     
   },
   components:{
     Footer,
     MainMenu
   }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #1483f3;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
