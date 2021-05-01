<template >
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div v-for="jig in jigs" :key="jig.location">
      <div> {{jig.location}} </div>
      <div> {{innards(jig)}} </div>
    </div>
  </div>
</template>




<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Run from 'run-sdk'
import {ref} from 'vue';

// class SimpleStore extends Run.Jig {
//   set(value) {
//     this.value = value
//   }
// }



export default {
  name: 'Home',
  async setup(){
    //father valve twelve miss opera tiger confirm hockey find cluster fury biology 
    //mqJ1NfFN4xGTdsaVzwVEk7TzH1N1ArYhtV
    //cQdpg2oTVvbeb47GzRxqn467RmJNp8rJzfoPMfkSBRyzqEdbJcSz 
    const run = new Run({network: "test", purse: "cQdpg2oTVvbeb47GzRxqn467RmJNp8rJzfoPMfkSBRyzqEdbJcSz", owner: 'cTQPGSZiCXQD3UmrF4rKE6Gub3tmjYYvrjspU7BhXCYbg5f2r7AW', trust: "*"})
    //const jig2 = new SimpleStore()
    console.log("Balance:", await run.purse.balance())
    console.log(run.owner.privkey)
    console.log(run.purse.privkey)
    console.log(run.purse.address)

    //jig2.set('Satoshi Nakamoto5')

     //await jig2.sync()

    //  console.log(jig.owner)
    // console.log(jig.location)
    // console.log(jig.origin)
    await run.inventory.sync();
    const simpleStore = run.inventory.jigs; 
    console.log(simpleStore);
    const jigs = new ref([]);
    jigs.value = simpleStore;
    return {run, jigs}
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
    HelloWorld
  }
}
</script>
