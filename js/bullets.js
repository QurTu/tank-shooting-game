export default class Bullet {
    /// reikai saudytoja kodrinaciu ir paskutines pasisukimo krypties. ir pacio zaidimo.
    constructor( shooterX, shootery, speedX, speedY, shooter ) {
        this.buletsize = 8 ;
        this.dx = speedX;
        this.dy = speedY;
        this.deadOrAlive = 1;
        this.x = shooterX;
        this.y = shootery;
        this.xNew = null;
        this.yNew = null;
        this.img = document.querySelector('.rock');
        this.shooter = shooter;
        this.bulletRender() ;
        this.updateReq();

    }
      // rendering new bullet
    bulletRender(){
        this.bulletinitPlace() ;
      this.shooter.ctx.fillStyle = "#FF0000";
      this.shooter.ctx.fillRect(this.x, this.y, this.buletsize, this.buletsize );
      this.xNew = this.x;
      this.yNew = this.y; 
  }
  // place where first bullet renderd ( need some work)
  bulletinitPlace() {
    if( this.dx > 0 && this.dy === 0) {
        this.x +=  48 + this.buletsize;
        this.y +=  10;  }
    if( this.dx < 0 && this.dy === 0) {
        this.y +=  10;
        this.x +=  - this.buletsize - 6;  }
    if( this.dx === 0 && this.dy > 0) {
        this.x +=  24;
        this.y +=  48 + this.buletsize;  }
    if( this.dx === 0 && this.dy < 0) {
        this.x +=  24;
        this.y -=  14; }
}

 //------------------ UPDATE section  ----------------------------------------
updateReDraw() {
    this.shooter.ctx.clearRect(this.x, this.y, this.buletsize, this.buletsize );
    this.x = this.xNew ;
    this.y =this.yNew ;
    this.shooter.ctx.fillRect(this.xNew,this.yNew , this.buletsize, this.buletsize );
 }

 updateReq() {
    if( this.deadOrAlive === 1) {
    requestAnimationFrame((e) => this.updateReq());
        this.update();
        this.dxPresent = this.dx;
        this.dyPresent = this.dy;
        this.bulletsCollWithMap();
        this.WallsAndBulletCollision();
        this.BulletToBulletCollision();
        }
}  

update() {
   this.xNew += this.dx ;
   this.yNew += this.dy ;
   this.updateReDraw();
}

//------------------------- collision--------------------------------------------

bulletsCollWithMap() {
        if (this.x < 0 + this.buletsize || this.x > this.shooter.game.CanvasWidth   - this.buletsize  ||
            this.y < 0 + this.buletsize || this.y > this.shooter.game.CanvasHight   - this.buletsize  ) {
                this.deadOrAlive = 0;
                this.shooter.ctx.clearRect(this.x, this.y, this.buletsize, this.buletsize ); 
            }
        }

 // bullets collison with walls ( reikai, kad index butu min 0 bug fix)
 WallsAndBulletCollision() {
    for( let i = 0; i <this.shooter.game.walls.allWalls.length; i++) {
        if (this.shooter.game.walls.allWalls[i].x        < this.xNew + this.buletsize &&
            this.shooter.game.walls.allWalls[i].x + 16    > this.xNew  &&
            this.shooter.game.walls.allWalls[i].y        <  this.yNew + this.buletsize &&
            this.shooter.game.walls.allWalls[i].y + 16    >  this.yNew )  {
                     this.deadOrAlive = 0;
                     this.shooter.ctx.clearRect(this.x, this.y, this.buletsize, this.buletsize );
                     if(this.shooter.game.walls.allWalls[i].t === 2) {
                         this.shooter.ctx.fillStyle = this.shooter.ctx.createPattern(this.img, 'repeat');
                        this.img.onload = this.shooter.ctx.fillRect(this.shooter.game.walls.allWalls[i].x, this.shooter.game.walls.allWalls[i].y, 16, 16 );
                        this.shooter.ctx.fillStyle = "#FF0000";
                    }
                     if(this.shooter.game.walls.allWalls[i].t === 1) {
                        this.shooter.ctx.clearRect(this.shooter.game.walls.allWalls[i].x, this.shooter.game.walls.allWalls[i].y, 16, 16 );
                             if(this.dxPresent === 0 ) {
                        this.shooter.ctx.clearRect(this.shooter.game.walls.allWalls[i].x + 16, this.shooter.game.walls.allWalls[i].y, 16, 16 );
                        this.shooter.ctx.clearRect(this.shooter.game.walls.allWalls[i].x - 16, this.shooter.game.walls.allWalls[i].y, 16, 16 );
                        let nowX = this.shooter.game.walls.allWalls[i].x;
                        let nowY = this.shooter.game.walls.allWalls[i].y;
                        this.shooter.game.walls.allWalls.splice(  this.shooter.game.walls.allWalls.findIndex(x => x.x === nowX && x.y === nowY )  , 1);
                        this.shooter.game.walls.allWalls.splice(  this.shooter.game.walls.allWalls.findIndex(x => x.x === nowX + 16 && x.y === nowY )  , 1);
                        this.shooter.game.walls.allWalls.splice(  this.shooter.game.walls.allWalls.findIndex(x => x.x === nowX - 16 && x.y === nowY )  , 1);
                        break;
                     }
                             if(this.dyPresent === 0) {
                        this.shooter.ctx.clearRect(this.shooter.game.walls.allWalls[i].x , this.shooter.game.walls.allWalls[i].y + 16, 16, 16 );
                        this.shooter.ctx.clearRect(this.shooter.game.walls.allWalls[i].x , this.shooter.game.walls.allWalls[i].y - 16, 16, 16 );
                        let nowX = this.shooter.game.walls.allWalls[i].x;
                        let nowY = this.shooter.game.walls.allWalls[i].y;
                        this.shooter.game.walls.allWalls.splice(  this.shooter.game.walls.allWalls.findIndex(x => x.x === nowX && x.y === nowY )  , 1);
                        this.shooter.game.walls.allWalls.splice(  this.shooter.game.walls.allWalls.findIndex(x => x.x === nowX  && x.y === nowY + 16)  , 1);
                        this.shooter.game.walls.allWalls.splice(  this.shooter.game.walls.allWalls.findIndex(x => x.x === nowX  && x.y === nowY - 16)  , 1);
                        break;
                      }
                    }
            }
}  
}  

// bullet to bullet collision 
BulletToBulletCollision() {
    
for( let j = 0 ; j < this.shooter.game.allBullets.length; j++) {
    if(this.shooter.game.allBullets[j] !== this) {
       if (this.shooter.game.allBullets[j].x        < this.x + this.buletsize &&
        this.shooter.game.allBullets[j].x + this.buletsize    > this.x  &&
        this.shooter.game.allBullets[j].y        <  this.y + this.buletsize &&
        this.shooter.game.allBullets[j].y + this.buletsize    >  this.y )  {
            this.shooter.ctx.clearRect(this.shooter.game.allBullets[j].x , this.shooter.game.allBullets[j].y , this.buletsize, this.buletsize );
            this.shooter.game.allBullets[j].deadOrAlive = 0;
            this.shooter.ctx.clearRect(this.x , this.y , this.buletsize, this.buletsize );
            this.deadOrAlive = 0;
            break;
        } 
    }
    }
}





    }


  // neatnaujinta  -----------------------------------------------------------------

