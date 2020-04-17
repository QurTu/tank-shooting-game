import Canvas from './Canvas.js';
import  Earth from './Earth.js';
import  Walls from './Walls.js';

class Game {
    constructor( level) {
        this.level = level;
        this.c = null;
        this.ctx = null;
       this.renderGame();

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
    this.Walls = new Walls(this.level);
}
    
}
export default Game;

