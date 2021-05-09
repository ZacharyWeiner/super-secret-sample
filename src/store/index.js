import { createStore } from 'vuex'
import Run from "run-sdk"

export default createStore({
  state: {
    gameLocation: "ffbd504e96bee30ce4f9d8d4555df1ebc68133924b797358b0a1e7d182613cbe_o2",
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
      console.log("Set game obj", obj, obj.satoshis);
    },
    setQuestionIndex(state, index){
      state.questionIndex = index;
    },
    addUserAnswer(state, answer){
      state.userAnswers[state.questionIndex] = answer
    }
  },
  actions: {
    async updateBalance({commit, state}){
      const run = new Run({network: "test", purse: "cQdpg2oTVvbeb47GzRxqn467RmJNp8rJzfoPMfkSBRyzqEdbJcSz", owner: 'cTQPGSZiCXQD3UmrF4rKE6Gub3tmjYYvrjspU7BhXCYbg5f2r7AW', trust: "*"})
      let g = await run.load(state.gameLocation);
      await g.sync();
      commit("setGameObject", g);
    }
  },
  modules: {
  }
})
