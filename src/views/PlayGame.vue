<template>
    <div>
        <div v-if="loading"> <i class='fa fa-spinner animate-spin'></i> Loading ...</div>
        <div v-if="game !== null" class="">
            <div v-if="displayIndex < 3" class=' flex-row m-1 p-1'>
                <span class="px-2 bg-white text-sm">
                    <span class='text-red-500 text-lg'>{{game.plays}} </span> failed to unlock the
                </span>
                <!-- <div class='text-green-700'>This Game Now Owns </div> -->
                <div class='text-green-400 text-3xl'>Ð {{gameBalance}} </div>
                <div class="relative">
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                    <div class="w-full border-t border-green-300" />
                    </div>
                    <div class="relative flex justify-center">
                    <span class="px-2 bg-white text-sm text-green-500">
                        Ðuro Prize
                    </span>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="displayIndex < 5">
        <Question />
        </div>
        <div v-if="displayIndex < 5" class="py-4 px-4 text-blue-500 bg-gray-200 w-full rounded-br-lg">
            
            <div class="flex justify-center">
                <div class='flex '>
                    <div v-if="displayIndex > 0 && displayIndex < 5">
                        <button class="bg-red-500 px-5 py-2 text-lg font-semibold tracking-wider text-white rounded-full hover:bg-blue-600" @click="goBack"> <i class='fa fa-arrow-left'></i> Back  </button>
                    </div>
                </div>
                <div class='flex p-2 m-2'></div>
                <div class='flex'>
                    <div v-if="displayIndex < 5">
                        <button class="bg-blue-500 px-5 py-2 text-lg font-semibold tracking-wider text-white rounded-full hover:bg-blue-600" @click="setAnswer"> Next <i class='fa fa-arrow-right'></i> </button>
                    </div>
                </div>

            </div>
        </div>
        <div class='flex '>
            <div v-if="displayIndex === 5" class='w-full'>
                <FinalAnswers :create="confirmSpend"/>
                <div> {{is_winner}} </div>
            </div>                
        </div>
        <Modal v-if="showModal" @close="showModal = false">
            <template v-slot:icon>
               <h3 class='text-green-800 font-extrabold'> Ð25 </h3>
            </template>
            <template v-slot:header>
                {{modalHeaderText}}
            </template>
             <template v-slot:body>
                {{modalBodyText}}
            </template>
            <template v-if="showConfirm || showModal" v-slot:footer>
            <div class="mt-5 sm:mt-6 ">
              
              
              <button v-if="showConfirm" @click="checkWin" type="button" class="pb-2 mb-2 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm">
                <span><i :class="showSpin"></i> 
                Confirm Spend 25 Ðuros</span>
              </button>

              <button type="button" class="pt-3 mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm" @click="showModal = false" ref="cancelButtonRef">
                Cancel
              </button>
            </div>
            </template>
        </Modal>     
    </div>
</template>

<script>



import { ref, reactive, toRefs } from 'vue'
import { mapState, useStore } from 'vuex'
import {useRouter } from "vue-router"
//import Run from "run-sdk"
import axios from "axios"
import Modal from './../components/Modal.vue';
//import AnswerList from './../components/games/AnswerList.vue';
import Question from './../components/games/Question.vue';
import FinalAnswers from './../components/games/FinalAnswers.vue';
//import bsv, {Script} from "bsv"
import RunStore from "./../store/RunStore.js"

