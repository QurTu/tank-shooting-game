export default class Bullet {
    /// reikai saudytoja kodrinaciu ir paskutines pasisukimo krypties. ir pacio zaidimo.
    constructor( shooterX, shootery, speedX, speedY, game ) {
        this.buletsize = 8 ;
        this.dx = speedX;
        this.dy = speedY;
        this.DeadorAlive = 1;
        this.bulletX = shooterX;
        this.bulletY = shootery;
        this.bulletXNew = null;
        this.bulletYNew = null;
        this.player = game;
        this.wallArray = this.player.wallArray;
        this.img = document.querySelector('.rock');
        
        this.img.onload =this.bulletRender() ;
        this.updateReq();
       
       
        
        
    }
    bulletRender(){
          this.bulletinitPlace() ;
        this.player.ctx.fillStyle = "#FF0000";
        this.player.ctx.fillRect(this.bulletX, this.bulletY, this.buletsize, this.buletsize );
        this.bulletXNew = this.bulletX;
        this.bulletYNew = this.bulletY; 
     }


   

    bulletinitPlace() {
        if( this.dx > 0 && this.dy === 0) {
            this.bulletX +=  48 + this.buletsize;
            this.bulletY +=  10;
        }
        if( this.dx < 0 && this.dy === 0) {
            this.bulletY +=  10;
            this.bulletX +=  - this.buletsize - 6;

        }
        if( this.dx === 0 && this.dy > 0) {
            this.bulletX +=  24;
            this.bulletY +=  48 + this.buletsize;
        }
        if( this.dx === 0 && this.dy < 0) {
            this.bulletX +=  24;
            this.bulletY -=  14;
        }

    }

    player1andBulletsCollision() {
        for(let i = 0 ; i < this.player.bulletArr.length; i++ ) {
            if (this.player.Player1x < this.player.bulletArr[i].bulletX + this.buletsize &&
                this.player.Player1x + 48 > this.player.bulletArr[i].bulletX &&
                this.player.Player1y < this.player.bulletArr[i].bulletY + this.buletsize &&
                this.player.Player1y + 48 > this.player.bulletArr[i].bulletY) {
                    this.player.bulletArr[i].DeadorAlive = 0;
                    this.player.ctx.clearRect(this.bulletX, this.bulletY, this.buletsize, this.buletsize );
                    this.player.bulletArr.splice(this.player.bulletArr[i]  , 1);
             }
        }
      }

      player2andBulletsCollision() {
        for(let i = 0 ; i < this.player.bulletArr.length; i++ ) {
            if (this.player.Player2x < this.player.bulletArr[i].bulletX + this.buletsize &&
                this.player.Player2x + 48 > this.player.bulletArr[i].bulletX &&
                this.player.Player2y < this.player.bulletArr[i].bulletY + this.buletsize &&
                this.player.Player2y + 48 > this.player.bulletArr[i].bulletY) {
                    this.player.bulletArr[i].DeadorAlive = 0;
                    this.player.ctx.clearRect(this.bulletX, this.bulletY, this.buletsize, this.buletsize );
                    this.player.bulletArr.splice(this.player.bulletArr[i]  , 1);
                    
                    
             }
        }
      }
    
      bulletsCollWithMap() {
        for(let i = 0 ; i < this.player.bulletArr.length; i++ )  {
            if (this.player.bulletArr[i].bulletX < 0 + this.buletsize || this.player.bulletArr[i].bulletX > 816 - this.buletsize  ||
                this.player.bulletArr[i].bulletY < 0 + this.buletsize || this.player.bulletArr[i].bulletY > 624  - this.buletsize  ) {
                    this.player.bulletArr[i].DeadorAlive = 0;
                    this.player.ctx.clearRect(this.bulletX, this.bulletY, this.buletsize, this.buletsize );
                    this.player.bulletArr.splice(this.player.bulletArr[i]  , 1); 
                }

            }
      }
    

 updateReq() {
     if( this.DeadorAlive === 1) {
     requestAnimationFrame((e) => this.updateReq());
     this.update();
    this.player1andBulletsCollision();
    this.player2andBulletsCollision();
     this.bulletsCollWithMap();

     }

 }  

 update() {
    
    this.bulletXNew += this.dx ;
    this.bulletYNew += this.dy ;
    this.dxPresent = this.dx;
    this.dyPresent = this.dy;
    this.updateReDraw();
    this.WallsAndBulletAndBulletCollision() 
   


 }

 WallsAndBulletAndBulletCollision() {
    for( let i = 0; i < this.wallArray.length; i++) {
        if (this.wallArray[i].x        < this.bulletXNew + this.buletsize &&
            this.wallArray[i].x + 16    > this.bulletXNew  &&
            this.wallArray[i].y        <  this.bulletYNew + this.buletsize &&
            this.wallArray[i].y + 16    >  this.bulletYNew )  {
                     this.DeadorAlive = 0;
                     this.player.ctx.clearRect(this.bulletX, this.bulletY, this.buletsize, this.buletsize );
                     this.player.bulletArr.splice(this  , 1);
                     
                     if(this.wallArray[i].t === 2) {
                         console.log('veikiu');
                         this.player.ctx.fillStyle = this.player.ctx.createPattern(this.img, 'repeat');
                        this.player.ctx.fillRect(this.wallArray[i].x, this.wallArray[i].y, 16, 16 );
                        this.player.ctx.fillStyle = "#FF0000";
                    }

                     if(this.wallArray[i].t === 1) {
                        this.player.ctx.clearRect(this.wallArray[i].x, this.wallArray[i].y, 16, 16 );
                     if(this.dxPresent === 0 ) {
                        this.player.ctx.clearRect(this.wallArray[i].x + 16, this.wallArray[i].y, 16, 16 );
                        this.player.ctx.clearRect(this.wallArray[i].x - 16, this.wallArray[i].y, 16, 16 );
                        let nowX = this.wallArray[i].x;
                        let nowY = this.wallArray[i].y;
                        this.wallArray.splice(  this.wallArray.findIndex(x => x.x === nowX && x.y === nowY )  , 1);
                        this.wallArray.splice(  this.wallArray.findIndex(x => x.x === nowX + 16 && x.y === nowY )  , 1);
                        this.wallArray.splice(  this.wallArray.findIndex(x => x.x === nowX - 16 && x.y === nowY )  , 1);
                        break;
                     }
                     if(this.dyPresent === 0) {
                        this.player.ctx.clearRect(this.wallArray[i].x , this.wallArray[i].y + 16, 16, 16 );
                        this.player.ctx.clearRect(this.wallArray[i].x , this.wallArray[i].y - 16, 16, 16 );
                        let nowX = this.wallArray[i].x;
                        let nowY = this.wallArray[i].y;
                        this.wallArray.splice(  this.wallArray.findIndex(x => x.x === nowX && x.y === nowY )  , 1);
                        this.wallArray.splice(  this.wallArray.findIndex(x => x.x === nowX  && x.y === nowY + 16)  , 1);
                        this.wallArray.splice(  this.wallArray.findIndex(x => x.x === nowX  && x.y === nowY - 16)  , 1);
                        break;
                      }
                    }
            }
}  
}  


 updateReDraw() {
    //player1
    this.player.ctx.clearRect(this.bulletX, this.bulletY, this.buletsize, this.buletsize );
    this.bulletX = this.bulletXNew ;
    this.bulletY =this.bulletYNew ;
    this.player.ctx.fillRect(this.bulletXNew,this.bulletYNew , this.buletsize, this.buletsize );
    
 }


}