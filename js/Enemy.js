export default class Enemy {
    constructor (spawnX, spawnY, type, game) {
        this.x = spawnX;
        this.y = spawnY;
        this.newX = this.x;
        this.newY = this.y;
        this.type = type;
        this.game = game;
        this.dx = 0;
        this.dy = 0;
        this.imgFrieza = document.querySelector('.frieza');
        this.imgCell = document.querySelector('.cell');
        this.imgbuu = document.querySelector('.buu');
        this.imgbuu.onload =  this.RenderEnemy();
        this.updateReq();
 
    }



    updateReq() {
    
    requestAnimationFrame((e) => this.updateReq());
    this.update();
    console.log('drau');
    
}  
        update() {
            this.newX += this.dx;
            this.newY += this.dy;
            this.stayInMap();
            this.updateReDraw();

        }
            
            updateReDraw() {
                this.game.ctx.clearRect(this.x, this.y, 48, 48 );
                this.x = this.newX;
                 this.y = this.newY;
                 if( this.type === 1) {
                    this.game.ctx.drawImage(this.imgFrieza, this.newX , this.newY, 48, 48);
        
                }
                if( this.type === 2) {
                    this.game.ctx.drawImage(this.imgCell, this.newX , this.newY, 48, 48);
                    
                }
                if( this.type === 3) {
                    this.game.ctx.drawImage(this.imgbuu, this.newX , this.newY, 48, 48);
                    
                }
            }
            
                    


    RenderEnemy() {
        if( this.type === 1) {
            this.game.ctx.drawImage(this.imgFrieza, this.x , this.y, 48, 48);

        }
        if( this.type === 2) {
            this.game.ctx.drawImage(this.imgCell, this.x , this.y, 48, 48);
            
        }
        if( this.type === 3) {
            this.game.ctx.drawImage(this.imgbuu, this.x , this.y, 48, 48);
            
        }

    }

    stayInMap() {
        
  if (this.newY < 0) {
   this.newY += Math.abs(this.dy)}

  if (this.newY > this.game.heightCanvas - 48) {
       this.newY -= Math.abs(this.dy);}

    if(this.newX > this.game.widthCanvas - 48) {
       this.newX = this.game.widthCanvas - 48;}

         if(this.newX < 0 ) {
               this.newX = 0;}

    }


}

// updateReDraw() {
//     //player1
//     this.player.ctx.clearRect(this.bulletX, this.bulletY, this.buletsize, this.buletsize );
//     this.bulletX = this.bulletXNew ;
//     this.bulletY =this.bulletYNew ;
//     this.player.ctx.fillRect(this.bulletXNew,this.bulletYNew , this.buletsize, this.buletsize );
    
//  }


// }



// }  

// update() {
   
//    this.bulletXNew += this.dx ;
//    this.bulletYNew += this.dy ;
//    this.dxPresent = this.dx;
//    this.dyPresent = this.dy;
//    this.updateReDraw();
//    this.WallsAndBulletAndBulletCollision() 





//   if (this.Player1y < 0) {
//     this.Player1y += 6; }

//     if (this.Player1y > this.game.heightCanvas - this.playerHeight) {
//         this.Player1y -= 6;}

//         if(this.Player1x > this.game.widthCanvas - this.playerWidth) {
//             this.Player1x = this.game.widthCanvas - this.playerWidth;}

//             if(this.Player1x < 0 ) {
//                 this.Player1x = 0;}