<template >
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div :v-for="jig in jigs" :key="location">
      <div> {{jig.location}} </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Run from 'run-sdk'
import {ref} from 'vue';

class SimpleStore extends Run.Jig {
  set(value) {
    this.value = value
  }
}



export default {
  name: 'Home',
  async setup(){
    
    const run = new Run({network: "mock", purse: "cQ1B9RLSp9TqbtSvZRhRCzfNRes23Degtkynm4DFuAhjBUEuhqDP", owner: 'cTQPGSZiCXQD3UmrF4rKE6Gub3tmjYYvrjspU7BhXCYbg5f2r7AW', trust: "*"})
    const jig2 = new SimpleStore()
    console.log(run.owner.privkey)
    console.log(run.purse.privkey)

    jig2.set('Satoshi Nakamoto2')

    //  await jig.sync()

    //  console.log(jig.owner)
    // console.log(jig.location)
    // console.log(jig.origin)
    await run.inventory.sync();
    console.log(run.inventory.jigs);
    const jigs = new ref(run.inventory.jigs);
    return {run, jigs}
  },
  components: {
    HelloWorld
  }
}
</script>
