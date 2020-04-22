import Game from "./Game.js";

export default class AllGame {
    constructor(players,) {
        this.players = players;
        this.level = 1;
        this.game;
        this.alive = 1;
        this.startLvl();
        this.update();




    }

    startLvl() {
        console.log('suveikiau');
   this.game = new Game(this.level , this.players);
        this.level += 1;
        
}

update() {
    requestAnimationFrame((e) => this.update());
    this.WinStartNewLvl();
    
}
WinStartNewLvl() {
    if(this.game.gameOutCome === 1) {
        document.querySelector('.game').innerHTML = '';
        this.startLvl();
    }
    if(this.game.gameOutCome === -1) {
        this.alive = 0;
        document.querySelector('.game').innerHTML = '';
    }

}




}