// ShootingEnemy(){
//     if( this.shooter.bulletArr.indexOf(this) > 0 ) {
      

//         for(let i = 0 ; i <  this.enemyArray.length; i++ ) {
//             if (this.x < this.enemyArray[i].newX + 48 &&
//                 this.x + this.buletsize > this.enemyArray[i].x &&
//                 this.y < this.enemyArray[i].newY + 48 &&
//                 this.y + this.buletsize> this.enemyArray[i].y) {
//                     this.shooter.bulletArr.splice(this.shooter.bulletArr[i]  , 1);
//                     this.shooter.ctx.clearRect(this.x, this.y, this.buletsize, this.buletsize );
//                     this.deadOrAlive = 0;
//                     this.enemyArray.splice(this.enemyArray[i], 1 );
//                     this.enemyArray[i].alive = 0;
//                     this.shooter.ctx.clearRect(this.enemyArray[i].y, this.enemyArray[i].x, 48, 48 );
//         }

//     }
// }
// }
// }


//     BulletsCollsion() {
//         for(let i = 0 ; i < this.shooter.bulletArr.length; i++ ) {
//             if(this.shooter.bulletArr[i] !== this ) {
//                 if (this.x < this.shooter.bulletArr[i].x + this.buletsize &&
//                     this.x + this.buletsize > this.shooter.bulletArr[i].x &&
//                     this.y < this.shooter.bulletArr[i].y + this.buletsize &&
//                     this.y+ this.buletsize> this.shooter.bulletArr[i].y) {
                        
