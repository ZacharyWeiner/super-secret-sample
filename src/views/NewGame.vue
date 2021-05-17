<template>
<!-- <NewQuestion title="this is awesome" :questionText="question_1_text" :q1AnswerText="q1AnswerText" :addQ1Answer="addQ1Answer" :question_1_answers="question_1_answers" /> -->
    <div class="p-6  outline shadow-xl flex flex-col bg-gray-100 ">
        <div class="title bg-white w-full rounded shadow p-2">
            <label for="gameTitle" class="text-3xl text-indigo-600 font-extrabold"> Give the Game a Creative Title</label>
            
            <div class="">
                  <label for="first_name" class="block text-sm font-medium text-indigo-700">Title</label>
                  <input v-model="title" type="text" name="first_name" id="first_name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>
        </div>
        <div class=" bg-white rounded shadow m-2">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span class="block text-indigo-600 p-4 m-4 ">Question 1 <span class="block text-gray-800 text-sm ">Add a question, image and answers </span></span>
            </h2>
            
            <div class='flex'>
                <div class="question1 w-full p-2 ">
                    <span class="font-extrabold text-indigo-800 text-sm">Question Text </span>
                    <textarea v-model="question_1_text" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                    <div class="question1 w-full p-2 text-sm pt-2 mt-2">
                        <label class="font-extrabold text-indigo-800">Image Url </label>
                        <input v-model="q1ImageUrl" type="text" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                    </div>
                    <div class="font-extrabold text-sm text-indigo-800 pt-2 mt-2">
                        <label >New Answer</label>
                    </div>
                    <div class="flex">
                        <input v-model="q1AnswerText" type="text" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        <button @click="addQ1Answer" class='rounded bg-green-500 px-2 mx-2 text-white'> + </button>
                    </div>
                </div>
            
                <div class="question1 w-full p-2">
                    <div class='flex-grow items-center pb-4'>
                        <img class="h-32 w-32 mx-auto " :src="q1ImageUrl" />
                    </div>
                    <div class="relative ">
                        <div class="absolute inset-0 flex items-center" aria-hidden="true">
                        <div class="w-full border-t border-gray-300" />
                        </div>
                        <div class="relative flex justify-center">
                        <span class="px-2 bg-indigo-500 text-sm text-gray-100 rounded">
                            Answers
                        </span>
                        </div>
                    </div>
                    <div class='p-1 m-1'></div>
                    <div v-for="a in question_1_answers" :key="a">
                        <span class="font-normal text-indigo-600">{{a}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class=" bg-white rounded shadow m-2">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span class="block text-indigo-600 p-4 m-4 ">Question 2 <span class="block text-gray-800 text-sm ">Add a question, image and answers </span></span>
            </h2>
            
            <div class='flex'>
                <div class="question1 w-full p-2 ">
                    <span class="font-extrabold text-indigo-800 text-sm">Question Text </span>
                    <textarea v-model="question_2_text" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                    <div class="question1 w-full p-2 text-sm pt-2 mt-2">
                        <label class="font-extrabold text-indigo-800">Image Url </label>
                        <input v-model="q2ImageUrl" type="text" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                    </div>
                    <div class="font-extrabold text-sm text-indigo-800 pt-2 mt-2">
                        <label >New Answer</label>
                    </div>
                    <div class="flex">
                        <input v-model="q2AnswerText" type="text" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        <button @click="addQ2Answer" class='rounded bg-green-500 px-2 mx-2 text-white'> + </button>
                    </div>
                </div>
            
                <div class="question1 w-full p-2">
                    <div class='flex-grow items-center pb-4'>
                        <img class="h-32 w-32 mx-auto " :src="q2ImageUrl" />
                    </div>
                    <div class="relative ">
                        <div class="absolute inset-0 flex items-center" aria-hidden="true">
                        <div class="w-full border-t border-gray-300" />
                        </div>
                        <div class="relative flex justify-center">
                        <span class="px-2 bg-indigo-500 text-sm text-gray-100 rounded">
                            Answers
                        </span>
                        </div>
                    </div>
                    <div class='p-1 m-1'></div>
                    <div v-for="a in question_2_answers" :key="a">
                        <span class="font-normal text-indigo-600">{{a}}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class=" bg-white rounded shadow m-2">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span class="block text-indigo-600 p-4 m-4 ">Question 3 <span class="block text-gray-800 text-sm ">Add a question, image and answers </span></span>
            </h2>
            
            <div class='flex'>
                <div class="question1 w-full p-2 ">
                    <span class="font-extrabold text-indigo-800 text-sm">Question Text </span>
                    <textarea v-model="question_3_text" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                    <div class="question1 w-full p-2 text-sm pt-2 mt-2">
                        <label class="font-extrabold text-indigo-800">Image Url </label>
                        <input v-model="q3ImageUrl" type="text" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                    </div>
                    <div class="font-extrabold text-sm text-indigo-800 pt-2 mt-2">
                        <label >New Answer</label>
                    </div>
                    <div class="flex">
                        <input v-model="q3AnswerText" type="text" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        <button @click="addQ3Answer" class='rounded bg-green-500 px-2 mx-2 text-white'> + </button>
                    </div>
                </div>
            
                <div class="question1 w-full p-2">
                    <div class='flex-grow items-center pb-4'>
                        <img class="h-32 w-32 mx-auto " :src="q3ImageUrl" />
                    </div>
                    <div class="relative ">
                        <div class="absolute inset-0 flex items-center" aria-hidden="true">
                        <div class="w-full border-t border-gray-300" />
                        </div>
                        <div class="relative flex justify-center">
                        <span class="px-2 bg-indigo-500 text-sm text-gray-100 rounded">
                            Answers
                        </span>
                        </div>
                    </div>
                    <div class='p-1 m-1'></div>
                    <div v-for="a in question_3_answers" :key="a">
                        <span class="font-normal text-indigo-600">{{a}}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class=" bg-white rounded shadow m-2">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span class="block text-indigo-600 p-4 m-4 ">Question 4 <span class="block text-gray-800 text-sm ">Add a question, image and answers </span></span>
            </h2>
            
            <div class='flex'>
                <div class="question1 w-full p-2 ">
                    <span class="font-extrabold text-indigo-800 text-sm">Question Text </span>
                    <textarea v-model="question_4_text" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                    <div class="question1 w-full p-2 text-sm pt-2 mt-2">
                        <label class="font-extrabold text-indigo-800">Image Url </label>
                        <input v-model="q4ImageUrl" type="text" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                    </div>
                    <div class="font-extrabold text-sm text-indigo-800 pt-2 mt-2">
                        <label >New Answer</label>
                    </div>
                    <div class="flex">
                        <input v-model="q4AnswerText" type="text" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        <button @click="addQ4Answer" class='rounded bg-green-500 px-2 mx-2 text-white'> + </button>
                    </div>
                </div>
            
                <div class="question1 w-full p-2">
                    <div class='flex-grow items-center pb-4'>
                        <img class="h-32 w-32 mx-auto " :src="q4ImageUrl" />
                    </div>
                    <div class="relative ">
                        <div class="absolute inset-0 flex items-center" aria-hidden="true">
                        <div class="w-full border-t border-gray-300" />
                        </div>
                        <div class="relative flex justify-center">
                        <span class="px-2 bg-indigo-500 text-sm text-gray-100 rounded">
                            Answers
                        </span>
                        </div>
                    </div>
                    <div class='p-1 m-1'></div>
                    <div v-for="a in question_4_answers" :key="a">
                        <span class="font-normal text-indigo-600">{{a}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class=" bg-white rounded shadow m-2">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span class="block text-indigo-600 p-4 m-4 ">Question 5 <span class="block text-gray-800 text-sm ">Add a question, image and answers </span></span>
            </h2>
            
            <div class='flex'>
                <div class="question1 w-full p-2 ">
                    <span class="font-extrabold text-indigo-800 text-sm">Question Text </span>
                    <textarea v-model="question_5_text" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                    <div class="question1 w-full p-2 text-sm pt-2 mt-2">
                        <label class="font-extrabold text-indigo-800">Image Url </label>
                        <input v-model="q5ImageUrl" type="text" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                    </div>
                    <div class="font-extrabold text-sm text-indigo-800 pt-2 mt-2">
                        <label >New Answer</label>
                    </div>
                    <div class="flex">
                        <input v-model="q5AnswerText" type="text" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        <button @click="addQ5Answer" class='rounded bg-green-500 px-2 mx-2 text-white'> + </button>
                    </div>
                </div>
            
                <div class="question1 w-full p-2">
                    <div class='flex-grow items-center pb-4'>
                        <img class="h-32 w-32 mx-auto " :src="q5ImageUrl" />
                    </div>
                    <div class="relative ">
                        <div class="absolute inset-0 flex items-center" aria-hidden="true">
                        <div class="w-full border-t border-gray-300" />
                        </div>
                        <div class="relative flex justify-center">
                        <span class="px-2 bg-indigo-500 text-sm text-gray-100 rounded">
                            Answers
                        </span>
                        </div>
                    </div>
                    <div class='p-1 m-1'></div>
                    <div v-for="a in question_5_answers" :key="a">
                        <span class="font-normal text-indigo-600">{{a}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="">
            <button @click="createGame" class="text-gray-100 bg-green-600 rounded px-4 py-2 hover:bg-teal-400 font-semibold w-24 duration-700">
                Save
            </button> 
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import Run from "run-sdk"
import SHA256 from "crypto-js/sha256"
import hmacSHA512 from "crypto-js/hmac-sha512"
import Base64 from "crypto-js/enc-base64"
// import NewQuestion from './../components/games/form/NewQuestion.vue'
// Game Owner Details 
// Private Key: cTQPGSZiCXQD3UmrF4rKE6Gub3tmjYYvrjspU7BhXCYbg5f2r7AW GameTest.vue:53
// Public Key: 02c08977652fb7b018598bbdcf7c760390d742befbf6b66f00aaae8dff7f6945ea GameTest.vue:54
// Adddress: n4GJ33kc5QTW6V5fqhgeMHDQsVzjK21ckd
// class ZasteGame extends Run.Jig {
//     init(jsonObject, satoshisForPlay, winningHash){
//         this.satoshisForPlay = satoshisForPlay;
//         this.isWon = false;
//         this.pay_address = "n4GJ33kc5QTW6V5fqhgeMHDQsVzjK21ckd";
//         this.royalty_address = "";
//         this.details = jsonObject;
//         this.satoshis = 1000;
//         this.plays = 0;
//         this.hashtype = 1;
//         this.winningHash = winningHash
//     }
//     incrementPlays(){
//         this.plays = this.plays + 1; 
//     }
//     fund(amount){
//         let newAmount = this.satoshis + amount;
//         this.satoshis = newAmount;
//         this.plays = this.plays + 1; 
//     }
//     send(to){
//         this.owner = to;
//     }
//     win(to) {
//         this.isWon = true;
//         this.owner = to;
//     }
//     setPayAddress(pa){
//         this.pay_address = pa;
//     }
// }

// class Answers extends Run.Jig{
//     init(gameId, answers, sats, winAddress){
//         this.owner = "n4GJ33kc5QTW6V5fqhgeMHDQsVzjK21ckd";
//         this.answers = answers;
//         this.gameId = gameId;
        
//         this.satoshis = sats;
//         this.address_for_winning = winAddress;
//         this.checked = false;
//     }
//     check(){
//         this.checked = true;
//         this.satoshis = 0;
//     }
//     withdraw(){
//         this.satoshis = 0; 
//     }
//     resetOwner(){
//         this.owner = this.address_for_winning;
//     }

// }

export default {
    setup () {
        const run = new Run({network: "test", purse: "cQdpg2oTVvbeb47GzRxqn467RmJNp8rJzfoPMfkSBRyzqEdbJcSz", owner: 'cTQPGSZiCXQD3UmrF4rKE6Gub3tmjYYvrjspU7BhXCYbg5f2r7AW', trust: "*"})
        let game = null;
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
            gameId: "",

            title: "The Coolest Game Ever x25",
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
            run,
            game
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
            
            await this.run.inventory.sync();
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
            let _winningHash = await this.getWinningHash();
            // const emoji = '🏆'
            // //a87f93af5d9721b2871583e3cbab60aea181c5975c35b4a2d5a819d69ade0ce0
            // const image = await Run.extra.B.loadWithMetadata('a87f93af5d9721b2871583e3cbab60aea181c5975c35b4a2d5a819d69ade0ce0', {
            //     title: 'Gold Trophy icon',
            // })
            let ZasteGame = await this.run.load(this.$store.state.gameCodeLocation);
            //ZasteGame.metadata = { emoji, image }
            const g = new ZasteGame(gameDetails, 12500, _winningHash.hash);
            await g.sync();
            console.log("New Game Location:", g.location);
            this.gameId = g.location;
            alert(g.location);
            this.game = g;
            const gameListClassOrigin = '3abf31ab5fe29789ea0c14737065787760f31779561ec7edd0b3d018a15fc73d_o1'
            const gameList = this.run.inventory.jigs.find((jig)=> jig.constructor.origin === gameListClassOrigin)
            gameList.addGame(g.location);
            await gameList.sync();
            console.log({gameList})
            await this.createAnswers();
            
        },
        async createAnswers(){
            let AnswersTemplate = await this.run.load(this.$store.state.answerCodeLocation);
            let answers = new AnswersTemplate(this.gameId, ["","","","",""], this.game.satoshisForPlay, this.run.owner.address);
            await answers.sync()
            console.log("Answer Location: ", answers.location)
            
        },
        async getWinningHash(){
            let winningAnswers = [];
            winningAnswers.push(this.getRandomAnswer(this.question_1_answers));
            winningAnswers.push(this.getRandomAnswer(this.question_2_answers));
            winningAnswers.push(this.getRandomAnswer(this.question_3_answers));
            winningAnswers.push(this.getRandomAnswer(this.question_4_answers));
            winningAnswers.push(this.getRandomAnswer(this.question_5_answers));
            let ht = this.getRandomInt(2);
            console.log({ht})
            let toHash = winningAnswers[0] + winningAnswers[1] + winningAnswers[2]  + winningAnswers[3] + winningAnswers[4];
            console.log({winningAnswers});
            console.log({toHash})
            const winHashDigest = SHA256(toHash);
            const winHmacDigest = Base64.stringify(hmacSHA512(1 + winHashDigest, this.run.purse.privkey));
            console.log({ht: ht, hash: winHmacDigest});
            return {ht: ht, hash: winHmacDigest}

        },
        getRandomAnswer(answers){
            let rnd = this.getRandomInt(5);
            console.log(rnd)
            return answers[rnd];
        },
        getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
    },
    components:{
        //NewQuestion
    }
}
</script>

<style  scoped>
.question-text{background:lightgray}
.answer-text{background:lightgray}
</style>