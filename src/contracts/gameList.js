import Run from 'run-sdk'
class GameList extends Run.Jig {
    init(title){
        this.title = title;
        this.gameList = [];
    }
    updateTitle(title){
        this.title = title;
    }
    addGame(id){
        this.gameList.push(id);
    }
    removeGame(id){
        this.gameList.pop(id);
    }
}
export default GameList;