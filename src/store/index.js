import { createStore } from 'vuex'

export default createStore({
  state: {
    gameLocation: "7944ab6c5e8b926dc32b4c08e0aa5c6c2dc345435ac6c305e4c4936632901878_o2",
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
