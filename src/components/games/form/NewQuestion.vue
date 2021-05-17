<template>
    <div>
        <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div class="mt-1">
            <div class="">
                <two-col-background>
                     <template v-slot:title>
                        Add The Questions &amp; Answers
                    </template>
                    <template v-slot:subtitle>
                        {{title}}
                    </template>
                     <template v-slot:left>
                         <textarea v-model="props.questionText" id="title" name="title" rows="3" class="shadow-sm focus:border-2 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com" />
                    </template>
                     <template v-slot:right>
                        <div class="flex">
                            <input id="newAnswer" class="answer-text rounded focus:b-blue-500 w-full bg-gray-200" v-model="props.q1AnswerText" />
                            <button @click="props.addQ1Answer"> + answer </button>
                        </div>
                        <div v-for="a in props.question_1_answers" :key="a">
                            <span class="font-normal text-gray-100">{{a}}</span>
                        </div>
                    </template>
                </two-col-background>
            </div>
           
        </div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import TwoColBackground from "./../../shared/sections/TwoColBackground.vue"
export default {
    setup (props) {
        const state = reactive({
            title: props.title
        })
    
        return {
            ...toRefs(state),
            props
        }
    },
    components:{
        TwoColBackground
    },
    props:["title", "questionText", "q1AnswerText", "addQ1Answer", "question_1_answers" ]
}
</script>

<style lang="scss" scoped>

</style>