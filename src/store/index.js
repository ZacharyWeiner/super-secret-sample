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
    gameCodeLocation: "86950a0dd32d97c4642dd78b5429192b6eae702e6dccb344e0a7a8292d872013_o1",
    answerCodeLocation: "a7b38a304f927eb90b11ffd1eecbba7e49f38fef0a5e5a58a95263a7daa7b8e3_o1",
    gameTitle: "",
    gameObject: null,
    questionIndex: 0,
    userAnswers: [],
    playerPursePrivKey: "",
    playerOwnerPrivKey: "",
    playerSeed: "",
    loadingText: "",
    currentUserAnswer: "",
    handcash_client_token:"",
    network: "test",
  },
  mutations: {
    setLoadingText(state, text){
      state.loadingText = text;
    },
    setNetwork(state, network){
      state.network = network;
    },
    setPlayerSeed(state, seed){
      state.playerSeed = seed;
    },
    setHandcashClientToken(state, token){
      state.handcash_client_token = token;
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
      const run = new Run({network: "test", purse: state.playerPursePrivKey, owner: state.playerOwnerPrivKey, trust: "*"})
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
