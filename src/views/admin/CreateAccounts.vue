<template>
    <div> <div class="text-2xl capitalize"> {{network}}</div></div>
    <div class='flex-items text-white'>
        <div class='flex-items items-center m-2 p-2 rounded' :class="networkClasses">
            <div class='p-2 m-2 text-left'> 
                <div> <span class="text-xl font-extrabold">Purse Address: </span>  {{purseAddress}}</div>
                <div> <span class="text-xl font-extrabold">Purse Public Script:  </span>{{purseScript}}</div>
                <div> <span class="text-xl font-extrabold">Purse Private Key: </span> {{pursePrivateKey}}</div>
            </div>

            <div class='p-2 m-2 text-left'> 
                <div> <span class="text-xl font-extrabold">Owner Address:  </span>{{ownerAddress}}</div>
                <div> <span class="text-xl font-extrabold">Owner Public Key: </span> {{ownerPublicKey}}</div>
                <div> <span class="text-xl font-extrabold">Owner Private Key: </span> {{ownerPrivateKey}}</div>
            </div>
        </div>
        <div> 
            <button @click="create('test')"
                type="button" 
                class="inline-flex items-center p-2 m-2 border border-transparent font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                Create Test Account 
            </button>
            <button @click="create('live')"
                type="button" 
                class="inline-flex items-center p-2 m-2 border border-transparent font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Create Live Account 
            </button>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import Run from "run-sdk";


export default {
    setup () {
        const state = reactive({
            count: 0,
            ownerAddress: "",
            ownerPublicKey: "",
            ownerPrivateKey: "",
            purseAddress: "",
            purseScript: "",
            pursePrivateKey: "",
            network: ""
        })
    
        return {
            ...toRefs(state),
        }
    },
    methods:{
        create(network){
            this.network = network
            let run; 
            if(network === "test"){
                run  = new Run({network: "test"})
            } else {
                run = new Run({})
            }
            this.ownerAddress = run.owner.address
            this.ownerPublicKey = run.owner.pubkey
            this.ownerPrivateKey = run.owner.privkey

            this.purseAddress = run.purse.address
            this.purseScript = run.purse.script
            this.pursePrivateKey = run.purse.privkey
        }
    },
    computed:{
        networkClasses() {
            if(this.network === "test"){
                return "bg-gray-200 border-red-500 border-2 bg-gradient-to-r from-red-900 via-red-700 to-red-400"
            } else {
                return "bg-gray-200 border-indigo-500 border-2 bg-gradient-to-r from-indigo-800 via-indigo-600 to-blue-400"
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>