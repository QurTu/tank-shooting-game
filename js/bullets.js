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
        this.x +=  48 + 2;
        this.y +=  24;  }
    if( this.dx < 0 && this.dy === 0) {
        this.y +=  24;
        this.x +=  - 2 ;  }
    if( this.dx === 0 && this.dy > 0) {
        this.x +=  24;
        this.y +=  48 + 2;  }
    if( this.dx === 0 && this.dy < 0) {
        this.x +=  24;
        this.y -=  8; }
}

 //------------------ UPDATE section  ----------------------------------------
updateReDraw() {
    this.shooter.ctx.clearRect(this.x, this.y, this.buletsize, this.buletsize );
    this.x = this.xNew ;
    this.y =this.yNew ;
    this.shooter.ctx.fillRect(this.xNew,this.yNew , this.buletsize, this.buletsize );
 }

 updateReq() {
    if( this.deadOrAlive === 1 && this.shooter.game.gameOutCome === 0) {
    requestAnimationFrame((e) => this.updateReq());
        this.update();
        this.dxPresent = this.dx;
        this.dyPresent = this.dy;
        this.bulletsCollWithMap();
        this.WallsAndBulletCollision();
        this.BulletToBulletCollision();
        this.BulletCollisionWithEarth();
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
             this.y > 624|| this.y < 0 + this.buletsize  ) {
                this.deadOrAlive = 0;
                console.log('works');
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
                       
                         if(this.shooter.game.walls.allWalls.findIndex(x => x.x === nowX + 16 && x.y === nowY) > -1  ){
                        this.shooter.game.walls.allWalls.splice(  this.shooter.game.walls.allWalls.findIndex(x => x.x === nowX + 16 && x.y === nowY )  , 1);
                         }
                         if(this.shooter.game.walls.allWalls.findIndex(x => x.x === nowX - 16 && x.y === nowY) > -1  ){
                        this.shooter.game.walls.allWalls.splice(  this.shooter.game.walls.allWalls.findIndex(x => x.x === nowX - 16 && x.y === nowY )  , 1);
                         }
                        break;
                     }
                             if(this.dyPresent === 0) {
                        this.shooter.ctx.clearRect(this.shooter.game.walls.allWalls[i].x , this.shooter.game.walls.allWalls[i].y + 16, 16, 16 );
                        this.shooter.ctx.clearRect(this.shooter.game.walls.allWalls[i].x , this.shooter.game.walls.allWalls[i].y - 16, 16, 16 );
                        let nowX = this.shooter.game.walls.allWalls[i].x;
                        let nowY = this.shooter.game.walls.allWalls[i].y;
                        this.shooter.game.walls.allWalls.splice(  this.shooter.game.walls.allWalls.findIndex(x => x.x === nowX && x.y === nowY )  , 1);
                       
                        if(this.shooter.game.walls.allWalls.findIndex(x => x.x === nowX  && x.y === nowY + 16) > -1  ){
                        this.shooter.game.walls.allWalls.splice(  this.shooter.game.walls.allWalls.findIndex(x => x.x === nowX  && x.y === nowY + 16)  , 1);
                        }
                        if(this.shooter.game.walls.allWalls.findIndex(x => x.x === nowX  && x.y === nowY - 16) > -1  ){
                        this.shooter.game.walls.allWalls.splice(  this.shooter.game.walls.allWalls.findIndex(x => x.x === nowX  && x.y === nowY - 16)  , 1);
                        break;
                        }
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

BulletCollisionWithEarth() {
    
     
        
           if (this.shooter.game.earth.x        < this.x + this.buletsize &&
            this.shooter.game.earth.x + 48   > this.x  &&
            this.shooter.game.earth.y        <  this.y + this.buletsize &&
            this.shooter.game.earth.y + 48   >  this.y )  {
                this.shooter.ctx.clearRect(this.x , this.y , this.buletsize, this.buletsize );
                this.deadOrAlive = 0;
                this.shooter.game.gameOutCome = -1;
            } 
        }
        
    





    }


  // neatnaujinta  -----------------------------------------------------------------

