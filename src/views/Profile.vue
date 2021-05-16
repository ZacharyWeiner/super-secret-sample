<template>
    <div>
        <div class="flex row flex-wrap justify-center items-center">
            <div class=" m-3 p-3 flex-col-5 border-indigo-500 border-2 rounded-xl">
                <div class="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-md transition-transform transform hover:scale-105 hover:shadow-2xl">
                
                    <img class="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png">
                    
                    <div class="w-full px-4 absolute top-8">
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
                        
                        <div class="pt-1 flex-wrap">
                            <p class="font-light">
                                Private Key
                            </p>
                            <p v-if="!showFullPurse" class="font-medium tracking-more-wider font-mono">
                                {{store.state.playerPursePrivKey.substring(0, 8)}} <span class="bg-blue-700  rounded-full px-2 py-1 text-xs absolute">●●●●</span>
                            </p>
                            <p v-if="showFullPurse" class="text-xs" style='word-wrap: break-word;'>
                                <span class="flex-wrap">{{store.state.playerPursePrivKey}}</span>
                            </p>
                            <p class='pt-1'><button @click="showFullPurse = !showFullPurse">{{showFullPurse ? "hide":"show"}}</button></p>
                        </div>
                        <div class="pt-2 pr-2">
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
                <div class="p-2 m-2">
                    <label for="pursePK" class="block text-sm font-medium text-gray-700">New Purse PK</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <KeyIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input type="text" name="pursePK" id="pursePK" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="cThvb4rx...." v-model="newPurse" />
                    </div>
                </div>
            </div>
             
            <div class=" m-3 p-3 flex-col-5  border-red-500 border-2 rounded-xl">
                <div class="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-md transition-transform transform hover:scale-105 hover:shadow-2xl">
                
                    <img class="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/Zi6v09P.png">
                    
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
                        <br/>
                        <div class="pt-1 items-center">
                            <p class="font-light">
                                Private Key
                            </p>
                            <p v-if="!showFullOwner" class="font-medium tracking-more-wider font-mono">
                                {{store.state.playerOwnerPrivKey.substring(0, 8)}} <span class="bg-blue-700  rounded-full px-2 py-1 text-xs absolute">●●●●</span>
                            </p>
                            <div v-if="showFullOwner" class="items-center">
                                <p v-if="showFullOwner" class="text-xs text-center" style='word-wrap: break-word;'>
                                <span class="flex-wrap">{{store.state.playerOwnerPrivKey}}</span>
                            </p>
                            </div>
                            
                            <p class='pt-1'><button @click="showFullOwner = !showFullOwner">{{showFullOwner ? "hide":"show"}}</button></p>
                            
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
                
                <div class='p-2 m-2'>
                    <label for="pursePK" class="block text-sm font-medium text-gray-700">New Owner PK</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <KeyIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input type="text" name="ownerPK" id="ownerPK" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="cThvb4rx...." v-model="newOwner" />
                    </div>
                </div>
            </div>
        </div>
        <div class='p-5 m-5'>
         <button class="px-8 rounded-lg bg-blue-400  text-white font-bold p-4 uppercase border-red-500 border-t border-b border-r" @click="saveNewInfo"> Save </button>
        </div>
        <div class='flex row flex-wrap justify-center items-center'>
            <div class="shadow rounded w-3/4"> 
                <div class="flex flex-col shadow-xl">
                    <div class="py-6 px-14 bg-gradient-to-tr from-blue-500 to-blue-300 rounded-tl-2xl rounded-tr-2xl text-center space-y-8">
                    <h4 class="text-white text-center font-bold text-xl">
                        Want to start with new random keys
                        
                    </h4>
                    <span class='text-md text-white'> We do NOT store your keys. </span>
                        <span class='text-md text-white'> They are saved in your browser. It is your responsiblity to keep them safe. </span>
                    </div>
                    <div class="flex flex-col py-6 px-8 space-y-5 bg-white">
                    <!-- <input v-model="newMnemonic" type="text" placeholder="small fun stupid wallet lock..." class="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-pink-300 focus:border-transparent" /> -->
                    <!-- <button class="w-full py-3 bg-blue-400 text-white rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent shadow-lg" @click="saveNewMnemonic">Save</button> -->
                    <span class="text-center text-gray-400 text-xl">Generate Random Keys</span>
                    <div class="flex justify-between">
                        <div class="w-16 h-16 p-3 flex items-center justify-center border-2 border-transparent hover:border-gray-200 fill-current text-blue-300">
                        <!-- <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <title>Twitter icon</title>
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg> -->
                        </div>
                        <div class="w-32 h-32 p-3 flex items-center justify-center border-2 border-transparent hover:border-gray-200 fill-current text-red-600">
                        <button @click="randomKeys"
                                class="p-0 w-16 h-16 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
                            <i class="text-2xl text-white fas fa-sync" ></i>
                        </button>
                        </div>
                        <div class="w-16 h-16 p-4 flex items-center justify-center border-2 border-transparent hover:border-gray-200 fill-current text-blue-800">
                        <!-- <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <title>Facebook icon</title>
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg> -->
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import Run from "run-sdk";
import { mapState, useStore } from 'vuex'
//import { mapState } from 'vuex'
// import Mnemonic from 'bsv/mnemonic'
import {KeyIcon} from "@heroicons/vue/outline"
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
            newPurse:"",
            newMnemonic: store.state.playerSeed.toString(),
            showFullPurse: false,
            showFullOwner: false
        })
    
        return {
            ...toRefs(state),
            store
        }
    },
    components:{
        KeyIcon
    },
    methods:{
        saveNewInfo(){
            if(confirm("Are you sure? ")){
                if(this.newOwner !== ""){
                this.store.commit("setPlayerOwnerPrivKey", this.newOwner);
                }
                if(this.newPurse !== ""){
                    this.store.commit("setPlayerPursePrivKey", this.newPurse);
                }
            } else {
                //
            }
            
        }, 
        randomKeys(){
            const run = new Run({network: "test"})
            this.newOwner = run.owner.privkey;
            this.newPurse = run.purse.privkey;

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