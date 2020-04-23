import Game from "./Game.js";

export default class AllGame {
    constructor() {
        this.players;
        this.level = 1;
        this.alive = 1;
        this.game = {gameOutCome: 0, alive: 1};
        this.gameDOM =  document.querySelector('.game');
        this.gameStart();
        this.update();
        

    }

    gameStart() {
        let  HTML = ` <div class="start"> <div class='start-menu'>
        <div class=" btn one-player"> START GAME : ONE PLAYER</div>
        <div class=" btn two-players">START GAME : TWO PLAYER</div>
        <div class=" btn create-lvl">CREATE LEVEL (Commint soon)</div>
    </div> ` ;
       this.gameDOM.insertAdjacentHTML("afterbegin" , HTML) ;
        document.querySelector('.one-player').onclick = () => {
            while(this.gameDOM.firstChild) {
                this.gameDOM.removeChild(this.gameDOM.lastChild);
              }
            this.players = 1;
            this.startLvl()  
             
          }
        document.querySelector('.two-players').addEventListener('click', ()  =>{
            while (this.gameDOM.firstChild) {
                this.gameDOM.removeChild(this.gameDOM.lastChild);
              }
        this.players = 2;
          this.startLvl(); 
         
    }) 
    }

    startLvl() {
        console.log('suveikiau');
   this.game = new Game(this.level , this.players);
        this.level += 1;
        
}

update() {
    requestAnimationFrame((e) => this.update());
    this.WinStartNewLvl();
    if(this.game.alive === 0) { 
        this.gameRestart(); }
    
}

gameRestart() {
    this.level = 1;
    this.game = {gameOutCome: 0, alive: 1};
        this.alive = 1;
        this.gameStart();
    
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