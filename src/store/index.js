import { createStore } from 'vuex'
// import Run from "run-sdk"
import RunStore from "./RunStore.js"
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  key: "sto0pid-games",
  storage: window.localStorage
})

export default createStore({
  state: {
    gameListCodeLocation_test: "3abf31ab5fe29789ea0c14737065787760f31779561ec7edd0b3d018a15fc73d_o1",
    gameListCodeLocation_live: "",
    gameListCodeLocation: "",
    gameListLocation_test: "3abf31ab5fe29789ea0c14737065787760f31779561ec7edd0b3d018a15fc73d_o1",
    gameListLocation_live: "",
    gameListLocation: "",
    gameLocation_test: "0f99a65c223157e189ea50c20de00b982b3b93c914ae6d89771dd48e11f17d99_o2",
    gameLocation_live: "",
    gameLocation: "",
    gameCodeLocation_test: "f5d2340786dbdc9a7ca25852fa1cf2b08137163a5bd4f22549727b84d94e39fb_o1",
    gameCodeLocation_live: "",
    gameCodeLocation: "",
    answerCodeLocation_test: "a7b38a304f927eb90b11ffd1eecbba7e49f38fef0a5e5a58a95263a7daa7b8e3_o1",
    answerCodeLocation_live: "",
    answerCodeLocation: "",
    gameTitle: "",
    gameObject: null,
    questionIndex: 0,
    userAnswers: [],
    playerPursePrivKey_live: "",
    playerOwnerPrivKey_live: "",
    playerPursePrivKey: "",
    playerOwnerPrivKey: "",
    playerSeed: "",
    loadingText: "",
    currentUserAnswer: "",
    handcash_client_token:"",
    handcash_app_id:"",
    network: "test",
    loading: false
  },
  mutations: {
    setLoading(state, _loading){
      state.loading = _loading
    },
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
    setGameListLocation(state, location){
      state.gameListLocation = location;
      console.log("Set gamelistlocation:", location)
    },
    setGameListCodeLocation(state, location){
      state.gameListCodeLocation = location;
      console.log("Set gamelistCodelocation:", location)
    },
    setGameCodeLocation(state, location){
      state.gameCodeLocation = location;
      console.log("set game code location:", location)
    },
    setAnswerCodeLocation(state, location){
      state.answerCodeLocation = location;
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
    setPlayerOwnerPrivKey_live(state, key){
      state.playerOwnerPrivKey_live = key;
    },
    setPlayerPursePrivKey_live(state, key){
      state.playerPursePrivKey_live = key;
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
    },
    setHandcashAppID(state, id){
      state.handcash_app_id = id;
    }
  },
  actions: {
    async updateBalance({commit, state}){
      const run = RunStore.useRun(this)
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
