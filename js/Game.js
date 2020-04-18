import Canvas from './Canvas.js';
import  Earth from './Earth.js';
import  Walls from './Walls.js';
import Player from './Player.js';

class Game  {
    constructor( level, playersNumber) {
        this.level = level;
        this.c = null;
        this.ctx = null;
        this.playersNumber = playersNumber;
       this.renderGame();
       this.initPlayers();
       this.walls;
       this.earth;
       this.player1;
       this.player2;

       

    }  
    renderGame() {
        this.renderCanvas();
        this.renderEarth();
        this.renderWalls();
    }

renderCanvas() {
    this.canvas = new Canvas();
    this.c = this.canvas.c;
    this.ctx = this.canvas.ctx;
    this.widthCanvas = this.canvas.width;
    this.heightCanvas = this.canvas.height;
}

renderEarth() {
    this.earth = new Earth(this.c , this.ctx,  this.widthCanvas, this.heightCanvas );
  
}

renderWalls() {
    this.walls = new Walls(this.level, this);
}

initPlayers() {
    if (this.playersNumber === 1){
        this.player1 = new Player( 1 , this);
    }
    if (this.playersNumber === 2){
        this.player1 = new Player( 1 , this);
        this.player2 = new Player( 2 , this);
    }
}


    
}
export default Game;

