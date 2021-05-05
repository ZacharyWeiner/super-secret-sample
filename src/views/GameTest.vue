<template>
    <div>
        <button @click="createGame" > Create Game </button>
    </div>
    <div>
        {{gameTitle ? gameTitle : "No Games Created"}}
    </div>
    <div>
        {{q1 ? q1 : "You Suck"}}
    </div>
    <div v-if="q1_answers === []">
        Be Cooler 
    </div>
    <div v-else>
        <div v-for="answer in q1_answers" :key="answer.toString()">
            {{answer}}
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import Run from "run-sdk"

// Game Owner Details 
// Private Key: cVdG6jSHB5DePtbQyLKJ1GQGF62FShc1Zksns5SosGgANnBa7p8n GameTest.vue:44
// Public Key: 027ccec5c680b4de1b409a310a86bc41b0758d88bf34efa2636d3583b7248d0d4d GameTest.vue:45
// Adddress: n1uKoT7vjsccrStkcdX8rsoAX951xdveDv

class ZasteGame extends Run.Jig{
    init(jsonObject, satoshisForPlay){
        this.satoshisForPlay = satoshisForPlay;
        this.isWon = false;
        this.pay_address = "n4GJ33kc5QTW6V5fqhgeMHDQsVzjK21ckd";
        this.royalty_address = "";
        this.details = jsonObject;
        this.plays = 0;
    }
    incrementPlays(){
        this.plays = this.plays + 1; 
    }
    send(to){
        this.owner = to;
    }
    setPayAddress(pa){
        this.pay_address = pa;
    }
}
export default {
    async setup () {
        const run = new Run({network: "test", purse: "cQdpg2oTVvbeb47GzRxqn467RmJNp8rJzfoPMfkSBRyzqEdbJcSz", owner: 'cTQPGSZiCXQD3UmrF4rKE6Gub3tmjYYvrjspU7BhXCYbg5f2r7AW', trust: "*"})
        //const run = new Run({network: "test", trust: "*"});
        console.log("Private Key:", run.owner.privkey);
        console.log("Public Key:", run.owner.pubkey);
        console.log("Adddress:", run.owner.address);
        console.log("Owner:", run.owner);
        await run.inventory.sync();
        console.log(run.inventory.jigs);
        const state = reactive({
            count: 0,
            gameDetails: {}
        })
    
        return {
            ...toRefs(state),
            run
        }
    },
    methods:{
        async createGame(){
            let gameDetails = {title: "Our Cool Adventure"}; 
            let question = {questionText: "Do you want to go on a cool adventure?", answers: ['yes', 'no', 'maybe', 'sometimes', 'always']}
            gameDetails["question_1"] = question;
            let question2 = {questionText: "International or stay in the States?", answers: ['international', 'stay in the states', 'surprise me', 'I dont care', 'everywehre but here sucks anyway']}
            gameDetails["question_2"] = question2;
            let question3 = {questionText: "Should we fly or drive", answers: ['fly', 'drive', 'take a train', 'bus', 'boat']}
            gameDetails["question_3"] = question3;
            
            console.log(gameDetails);
            this.gameDetails = gameDetails;
            const g = new ZasteGame(gameDetails, 10000);
            await g.sync();
            console.log("New Game Location:", g.location);
            
        }
    },
     computed:{
         gameTitle(){
             let title = "";
             console.log("Computed Game Details:", this.gameDetails);
             if(this.gameDetails !== {}){
              return this.gameDetails.title;  
             }
             return title;
         }, 
        q1(){
             let q1_text = "";
             try{
                 if(this.gameDetails !== {} && this.gameDetails.question_1){
                    console.log("Look at me", this.gameDetails.question_1)
                    return this.gameDetails.question_1.questionText;  
                }
             } catch(err){
             console.log(err);
             }
             return q1_text;
         }, 
         q1_answers(){
             let response = [];
             try{
                 if(this.gameDetails !== {} && this.gameDetails.question_1){
                     response = this.gameDetails.question_1.answers;
                 }
             }catch(err){console.log(err)}
             console.log("This array should be filled with fucking answers", response)
             return response;
         }
     }
}
</script>

<style lang="scss" scoped>

</style>