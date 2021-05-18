import Run from "run-sdk"
class Answers extends Run.Jig{
    init(gameId, answers, sats, winAddress){
        this.owner = "n4GJ33kc5QTW6V5fqhgeMHDQsVzjK21ckd";
        this.answers = answers;
        this.gameId = gameId;
        
        this.satoshis = sats;
        this.address_for_winning = winAddress;
        this.checked = false;
    }
    check(){
        this.checked = true;
        this.satoshis = 0;
    }
    withdraw(){
        this.satoshis = 0; 
    }
    resetOwner(){
        this.owner = this.address_for_winning;
    }

}
export default Answers;