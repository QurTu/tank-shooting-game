import  level1 from'./levels/level1.js';
export default class Walls {
   constructor(gameLevel, game){
       this.wallArray = eval(`level${gameLevel}`);
       this.wallH = 16;
       this.wallW = 16;
       this.c  = game.c;
       this.ctx = game.ctx;
       this.widthCanvas = game.widthCanvas;
         this.heightCanvas =  game.heightCanvas;
         this.img = document.querySelector('.brick');
         this.imgRock = document.querySelector('.rock');
         this.wallsFull = [];
         this.earthWallArray = [];
         this.earthWallArrayBuilding();
        this.imgRock.onload = this.renderWalls();
        
       

   }
  
   

   renderWalls() {
        
       for( let i = 0 ; i < this.wallArray.length; i++) {

        if(this.wallArray[i].t === 1){
          this.ctx.fillStyle = this.ctx.createPattern(this.img, 'repeat');
             this.ctx.fillRect(this.wallArray[i].x, this.wallArray[i].y, this.wallW, this.wallH );
         this.wall = { x:this.wallArray[i].x, y:this.wallArray[i].y , wH:this.wallW, wW:this.wallH }
         this.wallsFull.push(this.wall);
        }
        
        if(this.wallArray[i].t ===  2){

          this.ctx.fillStyle = this.ctx.createPattern(this.imgRock, 'repeat');
          this.ctx.fillRect(this.wallArray[i].x, this.wallArray[i].y, this.wallW, this.wallH );
      this.wall = { x:this.wallArray[i].x, y:this.wallArray[i].y , wH:this.wallW, wW:this.wallH }
      this.wallsFull.push(this.wall);
     }
      
      }



         
   
  
     
   }
   earthWallArrayBuilding() {
    this.wallArray.push({x: this.widthCanvas / 2 + 24 , y: this.heightCanvas - 16 , t: 1 })
    this.wallArray.push({x: this.widthCanvas / 2 + 24 , y: this.heightCanvas - 32 , t: 1 })
    this.wallArray.push({x: this.widthCanvas / 2 + 24 , y: this.heightCanvas - 48 , t: 1 })
    this.wallArray.push({x: this.widthCanvas / 2 + 24 , y: this.heightCanvas - 60 , t: 1 })
    this.wallArray.push({x: this.widthCanvas / 2 + 24 , y: this.heightCanvas - 72 , t: 1 })

    this.wallArray.push({x: this.widthCanvas / 2 + 40 , y: this.heightCanvas - 16 , t: 1 })
    this.wallArray.push({x: this.widthCanvas / 2 + 40 , y: this.heightCanvas - 32 , t: 1 })
    this.wallArray.push({x: this.widthCanvas / 2 + 40 , y: this.heightCanvas - 48 , t: 1 })
    this.wallArray.push({x: this.widthCanvas / 2 + 40 , y: this.heightCanvas - 60 , t: 1 })
    this.wallArray.push({x: this.widthCanvas / 2 + 40 , y: this.heightCanvas - 72 , t: 1 })
    
    this.wallArray.push({x: this.widthCanvas / 2 - 40 , y: this.heightCanvas - 16 , t: 1 })
    this.wallArray.push({x: this.widthCanvas / 2 - 40 , y: this.heightCanvas - 32 , t: 1 })
    this.wallArray.push({x: this.widthCanvas / 2 - 40 , y: this.heightCanvas - 48 , t: 1 })
    this.wallArray.push({x: this.widthCanvas / 2 - 40 , y: this.heightCanvas - 60 , t: 1 })
    this.wallArray.push({x: this.widthCanvas / 2 - 40 , y: this.heightCanvas - 72 , t: 1 })

    this.wallArray.push({x: this.widthCanvas / 2 - 56 , y: this.heightCanvas - 16 , t: 1 })
    this.wallArray.push({x: this.widthCanvas / 2 - 56 , y: this.heightCanvas - 32 , t: 1 })
    this.wallArray.push({x: this.widthCanvas / 2 - 56 , y: this.heightCanvas - 48 , t: 1 })
    this.wallArray.push({x: this.widthCanvas / 2 - 56 , y: this.heightCanvas - 60 , t: 1 })
    this.wallArray.push({x: this.widthCanvas / 2 - 56 , y: this.heightCanvas - 72 , t: 1 })

    this.wallArray.push({x: this.widthCanvas / 2  + 8 , y: this.heightCanvas - 60 , t: 1 })
    this.wallArray.push({x: this.widthCanvas / 2 + 8 , y: this.heightCanvas - 72 , t: 1 })
    this.wallArray.push({x: this.widthCanvas / 2  - 8 , y: this.heightCanvas - 60, t: 1  })
    this.wallArray.push({x: this.widthCanvas / 2 - 8 , y: this.heightCanvas - 72 , t: 1 })
    this.wallArray.push({x: this.widthCanvas / 2  - 24 , y: this.heightCanvas - 60 , t: 1 })
    this.wallArray.push({x: this.widthCanvas / 2 - 24 , y: this.heightCanvas - 72 , t: 1 })
    
}
   
   }
