<template>
     <div class="relative bg-white">
      <div class="absolute inset-0" aria-hidden="true">
        <div class="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-cyan-600 to-green-400" />
      </div>
      <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:px-8">
        <div class="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-0 lg:pr-8">
          <div class="max-w-lg mx-auto lg:mx-0">
            <h2 class="text-base font-semibold tracking-wide text-2xl text-cyan-600 uppercase">
              Your Journey
            </h2>
            <!-- <p class="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">Everything you need to talk with your customers</p> -->
            <dl class="mt-12 space-y-10 t">
              <div v-for="answer in userAnswers" :key="answer" class="relative text-left">
                  <img class=" absolute h-16 w-16 rounded-full" :src="questionImage(userAnswers.indexOf(answer))" alt="" />
                <dt>
                  <!-- <div class="absolute h-12 w-12 bg-gradient-to-r from-cyan-600 to-green-400 rounded-md text-white flex items-center justify-center">
                    
                    {{userAnswers.indexOf(answer) + 1}}
                  </div> -->
                  
                  <p class="mt-2 ml-24 text-base text-gray-500">{{ questionText(userAnswers.indexOf(answer)) }}</p>
                </dt>
                <dd class="ml-24 text-lg leading-6 font-medium text-gray-900 ">
                  {{ answer }}
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="bg-gradient-to-r from-cyan-600 to-green-400 py-16 px-4 sm:py-24 sm:px-6 lg:bg-none lg:flex lg:items-center lg:justify-end lg:px-0 lg:pl-8">
          <div class="max-w-lg mx-auto w-full space-y-8 lg:mx-0">
            <div>
              <h2 class="text-white">Game Purse</h2>
              <p class="relative grid grid-cols-1">
                  <!-- <span class="pointer-events-none absolute h-12 w-full flex items-center justify-center" aria-hidden="true">
                  <PlusIcon class="h-6 w-6 text-cyan-200" aria-hidden="true" />
                </span> -->
                <span class="flex flex-col text-center">
                  <span class="text-5xl font-extrabold text-white tracking-tight">{{gameBalance}}</span>
                 <div class="relative">
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                    <div class="w-full border-t border-green-300" />
                    </div>
                    <div class="relative flex justify-center">
                    <span class="px-2 bg-white text-sm text-green-500">
                        Ðuros
                    </span>
                    </div>
                </div>
                  <span class="sr-only">plus</span>
                </span>
                
                <!-- <span>
                  <span class="flex flex-col text-center">
                    <span class="text-5xl font-extrabold text-white tracking-tight">$4</span>
                    <span class="mt-2 text-base font-medium text-cyan-100">Per month</span>
                  </span>
                </span> -->
              </p>
            </div>
            <ul class="rounded overflow-hidden grid gap-px sm:grid-cols-2">
              <!-- <li v-for="item in checklist" :key="item" class="bg-cyan-700 bg-opacity-50 py-4 px-4 flex items-center text-base text-white">
                <CheckIcon class="h-6 w-6 text-cyan-200" aria-hidden="true" />
                <span class="ml-3">{{ item }}</span>
              </li> -->
            </ul>
            <a @click="playClick" class="w-full bg-white border border-transparent rounded-md py-4 px-8 flex items-center justify-center text-lg leading-6 font-medium text-cyan-700 hover:bg-cyan-50 md:px-10">
              Play for Ð25
            </a>
            <a @click="resetGame" class="block text-center text-base font-medium text-cyan-100 hover:text-white">
              reset your answer
            </a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import {mapState} from "vuex"
//import {CheckIcon } from '@heroicons/vue/outline'
export default {
    setup (props) {
        let callParentFunction = function(){props.create()}
        const state = reactive({
            count: 0,
        })
    
        return {
            ...toRefs(state),
            callParentFunction
        }
    },
    methods:{
        playClick(){
            this.callParentFunction();
        },
        resetGame(){
            this.$store.dispatch("resetGame");
        },
        questionImage(index){
            let text = "";
            switch(index){
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
                case 4:
                    text =  this.gameObject.details.question_5.imgUrl;
                    break;
                default: 
                    text = ""
                    break;
            }
            return text;
        },
        questionText(index){
            let text = "";
            switch(index){
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
                case 4:
                    text =  this.gameObject.details.question_5.questionText;
                    break;
                default: 
                    text = ""
                    break;
            }
            return text;
        },
    },
    computed:{
        gameBalance(){
            return (this.$store.state.gameObject.satoshis / 500) +  " ";
        },
        ...mapState(["gameObject", "userAnswers", "questionIndex"])
    },
    components:{
        //CheckIcon
    },
    props:[
        "create"
    ]
    
}
</script>

<style lang="scss" scoped>

</style>