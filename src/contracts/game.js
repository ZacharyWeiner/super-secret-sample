import Run from 'run-sdk';
// const emoji = '🏆'
// //a87f93af5d9721b2871583e3cbab60aea181c5975c35b4a2d5a819d69ade0ce0
// const image = await Run.extra.B.loadWithMetadata('a87f93af5d9721b2871583e3cbab60aea181c5975c35b4a2d5a819d69ade0ce0', {
//     title: 'Gold Trophy icon',
// })
//ZasteGame.metadata = { emoji, image }
class ZasteGame extends Run.Jig {
    init(jsonObject, satoshisForPlay, winningHash, categories, author, illustrator){
        this.satoshisForPlay = satoshisForPlay;
        this.isWon = false;
        this.pay_address = "mnjw8DT8BDvFYL3cy2tspeKjWrBdz6DgXH";
        this.author = author;
        this.illustrator = illustrator;
        this.details = jsonObject;
        this.satoshis = 100000;  
        this.plays = 0;
        this.hashtype = 1;
        this.winningHash = winningHash
        this.categories = categories
    }
    incrementPlays(){
        this.plays = this.plays + 1; 
    }
    fund(amount){
        let newAmount = this.satoshis + amount;
        this.satoshis = newAmount;
        this.plays = this.plays + 1; 
    }
    send(to){
        this.owner = to;
    }
    win(to) {
        this.isWon = true;
        this.owner = to;
    }
    setPayAddress(pa){
        this.pay_address = pa;
    }
    withdraw(){
        this.satoshis = 0;
    }
}

export default ZasteGame;