//                             this.shooter.bulletArr[i].deadOrAlive = 0;
//                             this.shooter.ctx.clearRect(this.shooter.bulletArr[i].x, this.shooter.bulletArr[i].y, this.buletsize, this.buletsize );
//                             this.shooter.bulletArr.splice(this.shooter.bulletArr[i]  , 1);
//                             this.shooter.ctx.clearRect(this.x, this.y, this.buletsize, this.buletsize );
//                             this.deadOrAlive = 0;
//                             this.shooter.bulletArr.splice( this.shooter.bulletArr.indexOf(this) , 1);
//                             if(this.enemyBullets.indexOf(this) >= 0)
//                             this.shooter.bulletArr.splice( this.enemyBullets.indexOf(this) , 1);
//                     }
//             }
//         } 
        
//         for(let i = 0 ; i < this.enemyBullets.length; i++ ) {
           
//             if (this.x < this.enemyBullets[i].x + this.buletsize &&
//                 this.x + this.buletsize > this.enemyBullets[i].x &&
//                 this.y < this.enemyBullets[i].y + this.buletsize &&
//                 this.y+ this.buletsize> this.enemyBullets[i].y) {
                   
//                     this.enemyBullets[i].deadOrAlive = 0;
//                     this.shooter.ctx.clearRect(this.enemyBullets[i].x, this.enemyBullets[i].y, this.buletsize, this.buletsize );
//                     this.shooter.bulletArr.splice(this.enemyBullets[i]  , 1);
//                     this.shooter.ctx.clearRect(this.x, this.y, this.buletsize, this.buletsize );
//                     this.deadOrAlive = 0;
//                     if(this.shooter.bulletArr.indexOf(this) >= 0) {
//                         this.shooter.bulletArr.splice( this.shooter.bulletArr.indexOf(this) , 1);
//                     }
                    
//                     if(this.enemyBullets.indexOf(this) >= 0)
//                     this.shooter.bulletArr.splice( this.enemyBullets.indexOf(this) , 1);
//             }
//         }
       
 
//     }
    
  

   

   
     

//     player1andBulletsCollision() {
//         for(let i = 0 ; i < this.shooter.bulletArr.length; i++ ) {
//             if (this.shooter.Player1x < this.shooter.bulletArr[i].x + this.buletsize &&
//                 this.shooter.Player1x + 48 > this.shooter.bulletArr[i].x &&
//                 this.shooter.Player1y < this.shooter.bulletArr[i].y + this.buletsize &&
//                 this.shooter.Player1y + 48 > this.shooter.bulletArr[i].y) {
//                     this.shooter.bulletArr[i].deadOrAlive = 0;
//                     this.shooter.ctx.clearRect(this.x, this.y, this.buletsize, this.buletsize );
//                     this.shooter.bulletArr.splice(this.shooter.bulletArr[i]  , 1);
//                     if(this.enemyBullets.indexOf(this) >= 0)
//                     this.shooter.bulletArr.splice( this.enemyBullets.indexOf(this) , 1);

            
                    
//              }
//         }
//       }

//       player2andBulletsCollision() {
//         for(let i = 0 ; i < this.shooter.bulletArr.length; i++ ) {
//             if (this.shooter.Player2x < this.shooter.bulletArr[i].x + this.buletsize &&
//                 this.shooter.Player2x + 48 > this.shooter.bulletArr[i].x &&
//                 this.shooter.Player2y < this.shooter.bulletArr[i].y + this.buletsize &&
//                 this.shooter.Player2y + 48 > this.shooter.bulletArr[i].y) {
//                     this.shooter.bulletArr[i].deadOrAlive = 0;
//                     this.shooter.ctx.clearRect(this.x, this.y, this.buletsize, this.buletsize );
//                     this.shooter.bulletArr.splice(this.shooter.bulletArr[i]  , 1);
//                     if(this.enemyBullets.indexOf(this) >= 0)
//                     this.shooter.bulletArr.splice( this.enemyBullets.indexOf(this) , 1);

            
                    
                    
//              }
//         }
//       }
    
    
    

 



