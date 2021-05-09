<template>
    <div>
        <div class="flex row flex-wrap justify-center items-center">
            <div class=" m-3 p-3 flex-col-5">
                <div class="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-md transition-transform transform hover:scale-105 hover:shadow-2xl">
                
                    <img class="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png">
                    
                    <div class="w-full px-8 absolute top-8">
                        <div class="flex justify-between">
                            <div class="">
                                <p class="font-light">
                                    Purse Address 
                                </p>
                                <p class="text-sm font-bold tracking-widest font-mono">
                                    {{purseAddress}}
                                </p>
                            </div>
                            <!-- <img class="w-14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1000px-Mastercard-logo.svg.png"/> -->
                        </div>
                        <div class="pt-1">
                            <p class="font-light">
                                Private Key
                            </p>
                            <p class="font-medium tracking-more-wider font-mono">
                                {{store.state.playerPursePrivKey.substring(0, 8)}} <span class="bg-blue-700  rounded-full px-2 py-1 text-xs absolute">●●●●</span>
                            </p>
                            
                        </div>
                        <div class="pt-6 pr-6">
                            <div class="flex justify-between">
                                
                                <div class="">
                                    <p class="font-light text-xs text-xs">
                                        Balance
                                    </p>
                                    <p class="font-medium tracking-wider text-sm font-mono">
                                    {{balanceInDuros}} Ðuros
                                    </p>
                                </div>
        
                                <!-- <div class="">
                                    <p class="font-light text-xs">
                                        CVC
                                    </p>
                                    <p class="font-bold tracking-more-wider text-sm font-mono">
                                        123
                                    </p>
                                </div> -->
                            </div>
                        </div>
        
                    </div>
                </div>
                <form class=" m-3 p-3 flex-col-5">
                    <div><label>  Change Purse PK </label></div>
                <input class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="cThvb4rx...." v-model="newPurse"/>
                <button class="px-8 rounded-r-lg bg-red-400  text-gray-800 font-bold p-4 uppercase border-red-500 border-t border-b border-r" @click="saveNewInfo">Save</button>
            </form>
            </div>
             
            <div class=" m-3 p-3 flex-col-5">
                <div class="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-md transition-transform transform hover:scale-105 hover:shadow-2xl">
                
                    <img class="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png">
                    
                    <div class="w-full px-8 absolute top-8">
                        <div class="flex justify-between">
                            <div class="">
                                <p class="font-light">
                                    Owner Address 
                                </p>
                                <p class="text-sm font-bold tracking-widest font-mono">
                                    {{ownerAddress}}
                                </p>
                            </div>
                            <!-- <img class="w-14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1000px-Mastercard-logo.svg.png"/> -->
                        </div>
                        <div class="pt-1">
                            <p class="font-light">
                                Priv Key
                            </p>
                            <p class="font-medium tracking-more-wider font-mono">
                                {{store.state.playerOwnerPrivKey.substring(0, 8)}} <span class="bg-blue-700  rounded-full px-2 py-1 text-xs absolute">●●●●</span>
                            </p>
                            
                        </div>
                        <!-- <div class="pt-6 pr-6">
                            <div class="flex justify-between">
                                
                                <div class="">
                                    <p class="font-light text-xs text-xs">
                                        Expires At
                                    </p>
                                    <p class="font-medium tracking-wider text-sm font-mono">
                                        03/25
                                    </p>
                                </div>
        
                                <div class="">
                                    <p class="font-light text-xs">
                                        CVC
                                    </p>
                                    <p class="font-bold tracking-more-wider text-sm font-mono">
                                        123
                                    </p>
                                </div>
                            </div>
                        </div> -->
        
                    </div>
                </div>
                
                <form class=" m-3 p-3 flex-col-5">
                <div><label>  Change Owner PK </label></div>
                <input class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="cThvb4rx...." v-model="newOwner"/>
                <button class="px-8 rounded-r-lg bg-red-400  text-gray-800 font-bold p-4 uppercase border-red-500 border-t border-b border-r" @click="saveNewInfo">Save</button>
            </form>
            </div>
        </div>
        <div class='flex row flex-wrap justify-center items-center'>
            
             
        </div>
    </div>
    
</template>

<script>
import { reactive, toRefs } from 'vue'
import Run from "run-sdk";
import { mapState, useStore } from 'vuex'
//import { mapState } from 'vuex'
export default {
    async setup () {
        const store = useStore();
        console.log(store);
        const run = new Run({network: "test", owner: store.state.playerOwnerPrivKey, purse: store.state.playerPursePrivKey})
        let ownerAddress = run.owner.address;
        let purseAddress = run.purse.address;
        let purseBalance = await run.purse.balance();
        const state = reactive({
            count: 0,
            ownerAddress: ownerAddress,
            purseAddress: purseAddress,
            purseBalance: purseBalance,
            newOwner: "",
            newPurse:""
        })
    
        return {
            ...toRefs(state),
            store
        }
    },
    methods:{
        saveNewInfo(){
            if(this.newOwner !== ""){
                this.store.commit("setPlayerOwnerPrivKey", this.newOwner);
            }
            if(this.newPurse !== ""){
                this.store.commit("setPlayerPursePrivKey", this.newPurse);
            }
        }
    }, 
    computed:{
        balanceInDuros(){
            return this.purseBalance / 500;
        }
    },
    ...mapState(["gameLocation", "gameTitle", "gameObject", "userAnswers", "playerOwnerPrivKey", "playerPursePrivKey"])
}
</script>

<style lang="scss" scoped>

</style>