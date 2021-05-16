<template>
  <RadioGroup v-model="selected">
    <RadioGroupLabel class="sr-only">
      Answer: 
    </RadioGroupLabel>
    <div class="space-y-4">
      <RadioGroupOption as="template" v-for="answer in answers" :key="answer" :value="answer" v-slot="{ active, checked }" @click="updateSelected(answer)">
        <div :class="[active ? 'ring-1 ring-offset-2 ring-indigo-500' : '', 'relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus:outline-none']">
          <div class="flex items-center">
            <div class="text-sm">
              <RadioGroupLabel as="p" class="font-medium text-gray-900">
                {{ answer }}
              </RadioGroupLabel>
              <!-- <RadioGroupDescription as="div" class="text-gray-500">
                <p class="sm:inline">{{ plan.ram }} / {{ plan.cpus }}</p>
                {{ ' ' }}
                <span class="hidden sm:inline sm:mx-1" aria-hidden="true">&middot;</span>
                {{ ' ' }}
                <p class="sm:inline">{{ plan.disk }}</p>
              </RadioGroupDescription> -->
            </div>
          </div>
          <!-- <RadioGroupDescription as="div" class="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
            <div class="font-medium text-gray-900">{{ plan.price }}</div>
            <div class="ml-1 text-gray-500 sm:ml-0">/mo</div>
          </RadioGroupDescription> -->
          <div :class="[checked ? 'border-indigo-500' : 'border-transparent', 'absolute -inset-px rounded-lg border-2 pointer-events-none']" aria-hidden="true" />
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>

<script>
import { ref } from 'vue'
import {useStore} from "vuex"
import { 
    RadioGroup, 
    //RadioGroupDescription, 
    RadioGroupLabel, 
    RadioGroupOption } from '@headlessui/vue'

// const plans = [
//   { name: 'Hobby', ram: '8GB', cpus: '4 CPUs', disk: '160 GB SSD disk', price: '$40' },
//   { name: 'Startup', ram: '12GB', cpus: '6 CPUs', disk: '256 GB SSD disk', price: '$80' },
//   { name: 'Business', ram: '16GB', cpus: '8 CPUs', disk: '512 GB SSD disk', price: '$160' },
//   { name: 'Enterprise', ram: '32GB', cpus: '12 CPUs', disk: '1024 GB SSD disk', price: '$240' },
// ]

export default {
  components: {
    RadioGroup,
    //RadioGroupDescription,
    RadioGroupLabel,
    RadioGroupOption,
  },
  setup(props) {
    let store = useStore();
    let selected;
    if (store.state.currentUserAnswer){ selected = ref(store.state.currentUserAnswer)} else {selected = ref(null)}
    let answerIndex = ref(props.index);
    return {
      selected,
      answerIndex,
    }
  },
  methods:{
      updateSelected(answer){
      this.$store.commit("setCurrentUserAnswer", answer);
  },
  },
  computed: {
      answers() {
          let _ans = [];
          const game = this.$store.state.gameObject;
          console.log(game);
          if(!game) return [];

          const questionIndex = this.$store.state.questionIndex;
          switch(questionIndex){
              case 0:
                  _ans =  game.details.question_1.answers;
                  break;
              case 1:
                  _ans =  game.details.question_2.answers;
                  break;
              case 2:
                  _ans =  game.details.question_3.answers;
                  break;
              case 3:
                  _ans =  game.details.question_4.answers;
                  break;
              case 4:
                  _ans =  game.details.question_5.answers;
                  break;
              default:
                  _ans = ['Fuck Off']; 
          }
          return _ans;
      },
  },
  props:{
      index: Number,
  }
}
</script>