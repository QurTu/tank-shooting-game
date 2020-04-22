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
    while ( document.querySelector('.game').firstChild) {
    document.querySelector('.game').removeChild( document.querySelector('.game').lastChild);
  }
        this.startLvl();
    }
    if(this.game.gameOutCome === -1) {
        this.alive = 0;      
     while ( document.querySelector('.game').firstChild) {
    document.querySelector('.game').removeChild( document.querySelector('.game').lastChild);
  }
    }

}




}