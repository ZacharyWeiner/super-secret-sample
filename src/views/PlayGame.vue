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
        <div v-if="0 < displayIndex && displayIndex > 3">
            <button @click="back"> &lt;= Back  </button>
        </div>
        <div v-if="displayIndex < 3">
            <button @click="setAnswer"> Next => </button>
        </div>
        <div v-if="displayIndex === 3">
            <h4> My Answers: </h4>
            <div v-for="answer in userAnswers" :key="answer.toString()">  
                {{answer}}
            </div>
            <button @click="checkWin"> Did I Win </button>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { mapState, useStore } from 'vuex'
import Run from "run-sdk"
class Answers extends Run.Jig{
    init(answers){
        this.answers = answers;
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
        const state = reactive({
            count: 0,   
            picked: null
        })
    
        return {
            ...toRefs(state),
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
            const userAnswers = new Answers(this.$store.state.userAnswers)
            await userAnswers.sync()
            console.log(userAnswers);
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

<style lang="scss" scoped>

</style>