import  level1 from'./levels/level1.js';
import  level2 from'./levels/level2.js';
import  level3 from'./levels/level3.js';
import  level4 from'./levels/level4.js';

export default class Walls {
   constructor(game){
       this.wallArray = eval(`level${game.level}`);
       this.wallH = 16;
       this.wallW = 16;
       this.c  = game.c;
       this.ctx = game.ctx;
       this.widthCanvas = game.CanvasWidth;
       this.heightCanvas =  game.CanvasHeight;
       this.img = document.querySelector('.brick');
       this.imgRock = document.querySelector('.rock');
       this.allWalls = [];
            
            this.imgRock.onload = this.renderWalls();
   }
   
   renderWalls() {
       for( let i = 0 ; i < this.wallArray.length; i++) {
        if(this.wallArray[i].t === 1){
          this.ctx.fillStyle = this.ctx.createPattern(this.img, 'repeat');
             this.ctx.fillRect(this.wallArray[i].x, this.wallArray[i].y, this.wallW, this.wallH );
         this.wall = { x:this.wallArray[i].x, y:this.wallArray[i].y , wH:this.wallW, wW:this.wallH , t: 1};
         this.allWalls.push(this.wall);
        }    
        if(this.wallArray[i].t ===  2){
          this.ctx.fillStyle = this.ctx.createPattern(this.imgRock, 'repeat');
          this.ctx.fillRect(this.wallArray[i].x, this.wallArray[i].y, this.wallW, this.wallH );
      this.wall = { x:this.wallArray[i].x, y:this.wallArray[i].y , wH:this.wallW, wW:this.wallH, t: 2 };
      this.allWalls.push(this.wall);
      
     } 
      }
   }


   
   }
