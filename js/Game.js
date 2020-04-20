import Canvas from './Canvas.js';
import  Earth from './Earth.js';
import  Walls from './Walls.js';
import Player from './Player.js';
import Enemy from './Enemy.js';

class Game  {
    constructor( level, playersNumber) {
        this.level = level;
        this.c = null;
        this.ctx = null;
        this.playersNumber = playersNumber;
        this.walls;
        this.earth;
        this.player1;
        this.player2;
        this.EnemyArray = [];
        this.vawe = 0;
 
       this.renderGame();
       setInterval(() => this.RenderEnemys(), 100);
       
       
      

    } 
   
    
    renderGame() {
        this.renderCanvas();
        this.renderEarth();
        this.renderWalls();
        this.initPlayers();
        this.RenderEnemys();
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

RenderEnemys() {
   
         this.RenderWaveOfenemys();
    
}

RenderWaveOfenemys()  {
    
    if (this.vawe < 1) {
   this.EnemyArray = new Enemy (0, 0, Math.ceil(Math.random()*3), this);
   //this.EnemyArray = new Enemy (this.widthCanvas / 2 - 24 , 0, Math.ceil(Math.random()*3), this);
  // this.EnemyArray = new Enemy (this.widthCanvas - 48 , 0, Math.ceil(Math.random()*3), this);
        this.vawe++;
    }
}



    
}
export default Game;

