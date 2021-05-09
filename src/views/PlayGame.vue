<template>
    <div>
        <div class="">
            <div v-if="displayIndex < 3" class=' flex-row m-4 p-4'>
                        <div>Winners Pot: </div>
                        <div class='text-green-400 text-3xl'>{{gameBalance}} </div>
                        
                    </div>
        </div>
        <div v-if="displayIndex === 0">
            <div class="p-20">
                <div class="rounded-lg shadow-lg flex h-auto">
                    <!-- image -->
                    <div class="h-50 bg-cover bg-center rounded-tl-lg rounded-bl-lg overflow-hidden w-1/2 bg-blue-400 text-center">
                        <img :src="gameObject.details.question_1.imgUrl" alt="">
                    </div>
                    <!-- content -->
                    <div class="flex-grow shadow rounded">
                        <div class="p-4 text-gray-600">
                            <h2 class="text-3xl text-gray-800 mb-4">
                                {{gameObject.details.question_1.questionText ? gameObject.details.question_1.questionText : "Fuck off" }}
                            </h2>
                        <div v-for="answer in gameObject.details.question_1.answers" :key="answer.toString()">
                                <input type="radio" :id="answer" :value="answer" v-model="picked">
                                <label :for="answer">{{answer}}</label>
                            </div>
                        </div>
                        <div v-if="picked !== '' && picked !== null" class="shadow-xl rounded m-4 p-4 bg-gray-200">
                            {{picked}}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="displayIndex === 1">
            <div class="p-20">
                <div class="rounded-lg shadow-lg flex h-auto">
                    <!-- image -->
                    <div class="h-50 bg-cover bg-center rounded-tl-lg rounded-bl-lg overflow-hidden w-1/2 bg-blue-400 text-center">
                        <img :src="gameObject.details.question_2.imgUrl" alt="">
                    </div>
                    <!-- content -->
                    <div class="flex-grow">
                        <div class="p-4 text-gray-600">
                            <h2 class="text-3xl text-gray-800 mb-4">
                                {{gameObject.details.question_2.questionText ? gameObject.details.question_2.questionText : "Fuck off" }}
                            </h2>
                        <div v-for="answer in gameObject.details.question_2.answers" :key="answer.toString()">
                                <input type="radio" :id="answer" :value="answer" v-model="picked">
                                <label :for="answer">{{answer}}</label>
                            </div>
                        </div>
                         <div v-if="picked !== '' && picked !== null" class="shadow-xl rounded m-4 p-4 bg-gray-200">
                            {{picked}}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="displayIndex === 2">
            <div class="p-20">
                <div class="rounded-lg shadow-lg flex h-auto">
                    <!-- image -->
                    <div class="h-50 bg-cover bg-center rounded-tl-lg rounded-bl-lg overflow-hidden w-1/2 bg-blue-400 text-center">
                        <img :src="gameObject.details.question_3.imgUrl" alt="">
                    </div>
                    <!-- content -->
                    <div class="flex-grow">
                        <div class="p-4 text-gray-600">
                            <h2 class="text-3xl text-gray-800 mb-4">
                                {{gameObject.details.question_3.questionText ? gameObject.details.question_3.questionText : "Fuck off" }}
                            </h2>
                            <div v-for="answer in gameObject.details.question_3.answers" :key="answer.toString()">
                                <input type="radio" :id="answer" :value="answer" v-model="picked">
                                <label :for="answer">{{answer}}</label>
                            </div>
                             <div v-if="picked !== '' && picked !== null" class="shadow-xl rounded m-4 p-4 bg-gray-200">
                                {{picked}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div v-if="displayIndex < 3" class="py-4 px-4 text-blue-500 bg-gray-200 w-full rounded-br-lg">
            
            <div class="flex justify-center">
                <div class='flex '>
                        <div v-if="displayIndex > 0 && displayIndex < 3">
                        <button class="bg-red-500 px-5 py-2 text-lg font-semibold tracking-wider text-white rounded-full hover:bg-blue-600" @click="goBack"> <i class='fa fa-arrow-left'></i> Back  </button>
                    </div>
                </div>
                <div class='flex p-2 m-2'></div>
                <div class='flex'>
                        <div v-if="displayIndex < 3">
                        <button class="bg-blue-500 px-5 py-2 text-lg font-semibold tracking-wider text-white rounded-full hover:bg-blue-600" @click="setAnswer"> Next <i class='fa fa-arrow-right'></i> </button>
                    </div>
                </div>
           
            </div>
        </div>
         <div class='flex '>
                <div v-if="displayIndex === 3" class='w-full'>
                    <div class='flex flex-row pt-3'>
                        <div class="w-1/3"><h2 class='text-3xl'> Your Journey: </h2></div>
                        <div class="w-2/3 text-right pr-4">
                            {{}}
                            
                        </div>
                    </div>
                    <div class='flex flex-row p-4'>
                    <div class='flex  w-3/5'>
                        <div class='flex flex-col justify-center '>
                            <div class=' p-2 m-2 text-left bg-blue-200 rounded shadow-xl'>
                                <div class='flex flex-row '>
                                    <div class="w-1/4 rouded"> <img class="rounded" :src="gameObject.details.question_1.imgUrl" /> </div>
                                    <div class="p-2 m-2">
                                        <div class="text-xl">{{gameObject.details.question_1.questionText}}</div>
                                        <div class="italic bold text-2xl pl-4">{{userAnswers[0]}}</div> 
                                    </div>
                                </div>
                            </div>
                            <div class=' p-2 m-2 text-left bg-blue-200 rounded  shadow-xl'>
                                <div class='flex '>
                                    <div class="w-1/4 rouded"> <img class="rounded" :src="gameObject.details.question_2.imgUrl" /> </div>
                                    <div class="p-2 m-2">
                                        <div class="text-xl">{{gameObject.details.question_2.questionText}}</div>
                                        <div class="italic bold text-2xl pl-4">{{userAnswers[1]}}</div> 
                                    </div>
                                </div>
                            </div>
                            <div class=' p-2 m-2 text-left bg-blue-200 rounded shadow-xl'>
                                <div class='flex '>
                                    <div class="w-1/4 rouded"> <img class="rounded" :src="gameObject.details.question_3.imgUrl" /> </div>
                                    <div class="p-2 m-2">
                                        <div class="text-xl">{{gameObject.details.question_3.questionText}}</div>
                                        <div class="italic bold text-2xl pl-4">{{userAnswers[2]}}</div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=' flex-row w-2/5 '>
                        <div>Winners Pot: </div>
                        <div class='text-green-400 text-3xl'>{{gameBalance}} </div>
                        <div v-if="!showConfirm">
                            <button class="bg-green-500 px-5 py-2 text-lg font-semibold tracking-wider text-white rounded-full hover:bg-blue-600 shadow-xl" @click="confirmSpend"> Did My Journey Win? </button>
                                                    </div>
                        <div v-else>
                            <button class="bg-green-500 px-5 py-2 text-lg font-semibold tracking-wider text-white rounded-full hover:bg-blue-600 shadow-xl" @click="checkWin"> <i :class="showSpin"></i> 5 Ðuros to Play </button>
                            
                        </div>
                        
                            <button class="bg-red-500 p-2 m-2 mt-4 text-lg font-semibold tracking-wider text-white rounded-full hover:bg-red-900 shadow-xl" @click="resetGame"> <i class="fas fa-sync"></i> Restart Game </button>
                    </div>
                </div>
                <div> {{is_winner}} </div>
            </div>                
        </div>     
    </div>
</template>

<script>



import { reactive, toRefs } from 'vue'
import { mapState, useStore } from 'vuex'
import Run from "run-sdk"
import axios from "axios"
//import bsv, {Script} from "bsv"
class Answers extends Run.Jig{
    init(answers, sats, pk4w){
        this.owner = "n4GJ33kc5QTW6V5fqhgeMHDQsVzjK21ckd";
        this.answers = answers;
        
        this.satoshis = sats;
        this.pubKey_for_winning = pk4w;
    }
    withdraw(){
        this.satoshis = 0; 
    }

}
export default {
    async setup () {
        const store = useStore();
        //= new Run({network: "test", purse: "cQdpg2oTVvbeb47GzRxqn467RmJNp8rJzfoPMfkSBRyzqEdbJcSz", owner: "cQ6T6gHBeRfYXNQmqQW81UgvK1umM6zoRkgZGCpGqtzceyTpVMr8", trust: "*"})
        let run; 
        if(store.state.playerOwnerPrivKey !== "" && store.state.playerPursePrivKey !== ""){
            run = new Run({network: "test", purse: store.state.playerPursePrivKey, owner: store.state.playerOwnerPrivKey, trust: "*"})
        } else {
            run =  new Run({network: "test", purse: "cQdpg2oTVvbeb47GzRxqn467RmJNp8rJzfoPMfkSBRyzqEdbJcSz", owner: "cQ6T6gHBeRfYXNQmqQW81UgvK1umM6zoRkgZGCpGqtzceyTpVMr8", trust: "*"})
            store.commit("setPlayerOwnerPrivKey", run.owner.privkey);
            store.commit("setPlayerPursePrivKey", run.purse.privkey);
        }

        console.log("Owner Private Key:", run.owner.privkey);
        console.log("Owner Public Key:", run.owner.pubkey);
        console.log("Owner Adddress:", run.owner.address);

        console.log("Purse Private Key:", run.purse.privkey);
        console.log("Purse Script:", run.purse.script);
        console.log("Purse Adddress:", run.purse.address);


        console.log(store.state.gameLocation);
        let game = await run.load(store.state.gameLocation);
        await game.sync();
        store.commit('setGameObject', game) 
        console.log("Hydrated Game from run in state:", store.state.gameObject);
        await run.inventory.sync();
        console.log(run.inventory.jigs)
        const state = reactive({
            count: 0,   
            picked: null,
            is_winner: "",
            showConfirm: false,
            spinning: false
        })
    
        return {
            ...toRefs(state),
            run
        }
    },
    methods:{
        setAnswer(){
            if(this.picked === "" || this.picked === null){
                alert("Pick an answer asshole.");
                return;
            }
            const ans = this.picked;
            console.log(this.picked);
            this.$store.commit("setQuestionIndex", this.$store.state.questionIndex);
            this.$store.commit("addUserAnswer", ans);
            console.log(this.$store.state.userAnswers);
            const newIndex = this.$store.state.questionIndex += 1;
            this.$store.commit("setQuestionIndex", newIndex);
            console.log(this.$store.state.questionIndex);
            this.picked = "";
        },
        goBack(){
            let questionIndex = this.$store.state.questionIndex -1;
            this.$store.commit("setQuestionIndex", questionIndex);
            this.picked = this.$store.state.userAnswers[questionIndex];
            
        },
        resetGame(){
            this.$store.dispatch("resetGame");
        },
        confirmSpend(){
            this.showConfirm = true;
        },
        async checkWin(){
            this.spinning = true;
            await this.createAnswerObject();
            this.spinning = false;
            
        },
        async createAnswerObject(){
            console.log('setting user answers with send(to) set as', this.run.owner.address)
            const userAnswers = new Answers(this.$store.state.userAnswers, this.gameObject.satoshisForPlay, this.run.owner.address);
            // const script = Script.fromAddress(this.purse.address).toHex()
            // const utxos = await this.run.blockchain.utxos(script)
            // const tx = new bsv.Transaction()
            // .from(utxos)
            // .change(this.purse.address)
            // .to("n4GJ33kc5QTW6V5fqhgeMHDQsVzjK21ckd", 10000)
            // .sign(this.run.purse.privkey)
            // .toString('hex')
                
            // try{
            // let txid = await this.run.blockchain.broadcast(tx)
            // console.log("Transaction ID:", txid);
            // }catch(err){console.log("Error sending transaction.", err)}

            try{
                await userAnswers.sync()
            }catch(err){console.log("error Syncing asnwers obj:", err)}
            
            console.log(userAnswers);
            
            await this.postLocation(userAnswers.location);
            this.$store.dispatch("updateBalance");
            
            
        },
        async postLocation(location){
            
            axios({
                method: 'POST',
                url: `http://localhost:3000/check-win`,
                params: {
                "location": location,
                },
                headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-type': 'application/json',
                }
            })
            .then(async function (response) {
                console.log(response.data);
                if(response.data.winner === "YES!"){
                    alert("You won the motherfuckin game, bitch!");
                } else {
                    alert('Nah sucker.... the you walked a shitty path');
                }
            })
            .catch(function (error) {
                console.log(error);
            });
            
        }
    },
    computed: {
        displayIndex() {
            console.log("display index being checked", this.$store.state.questionIndex)
            return this.$store.state.questionIndex;
        },
        answerAtIndex(){
            return this.$store.state.userAnswers[this.$store.state.questionIndex] ? this.$store.state.userAnswers[this.$store.state.questionIndex] : this.picked;
        },
        gameBalance(){
            return (this.$store.state.gameObject.satoshis / 500) +  " Ðuros";
        },
        showSpin(){
            let response =  this.spinning === true ? "fas fa-spinner animate-spin" : "";
            return response;
        },
        // mix this into the outer object with the object spread operator
        ...mapState(["gameLocation", "gameTitle", "gameObject", "userAnswers"])
    }
}
</script>

<style scoped>


input[type="radio"] + label span {
    transition: background .2s,
      transform .2s;
}

input[type="radio"] + label span:hover,
input[type="radio"] + label:hover span{
  transform: scale(1.2);
} 

input[type="radio"]:checked + label span {
  /* background-color: #3490DC;  */
  box-shadow: 0px 0px 0px 2px white inset;
  
}

input[type="radio"]:checked + label{
   color: #3490DC;
   border-radius: 4px;
   /* background-color: #3490DC;  */
   padding: 4px;
}

</style>