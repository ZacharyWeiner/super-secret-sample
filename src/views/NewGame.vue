<template>
    <div class="p-6  outline shadow-xl flex flex-col bg-gray-400 ">
        <div class="title bg-blue-500 w-full rounded shadow p-2">
            <label for="gameTitle" class="text-3xl text-gray-100"> Give the Game a Creative Title</label>
            <input id="gameTitle" class="title rounded focus:b-blue-500 w-full bg-gray-200" v-model="title" />
        </div>
        <div class="flex bg-blue-500 rounded shadow m-2">
            <div class="question1 w-full p-2 ">
                <span class="font-extrabold text-gray-100 text-xl">Question 1 </span>
                <textarea v-model="question_1_text" class="question-text w-full h-24 rounded border bg-gray-200"></textarea>
                 <div class="question1 w-full p-2 text-md">
                     <label class="font-extrabold text-gray-100">Image Url </label>
                    <input v-model="q1ImageUrl" class="question-text w-full h-rounded border bg-gray-200"/>
                </div>
            </div>
           
            <div class="question1 w-full p-2">
                <span class="font-extrabold text-gray-100 text-xl">Answers</span>
                <div class="flex">
                    <input id="newAnswer" class="answer-text rounded focus:b-blue-500 w-full bg-gray-200" v-model="q1AnswerText" />
                    <button @click="addQ1Answer"> + answer </button>
                </div>
                <div v-for="a in question_1_answers" :key="a">
                    <span class="font-normal text-gray-100">{{a}}</span>
                </div>
            </div>
        </div>
        <div class="flex bg-blue-500 rounded shadow m-2">
            <div class="question1 w-full p-2 ">
                  <span class="font-extrabold text-gray-100 text-xl">Question 2 </span>
                <textarea v-model="question_2_text" class="question-text w-full h-24 rounded border bg-gray-200"></textarea>
                 <div class="question2 w-full p-2">
                  <span class="font-extrabold text-gray-100">Image Url </span>
                <input v-model="q2ImageUrl" class="question-text w-full h-rounded border bg-gray-200"/>
            </div>
            </div>
           
            <div class="question1 w-full p-2">
                <span class="font-extrabold text-gray-100 text-xl">Answers</span>
                <div class="flex">
                <input id="newAnswer" class="answer-text rounded focus:b-blue-500 w-full bg-gray-200" v-model="q2AnswerText" />
                <button @click="addQ2Answer"> + answer </button>
                </div>
                <div v-for="a in question_2_answers" :key="a">
                    <span class="font-normal text-gray-100">{{a}}</span>
                </div>
            </div>
        </div>
        <div class="flex bg-blue-500 rounded shadow m-2">
            <div class="question1 w-full p-2">
                <span class="font-extrabold text-gray-100 text-xl">Question 3 </span>
                <textarea v-model="question_3_text" class="question-text w-full h-24 rounded border bg-gray-200"></textarea>
                 <div class="question3 w-full p-2">
                <span class="font-extrabold text-gray-100">Image Url </span>
                <input v-model="q3ImageUrl" class="question-text w-full h-rounded border bg-gray-200"/>
            </div>
            </div>
           
            <div class="question1 w-full p-2">
                <span class="font-extrabold text-gray-100 text-xl">Answers</span>
                <div class="flex">
                <input id="newAnswer" class="answer-text rounded focus:b-blue-500 w-full bg-gray-200" v-model="q3AnswerText" />
                <button @click="addQ3Answer"> + answer </button>
                </div>
                <div v-for="a in question_3_answers" :key="a">
                    <span class="font-normal text-gray-100">{{a}}</span>
                </div>
            </div>
        </div>
        <div class="flex bg-blue-500 rounded shadow m-2">
            <div class="question1 w-full p-2">
                <span class="font-extrabold text-gray-100 text-xl">Question 4 </span>
                <textarea v-model="question_4_text" class="question-text w-full h-24 rounded border bg-gray-200"></textarea>
                 <div class="question4 w-full p-2">
                <span class="font-extrabold text-gray-100">Image Url </span>
                <input v-model="q4ImageUrl" class="question-text w-full h-rounded border bg-gray-200"/>
            </div>
            </div>
           
            <div class="question1 w-full p-2">
                <span class="font-extrabold text-gray-100 text-xl">Answers</span>
                <div class="flex">
                <input id="newAnswer4" class="answer-text rounded focus:b-blue-500 w-full bg-gray-200" v-model="q4AnswerText" />
                <button @click="addQ4Answer"> + answer </button>
                </div>
                <div v-for="a in question_4_answers" :key="a">
                    <span class="font-normal text-gray-100">{{a}}</span>
                </div>
            </div>
        </div>
        <div class="flex bg-blue-500 rounded shadow m-2">
            <div class="question1 w-full p-2">
                <span class="font-extrabold text-gray-100 text-xl">Question 4 </span>
                <textarea v-model="question_5_text" class="question-text w-full h-24 rounded border bg-gray-200"></textarea>
                 <div class="question1 w-full p-2">
                <span class="font-extrabold text-gray-100">Image Url </span>
                <input v-model="q5ImageUrl" class="question-text w-full h-rounded border bg-gray-200"/>
            </div>
            </div>
           
            <div class="question1 w-full p-2">
                <span class="font-extrabold text-gray-100 text-xl">Answers</span>
                <div class="flex">
                <input id="newAnswer" class="answer-text rounded focus:b-blue-500 w-full bg-gray-200" v-model="q5AnswerText" />
                <button @click="addQ5Answer"> add answer </button>
                </div>
                <div v-for="a in question_5_answers" :key="a">
                    <span class="font-normal text-gray-100">{{a}}</span>
                </div>
            </div>
        </div>
        <div class="">
            <button @click="createGame" class="text-gray-100 bg-green-600 rounded-full px-4 py-2 hover:bg-teal-400 font-semibold w-24 duration-700">
                Save
            </button> 
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import Run from "run-sdk"

