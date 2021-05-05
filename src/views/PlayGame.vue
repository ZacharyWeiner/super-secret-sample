<template>
    <div>
        <div v-if="displayIndex === 0">
            {{gameObject.details.question_1.questionText ? gameObject.details.question_1.questionText : "Fuck off" }}
            <div v-for="answer in gameObject.details.question_1.answers" :key="answer.toString()">
                <input type="radio" :id="answer" :value="answer" v-model="picked">
                <label :for="answer">{{answer}}</label>
            </div>
            {{picked}}
        </div>

        <div v-if="displayIndex === 1">
            {{gameObject.details.question_2.questionText ? gameObject.details.question_2.questionText : "Fuck off" }}
            <div v-for="answer in gameObject.details.question_2.answers" :key="answer.toString()">
                <input type="radio" :id="answer" :value="answer" v-model="picked">
                <label :for="answer">{{answer}}</label>
            </div>
            {{picked}}
        </div>

        <div v-if="displayIndex === 2">
            {{gameObject.details.question_3.questionText ? gameObject.details.question_3.questionText : "Fuck off" }}
            <div v-for="answer in gameObject.details.question_3.answers" :key="answer.toString()">
                <input type="radio" :id="answer" :value="answer" v-model="picked">
                <label :for="answer">{{answer}}</label>
            </div>
            {{answerAtIndex}}
        </div>
        <div class="flex justify-center">
            <div class='flex '>
                    <div v-if="displayIndex > 0 && displayIndex < 3">
                    <button class="bg-red-500 px-5 py-2 text-lg font-semibold tracking-wider text-white rounded-full hover:bg-blue-600" @click="back"> &lt;= Back  </button>
                </div>
            </div>
            <div class='flex'>
                    <div v-if="displayIndex < 3">
                    <button class="bg-blue-500 px-5 py-2 text-lg font-semibold tracking-wider text-white rounded-full hover:bg-blue-600" @click="setAnswer"> Next => </button>
                </div>
            </div>
            <div class='flex '>
                <div v-if="displayIndex === 3">
                    <h4> My Answers: </h4>
                    <div v-for="answer in userAnswers" :key="answer.toString()">  
                        {{answer}}
                    </div>
                    <button class="bg-green-500 px-5 py-2 text-lg font-semibold tracking-wider text-white rounded-full hover:bg-blue-600" @click="checkWin"> Did I Win </button>
                    <div> {{is_winner}} </div>
                </div>
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
        this.owner = "027ccec5c680b4de1b409a310a86bc41b0758d88bf34efa2636d3583b7248d0d4d";
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
        const run = new Run({network: "test", purse: "cQdpg2oTVvbeb47GzRxqn467RmJNp8rJzfoPMfkSBRyzqEdbJcSz", owner: "cQ6T6gHBeRfYXNQmqQW81UgvK1umM6zoRkgZGCpGqtzceyTpVMr8", trust: "*"})
        const store = useStore();
        console.log(store.state.gameLocation);
        let game = await run.load(store.state.gameLocation);
        store.commit('setGameObject', game) 
        console.log("Hydrated Game from run in state:", store.state.gameObject);
        await run.inventory.sync();
        console.log(run.inventory.jigs)
        const state = reactive({
            count: 0,   
            picked: null,
            is_winner: ""
        })
    
        return {
            ...toRefs(state),
            run
        }
    },
    methods:{
        setAnswer(){
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
            this.$store.state.questionIndex = this.$store.state.questionIndex -1;
            this.$store.commit("setQuestionIndex", );
        },
        async checkWin(){
            await this.createAnswerObject();
            
        },
        async createAnswerObject(){
            console.log('setting user answers with send(to) set as', this.run.owner.address)
            const userAnswers = new Answers(this.$store.state.userAnswers, 10000, this.run.owner.address);
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
            .then(function (response) {
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
  background-color: #3490DC; 
  box-shadow: 0px 0px 0px 2px white inset;
  
}

input[type="radio"]:checked + label{
   color: white;
   border-radius: 4px;
   background-color: #3490DC; 
   padding: 4px;
}

</style>