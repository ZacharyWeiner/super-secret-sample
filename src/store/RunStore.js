import Run from "run-sdk"
const test_game_code_location = "f5d2340786dbdc9a7ca25852fa1cf2b08137163a5bd4f22549727b84d94e39fb_o1"
const test_game_list_code_location = "3abf31ab5fe29789ea0c14737065787760f31779561ec7edd0b3d018a15fc73d_o2"
const test_answer_code_location = "a7b38a304f927eb90b11ffd1eecbba7e49f38fef0a5e5a58a95263a7daa7b8e3_o1"

const live_game_code_location = ""
const live_game_list_code_location = ""
const live_answer_code_location = ""
class RunStore {
     static useRun(store) {
         let run; 
         if(store.state.network === "live"){
            if(store.state.playerPursePrivKey_live !== ""){
               run =  new Run({purse: store.state.playerPursePrivKey_live , owner: store.state.playerOwnerPrivKey_live, trust: "*"})
            } else {
                run = new Run({trust: "*"})
                store.commit("setPlayerPursePrivKey_live", run.purse.privkey)
                store.commit("setPlayerOwnerPrivKey_live", run.owner.privkey)
            }
            store.commit("setGameListLocation", live_game_list_code_location)
            store.commit("setGameCodeLocation", live_game_code_location)
            store.commit("setAnswerCodeLocation", live_answer_code_location)
        } else {
            if(store.state.playerPursePrivKey !== "") {
                run = new Run({network: "test", purse: store.state.playerPursePrivKey , owner: store.state.playerOwnerPrivKey, trust: "*"})
            } else {
                run = new Run({network: "test", trust: "*"})
                store.commit("setPlayerPursePrivKey", run.purse.privkey)
                store.commit("setPlayerOwnerPrivKey", run.owner.privkey)
                
            }
            store.commit("setGameListLocation", test_game_list_code_location)
            store.commit("setGameCodeLocation", test_game_code_location)
            store.commit("setAnswerCodeLocation", test_answer_code_location)
        }
        return run;
    } 
}
export default RunStore;