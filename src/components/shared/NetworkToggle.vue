<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div :class="stateStyle">
       <span class='pb-1'> Live: </span>
    <Switch v-model="enabled" @click="setState" :class="[enabled ? 'bg-indigo-600' : 'bg-red-200 focus:ring-red-500', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
        <span class="sr-only">network</span>
        <span aria-hidden="true" :class="[enabled ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
    </Switch>
    </div>
</template>

<script>
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'
import { useStore} from 'vuex'

export default {
  components: {
    Switch,
  },
  setup() {
    const enabled = ref(false)
    const store = useStore()
    console.log(store.state.network);
    if(store.state.network === "live"){
        enabled.value = true;
    }
    return {
      enabled,
      store
    }
  },
  methods:{
      setState(){
          let val = !this.enabled ? "test": "live";
          console.log("setting network value:", val);
          this.store.commit("setNetwork", val)
      }
      //...mapState(["network"])
  },
  computed:{
      stateStyle(){
          if(this.store.state.network === "test"){
              return "text-2xl text-gray-800";
          }
          return "text-2xl text-indigo-600"
      }
  }
}
</script>