export default {
    async setup () {
        const store = useStore();
        let run = RunStore.useRun(store);
        let game = ref(null);
        let router = useRouter();
        console.log("Current Route:", router.currentRoute.value.params.id)
        if(router.currentRoute.value.query.id){
            store.commit("setGameLocation", router.currentRoute.value.query.id);
        }
        

        const state = reactive({
            count: 0,   
            is_winner: "",
            showConfirm: false,
            spinning: false,
            modalHeaderBackground: 'white',
            modalHeaderText: "Are you sure?",
            showModal: false,
            modalBodyText: ""
        })
    
        return {
            ...toRefs(state),
            run,
            game
        }
    },
    async mounted(){
        console.log("In mounted: ", this.$store.state.gameLocation);
        let _game  = await this.run.load(this.$store.state.gameLocation);
        
        await _game.sync();
        console.log("game", _game)
        this.game = _game
        if(this.game.isWon){
            this.router.push(`/game-won/?id=${this.game.location}`)
            return
        }
        this.$store.commit('setGameObject', this.game) 
        console.log("Hydrated Game from run in state:", this.$store.state.gameObject);
        this.$store.commit("setLoading", false);
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
            this.$store.commit("setCurrentUserAnswer", "");
        },
        goBack(){
            let questionIndex = this.$store.state.questionIndex -1;
            this.$store.commit("setQuestionIndex", questionIndex);
            this.$store.commit("setCurrentUserAnswer", this.$store.state.userAnswers[questionIndex]);
            
        },
        resetGame(){
            this.$store.dispatch("resetGame");
        },
        confirmSpend(){
            this.modalHeaderBackground = "bg-green-400";
            this.modalHeaderText = "Confirm Spend";
            this.modalBodyText = "Are you sure you want to spend 25 Ðuros?"
            this.showConfirm = true;
            this.showModal = true;
        },
        async checkWin(){
            this.spinning = true;
            await this.createAnswerObject();
            this.spinning = false;
            
        },
        async createAnswerObject(){
            this.run.activate();
            console.log('setting user answers with send(to) set as', this.run.owner.address)
            let AnswersTemplate = await this.run.load(this.$store.state.answerCodeLocation)
            const userAnswers = new AnswersTemplate(this.$store.state.gameObject.location, this.$store.state.userAnswers, this.game.satoshisForPlay, this.run.owner.address);
            try {
                await userAnswers.sync()
            } catch(err) {
                console.log("error Syncing asnwers obj:", err)
            }
            console.log(userAnswers);
            await this.postLocation(userAnswers.location);
            this.$store.dispatch("updateBalance");
        },
        async postLocation(location){
            
            let response = await axios({
                method: 'POST',
                url: `https://rocky-depths-28908.herokuapp.com/check-win-test`,
                params: {
                "location": location,
                "gameId": this.$store.state.gameObject.location
                },
                headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-type': 'application/json',
                }
            })
            console.log({response});
            if(response.data.winner === "YES!"){
                this.modalHeaderBackground = 'bg-green-400';
                this.modalHeaderText = "You WON!";
                this.modalBodyText = this.$store.state.gameObject.details.winner_text ? this.$store.state.gameObject.details.winner_text : 'You won the game. Now, you own it.';
                this.showConfirm = false;
                this.showModal = true; 
                
            } else {
                
                this.modalHeaderBackground = 'bg-red-400';
                this.modalHeaderText = "You didnt win";
                this.modalBodyText = this.$store.state.gameObject.details.loser_text ? this.$store.state.gameObject.details.loser_text : 'Sorry sukka. \r ¯\\_(ツ)_/¯ \r You didnt take the winning path. Try again.';
                this.showConfirm = false;
                this.showModal = true; 
            }
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
            return (this.$store.state.gameObject.satoshis / 500) +  " ";
        },
        showSpin(){
            let response =  this.spinning === true ? "fas fa-spinner animate-spin" : "";
            return response;
        },
        picked(){
            return this.$store.state.currentUserAnswer;
        },
        questionText(){
            let text = "";
            switch(this.$store.state.questionIndex){
                case 0:
                    text =  this.gameObject.details.question_1.questionText;
                    break;
                case 1:
                    text =  this.gameObject.details.question_2.questionText;
                    break;
                case 2:
                    text =  this.gameObject.details.question_3.questionText;
                    break;
                case 3:
                    text =  this.gameObject.details.question_4.questionText;
                    break;
                case 5:
                    text =  this.gameObject.details.question_5.questionText;
                    break;
                default: 
                    text = ""
                    break;
            }
            return text;
        },
        questionImage(){
            let text = "";
            switch(this.$store.state.questionIndex){
                case 0:
                    text =  this.gameObject.details.question_1.imgUrl;
                    break;
                case 1:
                    text =  this.gameObject.details.question_2.imgUrl;
                    break;
                case 2:
                    text =  this.gameObject.details.question_3.imgUrl;
                    break;
                case 3:
                    text =  this.gameObject.details.question_4.imgUrl;
                    break;
                case 5:
                    text =  this.gameObject.details.question_5.imgUrl;
                    break;
                default: 
                    text = ""
                    break;
            }
            return text;
        },
        // mix this into the outer object with the object spread operator
        ...mapState(["gameLocation", "gameTitle", "gameObject", "userAnswers", "loading"])
    },
    components:{
        Modal,
        //AnswerList,
        Question,
        FinalAnswers
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