import Run from "run-sdk"
const test_game_code_location = "a25e433f0cf3e5e16ce810ae0c4463936c51803587e1af38f8cdc5ae6f3a4c51_o1"
const test_game_list_code_location = "69d96acc26600df928136fe9cb90c1246014a33ec00acea2659f58653e9681ce_o1"
const test_game_list_instance_location = "69d96acc26600df928136fe9cb90c1246014a33ec00acea2659f58653e9681ce_o2"
const test_answer_code_location = "7fddd653799d693635780d24e4a78fcadfa456c37eebbc53cf02269a8aa52a96_o1"

const live_game_code_location = ""
const live_game_list_code_location = ""
const live_game_list_instance_location = ""
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
            store.commit("setGameListLocation", live_game_list_instance_location)
            store.commit("setGameListCodeLocation", live_game_list_code_location)
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
            store.commit("setGameListLocation", test_game_list_instance_location)
            store.commit("setGameListCodeLocation", test_game_list_code_location)
            store.commit("setGameCodeLocation", test_game_code_location)
            store.commit("setAnswerCodeLocation", test_answer_code_location)
        }
        return run;
    } 
}
export default RunStore;