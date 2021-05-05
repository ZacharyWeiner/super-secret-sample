import { createStore } from 'vuex'

export default createStore({
  state: {
    gameLocation: "6f3e4a0a6cd30fd037ec0033fc2cfb932a9a74843951f56dc42d2ed2d20083cd_o2",
    gameTitle: "",
    gameObject: null,
    questionIndex: 0,
    userAnswers: []
  },
  mutations: {
    setGameLocation(state, location){
      state.gameLocation = location;
    },
    setGameTitle(state, title){
      state.gameTitle = title;
    },
    setGameObject(state, obj){
      state.gameObject = obj;
    },
    setQuestionIndex(state, index){
      state.questionIndex = index;
    },
    addUserAnswer(state, answer){
      state.userAnswers[state.questionIndex] = answer
    }
  },
  actions: {
  },
  modules: {
  }
})
