<template>
<!-- <NewQuestion title="this is awesome" :questionText="question_1_text" :q1AnswerText="q1AnswerText" :addQ1Answer="addQ1Answer" :question_1_answers="question_1_answers" /> -->
    <div class="p-6  outline shadow-xl flex flex-col bg-gray-100 ">
        <div class="title bg-white w-full rounded shadow p-2 m-2">
            <label for="gameTitle" class="text-3xl text-indigo-600 font-extrabold"> Give the Game a Creative Title</label>
            
            <div class="">
                  <label for="first_name" class="block text-sm font-medium text-indigo-700">Title</label>
                  <input v-model="title" type="text" name="first_name" id="first_name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>
        </div>
        <div class="flex grid grid-cols-2">
        <div class="title bg-white w-full rounded shadow p-2 m-2">
            <!-- <label for="gameTitle" class="text-xl text-gray-800 font-extrabold"> Give the Game a Creative Description</label> -->
            
            <div class="">
                  <label for="first_name" class="block text-sm font-medium text-indigo-700">Description</label>
                  <textarea v-model="description" rows="3" name="first_name" id="first_name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
        </div>
        <div class="title bg-white w-full rounded shadow p-2 m-2">
            <!-- <label for="gameTitle" class="text-xl text-gray-800 font-extrabold"> Give the Game a Creative Backstory</label> -->
            
            <div class="">
                  <label for="first_name" class="block text-sm font-medium text-indigo-700">Backstory</label>
                  <textarea v-model="backstory" rows="3" name="first_name" id="first_name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
        </div>
        </div>
        <div class="title bg-white w-full rounded shadow p-2 m-2">
            <!-- <label for="gameTitle" class="text-xl text-gray-800 font-extrabold"> Give The Game A Cover Photo</label> -->
            
            <div class="flex grid grid-cols-2">
                <div>
                    <img class="rounded-xl" :src="gameImgUrl" /> 
                </div>
                <div>
                    <div class='m-2 p-2'>
                    <label for="first_name" class="block text-sm font-medium text-indigo-700">Cover Photo</label>
                    <input v-model="gameImgUrl" type="text" name="first_name" id="first_name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    </div>    
                </div>
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

            title: "Heavy that Lies the Crown",
            description: "This is a super cool description",
            backstory:"The backstory should set the stage for the questions to come.",
            win_text: " You've defeted this shitfuck Grey Bones (now that youve won hes no longer a lord)",
            loss_text: " You've been defeted in battle",
            gameImgUrl: "https://lh4.googleusercontent.com/W_zCAiQuxAWWZWeNvIi2OJbAaC9hqQlUw3xqRqmU6f0Vvf1pxsyD_RJDweo5_ALNeCcnedyvFLysKfu80p2AzY0eC8wOC6Qjzn224iFh",
            question_1_text: "Word has come that the evil army lead by Lord Grey Bones, approaches your kingdom. As the wise and noble ruler, you decide your first move.. ",
            question_1_answers:["Wake your generals from their slumber","Sound for the naval fleet","Consult the grand oracle for wisdom","Think nothing of it, as your kingdom is well fortified","Prepare your kingdom for a grand feast before the war to come"],
            q1ImageUrl: "https://lh4.googleusercontent.com/7ZiiplJExhdgyokxvznPO5e_uIcKtRmZNSAkZSELWGXCD4UKTYpgBnjnjfKSrWeLhNgR1zM53BNO32GZR6jVGlZAg62xOgAuNjIP17Qq=s1600",

            question_2_text: "As you enter the council chambers, you are welcomed by your loyal commanders.  They wish to know how your excellence would like to handle the winter food supplies.",
            question_2_answers:["Increase food supply for all soldiers","Save more food for the citizens in hiding","Hide half of all food supplies for later battles","Send  troops to hunt for more food","We have plenty of food for the coming winter"],
            q2ImageUrl: "https://lh6.googleusercontent.com/BJqUdpeQuyN4jEYxtU6oHa9J1KSpkDMWOoWa1lcsgWE11qMe1mi4-2AhsS4l69pMqsRs8DcXOjCQBuyp6pw7bCpY8hZDdPTQgjndC5xP=s1600",

            question_3_text: "The next morning your scouts report activity coming in from both land and sea. You look out over your preparing armies and recall your royal oath. ‘Be the Light that shines through the darkness",
            question_3_answers:["Sound the naval fleet to attack, and prepare your armies for defense","Advance ground troops to meet them on the open field and establish a water blockade","Send word to attack on all fronts with full force","Hold your position until the enemy comes into range" , "Prepare a trap for the enemy by hiding your forces to appear defenseless"],
            q3ImageUrl: "https://lh3.googleusercontent.com/V0vOvsjWYtmKjPWiazhf1lZWnIKk1UWd48rbHLDieJB_5LMwH9P3bWkjFHCM1KXLZgRFIj1EwqMdOH-wFuSTB1NyC-4yAG3qUFryZX-QroVmT0TQ2ZAmIRaY_LzcbtcL05jCY-ll=s1600",

            question_4_text: "Despite all your efforts, the enemy continues to attack. You must take action if your forces are to prevail.",
            question_4_answers:["Sound retreat and regroup remaining forces","Call for archers to use fire arrows","Send your most trusted emissary to negotiate with the enemy","Task a horseman with delivering a plea to your allies for assistance","Gather your family and riches in the underground caves"],
            q4ImageUrl: "https://lh5.googleusercontent.com/OdZgOfac6Or3VH29byuiRVohRdmJ-otkq3KYgoeVKb1TmeMUCEYSOOl44MtSGS6wUOjK09LkIUxmli9CBLzlLSRy8o8xO7uKY2L3cZig=s1600",

            question_5_text: "As the enemy overwhelms your forces, you have time for one last maneuver.",
            question_5_answers:["Pray to the many gods for help","Light the ancient candle of hope","Ready your horse to join the battle","Give your sword to the golden knight","Gather the remaining troops and make one last glorious stand"],
            q5ImageUrl: "https://lh4.googleusercontent.com/S3ay4ttZl6Pqasbo8-BwSCNThcUaMwGMwGlAAFPFBGP6ZMIRSbAT4NVzk4BK8nQek7zz7JqM6l3k-D_Sdubi72UUUEjdozaNAmEKiJ_2=s1600",
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
            gameDetails['backstory'] = this.backstory;
            gameDetails['description'] = this.description;
            gameDetails['gameImgUrl'] = this.gameImgUrl;
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
            let ZasteGame = await this.run.load(this.$store.state.gameCodeLocation);
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