//  WallsAndBulletAndBulletCollision() {
//     for( let i = 0; i < this.this.shooter.game.walls.allWalls.length; i++) {
//         if (this.this.shooter.game.walls.allWalls[i].x        < this.xNew + this.buletsize &&
//             this.this.shooter.game.walls.allWalls[i].x + 16    > this.xNew  &&
//             this.this.shooter.game.walls.allWalls[i].y        <  this.yNew + this.buletsize &&
//             this.this.shooter.game.walls.allWalls[i].y + 16    >  this.yNew )  {
//                      this.deadOrAlive = 0;
//                      this.shooter.ctx.clearRect(this.x, this.y, this.buletsize, this.buletsize );
//                      this.shooter.bulletArr.splice(this  , 1);
//                      if(this.enemyBullets.indexOf(this) >= 0)
//                     this.shooter.bulletArr.splice( this.enemyBullets.indexOf(this) , 1);

            
                     
//                      if(this.this.shooter.game.walls.allWalls[i].t === 2) {
                         
//                          this.shooter.ctx.fillStyle = this.shooter.ctx.createPattern(this.img, 'repeat');
//                         this.shooter.ctx.fillRect(this.this.shooter.game.walls.allWalls[i].x, this.this.shooter.game.walls.allWalls[i].y, 16, 16 );
//                         this.shooter.ctx.fillStyle = "#FF0000";
//                         if(this.enemyBullets.indexOf(this) >= 0)
//                     this.shooter.bulletArr.splice( this.enemyBullets.indexOf(this) , 1);

            
//                     }

//                      if(this.this.shooter.game.walls.allWalls[i].t === 1) {
//                         this.shooter.ctx.clearRect(this.this.shooter.game.walls.allWalls[i].x, this.this.shooter.game.walls.allWalls[i].y, 16, 16 );
//                      if(this.dxPresent === 0 ) {
//                         this.shooter.ctx.clearRect(this.this.shooter.game.walls.allWalls[i].x + 16, this.this.shooter.game.walls.allWalls[i].y, 16, 16 );
//                         this.shooter.ctx.clearRect(this.this.shooter.game.walls.allWalls[i].x - 16, this.this.shooter.game.walls.allWalls[i].y, 16, 16 );
//                         let nowX = this.this.shooter.game.walls.allWalls[i].x;
//                         let nowY = this.this.shooter.game.walls.allWalls[i].y;
//                         this.this.shooter.game.walls.allWalls.splice(  this.this.shooter.game.walls.allWalls.findIndex(x => x.x === nowX && x.y === nowY )  , 1);
//                         this.this.shooter.game.walls.allWalls.splice(  this.this.shooter.game.walls.allWalls.findIndex(x => x.x === nowX + 16 && x.y === nowY )  , 1);
//                         this.this.shooter.game.walls.allWalls.splice(  this.this.shooter.game.walls.allWalls.findIndex(x => x.x === nowX - 16 && x.y === nowY )  , 1);
//                         break;
//                      }
//                      if(this.dyPresent === 0) {
//                         this.shooter.ctx.clearRect(this.this.shooter.game.walls.allWalls[i].x , this.this.shooter.game.walls.allWalls[i].y + 16, 16, 16 );
//                         this.shooter.ctx.clearRect(this.this.shooter.game.walls.allWalls[i].x , this.this.shooter.game.walls.allWalls[i].y - 16, 16, 16 );
//                         let nowX = this.this.shooter.game.walls.allWalls[i].x;
//                         let nowY = this.this.shooter.game.walls.allWalls[i].y;
//                         this.this.shooter.game.walls.allWalls.splice(  this.this.shooter.game.walls.allWalls.findIndex(x => x.x === nowX && x.y === nowY )  , 1);
//                         this.this.shooter.game.walls.allWalls.splice(  this.this.shooter.game.walls.allWalls.findIndex(x => x.x === nowX  && x.y === nowY + 16)  , 1);
//                         this.this.shooter.game.walls.allWalls.splice(  this.this.shooter.game.walls.allWalls.findIndex(x => x.x === nowX  && x.y === nowY - 16)  , 1);
//                         break;
//                       }
//                     }
//             }
// }  
// }  