// Game Owner Details 
// Private Key: cTQPGSZiCXQD3UmrF4rKE6Gub3tmjYYvrjspU7BhXCYbg5f2r7AW GameTest.vue:53
// Public Key: 02c08977652fb7b018598bbdcf7c760390d742befbf6b66f00aaae8dff7f6945ea GameTest.vue:54
// Adddress: n4GJ33kc5QTW6V5fqhgeMHDQsVzjK21ckd
class ZasteGame extends Run.Jig{
    init(jsonObject, satoshisForPlay){
        this.satoshisForPlay = satoshisForPlay;
        this.isWon = false;
        this.pay_address = "n4GJ33kc5QTW6V5fqhgeMHDQsVzjK21ckd";
        this.royalty_address = "";
        this.details = jsonObject;
        this.satoshis = 1000;
        this.plays = 0;
    }
    incrementPlays(){
        this.plays = this.plays + 1; 
    }
    fund(amount){
        let newAmount = this.satoshis + amount;
        this.satoshis = newAmount;
        this.plays = this.plays + 1; 
    }
    send(to){
        this.owner = to;
    }
    win(to) {
        this.isWon = true;
        this.owner = to;
    }
    setPayAddress(pa){
        this.pay_address = pa;
    }
}


export default {
    setup () {
        
        const state = reactive({
            // base_name: "b",
            // title: "",
            // question_1_text: "",
            // question_1_answers:[],
            // q1AnswerText: "",
            // q1ImageUrl: "",

            // question_2_text: "",
            // question_2_answers:[],
            // q2AnswerText: "",
            // q2ImageUrl: "",

            // question_3_text: "",
            // question_3_answers:[],
            // q3AnswerText: "",
            // q3ImageUrl: "",

            // question_4_text: "",
            // question_4_answers:[],
            // q4AnswerText: "",
            // q4ImageUrl: "",

            // question_5_text: "",
            // question_5_answers:[],
            // q5AnswerText: "",
            // q5ImageUrl: "",

            title: "The Coolest Game Ever",
            question_1_text: "What do you want to do?",
            question_1_answers:["eat","pray","love","sing","dance"],
            q1AnswerText: "",
            q1ImageUrl: "https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg",

            question_2_text: "When do you want to play?",
            question_2_answers:["morning","noon","night","tomorrow","next week"],
            q2AnswerText: "",
            q2ImageUrl: "https://images.pexels.com/photos/333850/pexels-photo-333850.jpeg",

            question_3_text: "How do you want to see the show?",
            question_3_answers:["TV","mobile","VR","AR","I dont want to see it"],
            q3AnswerText: "",
            q3ImageUrl: "https://images.pexels.com/photos/1473215/pexels-photo-1473215.jpeg",

            question_4_text: "We are heading to an after party, which one do you want to hit?",
            question_4_answers:["warehouse","rooftop","underground","penthouse","road trip to the desert"],
            q4AnswerText: "",
            q4ImageUrl: "https://images.pexels.com/photos/130621/pexels-photo-130621.jpeg",

            question_5_text: "Damn that was fun. Lets hang out again....",
            question_5_answers:["after breakfast","tonight","this week","next weekend","sometime soon"],
            q5AnswerText: "",
            q5ImageUrl: "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg",

        })
    
        return {
            ...toRefs(state),
        }
    },
    methods:{
        addQ1Answer(){
            this.question_1_answers.push(this.q1AnswerText);
            this.q1AnswerText = ""
        },
        addQ2Answer(){
            this.question_2_answers.push(this.q2AnswerText);
            this.q2AnswerText = ""
        },
        addQ3Answer(){
            this.question_3_answers.push(this.q3AnswerText);
            this.q3AnswerText = ""
        },
        addQ4Answer(){
            this.question_4_answers.push(this.q4AnswerText);
            this.q4AnswerText = ""
        },
        addQ5Answer(){
            this.question_5_answers.push(this.q5AnswerText);
            this.q5AnswerText = ""
        },
         async createGame(){
            const run = new Run({network: "test", purse: "cQdpg2oTVvbeb47GzRxqn467RmJNp8rJzfoPMfkSBRyzqEdbJcSz", owner: 'cTQPGSZiCXQD3UmrF4rKE6Gub3tmjYYvrjspU7BhXCYbg5f2r7AW', trust: "*"})
            await run.inventory.sync();
            let gameDetails = {title: this.title}; 
            let question = {questionText: this.question_1_text, answers: this.question_1_answers, imgUrl: this.q1ImageUrl}
            gameDetails["question_1"] = question;
            let question2 = {questionText: this.question_2_text, answers: this.question_2_answers, imgUrl: this.q2ImageUrl}
            gameDetails["question_2"] = question2;
            let question3 = {questionText: this.question_3_text, answers: this.question_3_answers, imgUrl: this.q3ImageUrl}
            gameDetails["question_3"] = question3;
            let question4 = {questionText: this.question_4_text, answers: this.question_4_answers, imgUrl: this.q4ImageUrl}
            gameDetails["question_4"] = question4;
            let question5 = {questionText: this.question_5_text, answers: this.question_5_answers, imgUrl: this.q5ImageUrl}
            gameDetails["question_5"] = question5;
            
            console.log(gameDetails);
            this.gameDetails = gameDetails;
            const g = new ZasteGame(gameDetails, 2500);
            await g.sync();
            console.log("New Game Location:", g.location);
            alert(g.location);
            
        }
    }
}
</script>

<style  scoped>
.question-text{background:lightgray}
.answer-text{background:lightgray}
</style>