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
         this.wallsFull = [];
         this.earthWallArray = [];
         this.earthWallArrayBuilding();
        this.img.onload = this.renderWalls();
       

   }
  
   

   renderWalls() {
        this.ctx.fillStyle = this.ctx.createPattern(this.img, 'repeat');
       for( let i = 0 ; i < this.wallArray.length; i++) {
         this.ctx.fillRect(this.wallArray[i].x, this.wallArray[i].y, this.wallW, this.wallH );
         this.wall = { x:this.wallArray[i].x, y:this.wallArray[i].y , wH:this.wallW, wW:this.wallH }
         this.wallsFull.push(this.wall);

         for( let i = 0 ; i < this.earthWallArray.length; i++) {
            this.ctx.fillRect(this.earthWallArray[i].x, this.earthWallArray[i].y, this.wallW, this.wallH );
            this.wall = { x:this.earthWallArray[i].x, y:this.earthWallArray[i].y , wH:this.wallW, wW:this.wallH }
            this.wallsFull.push(this.wall); 
       }     
   }
  
     
   }
   earthWallArrayBuilding() {
    this.earthWallArray.push({x: this.widthCanvas / 2 + 24 , y: this.heightCanvas - 16 })
    this.earthWallArray.push({x: this.widthCanvas / 2 + 24 , y: this.heightCanvas - 32 })
    this.earthWallArray.push({x: this.widthCanvas / 2 + 24 , y: this.heightCanvas - 48 })
    this.earthWallArray.push({x: this.widthCanvas / 2 + 24 , y: this.heightCanvas - 60 })
    this.earthWallArray.push({x: this.widthCanvas / 2 + 24 , y: this.heightCanvas - 72 })

    this.earthWallArray.push({x: this.widthCanvas / 2 + 40 , y: this.heightCanvas - 16 })
    this.earthWallArray.push({x: this.widthCanvas / 2 + 40 , y: this.heightCanvas - 32 })
    this.earthWallArray.push({x: this.widthCanvas / 2 + 40 , y: this.heightCanvas - 48 })
    this.earthWallArray.push({x: this.widthCanvas / 2 + 40 , y: this.heightCanvas - 60 })
    this.earthWallArray.push({x: this.widthCanvas / 2 + 40 , y: this.heightCanvas - 72 })
    
    this.earthWallArray.push({x: this.widthCanvas / 2 - 40 , y: this.heightCanvas - 16 })
    this.earthWallArray.push({x: this.widthCanvas / 2 - 40 , y: this.heightCanvas - 32 })
    this.earthWallArray.push({x: this.widthCanvas / 2 - 40 , y: this.heightCanvas - 48 })
    this.earthWallArray.push({x: this.widthCanvas / 2 - 40 , y: this.heightCanvas - 60 })
    this.earthWallArray.push({x: this.widthCanvas / 2 - 40 , y: this.heightCanvas - 72 })

    this.earthWallArray.push({x: this.widthCanvas / 2 - 56 , y: this.heightCanvas - 16 })
    this.earthWallArray.push({x: this.widthCanvas / 2 - 56 , y: this.heightCanvas - 32 })
    this.earthWallArray.push({x: this.widthCanvas / 2 - 56 , y: this.heightCanvas - 48 })
    this.earthWallArray.push({x: this.widthCanvas / 2 - 56 , y: this.heightCanvas - 60 })
    this.earthWallArray.push({x: this.widthCanvas / 2 - 56 , y: this.heightCanvas - 72 })

    this.earthWallArray.push({x: this.widthCanvas / 2  + 8 , y: this.heightCanvas - 60 })
    this.earthWallArray.push({x: this.widthCanvas / 2 + 8 , y: this.heightCanvas - 72 })
    this.earthWallArray.push({x: this.widthCanvas / 2  - 8 , y: this.heightCanvas - 60 })
    this.earthWallArray.push({x: this.widthCanvas / 2 - 8 , y: this.heightCanvas - 72 })
    this.earthWallArray.push({x: this.widthCanvas / 2  - 24 , y: this.heightCanvas - 60 })
    this.earthWallArray.push({x: this.widthCanvas / 2 - 24 , y: this.heightCanvas - 72 })
    
}
   
   }
