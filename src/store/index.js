import { createStore } from 'vuex'
import Run from "run-sdk"
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  key: "sto0pid-games",
  storage: window.localStorage
})

export default createStore({
  state: {
    gameListLocation: "3abf31ab5fe29789ea0c14737065787760f31779561ec7edd0b3d018a15fc73d_o2",
    gameLocation: "0f99a65c223157e189ea50c20de00b982b3b93c914ae6d89771dd48e11f17d99_o2",
    gameTitle: "",
    gameObject: null,
    questionIndex: 0,
    userAnswers: [],
    playerPursePrivKey: "",
    playerOwnerPrivKey: "",
    playerSeed: "",
    loadingText: "",
    currentUserAnswer: "",
  },
  mutations: {
    setLoadingText(state, text){
      state.loadingText = text;
    },
    setPlayerSeed(state, seed){
      state.playerSeed = seed;
    },
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
    setPlayerOwnerPrivKey(state, key){
      state.playerOwnerPrivKey = key;
    },
    setPlayerPursePrivKey(state, key){
      state.playerPursePrivKey = key;
    },
    setQuestionIndex(state, index){
      state.questionIndex = index;
    },
    setCurrentUserAnswer(state, answer){
      state.currentUserAnswer = answer;
    },
    addUserAnswer(state, answer){
      state.userAnswers[state.questionIndex] = answer
    },
    clearUserAnswers(state){
      state.userAnswers = [];
    }
  },
  actions: {
    async updateBalance({commit, state}){
      const run = new Run({network: "test", purse: "cQdpg2oTVvbeb47GzRxqn467RmJNp8rJzfoPMfkSBRyzqEdbJcSz", owner: 'cTQPGSZiCXQD3UmrF4rKE6Gub3tmjYYvrjspU7BhXCYbg5f2r7AW', trust: "*"})
      let g = await run.load(state.gameLocation);
      await g.sync();
      commit("setGameObject", g);
    },
    resetGame({commit}){
      commit("setQuestionIndex", 0);
      commit("clearUserAnswers");
    },
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
