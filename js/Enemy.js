import Bullet from './bullets.js';

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
        this.c  = game.c;
        this.ctx = game.ctx;
        this.bulletx = 0;
        this.bullety = 0;
        this.bulletArr = [];
        this.alive = 1;
        this.deadOrAlive = 1;
        this.imgFrieza = document.querySelector('.frieza');
        this.imgCell = document.querySelector('.cell');
        this.imgbuu = document.querySelector('.buu');
        this.imgbuu.onload =  this.RenderEnemy();

        this.updateReq();
        this.DirectionGenerator();
        setInterval(() => this.DirectionGenerator(), 3000);
        setInterval(() => this.BulletGenerator(), 3000);
 
    }
     //   -------------------enemy render ----------------
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

     // --------------- BOT movment derection generator --------------------
    DirectionGenerator() {
        if(this.deadOrAlive === 1 && this.game.gameOutCome === 0) {
        switch(Math.ceil(Math.random() * 4)) {
            case 1:
              this.dx = 0;
              this.dy = 1;
              this.bulletx = 0;
              this.bullety = 8;
              break;
          case 2:
              this.dx = 0;
              this.dy = - 1;
              this.bulletx = 0;
              this.bullety = -8;
              break;
          case 3:
              this.dx =  1;
              this.dy = 0;
              this.bulletx = 8;
              this.bullety = 0;
              break;
          case 4:
              this.dx = - 1;
              this.dy = 0;
              this.bulletx = -8;
               this.bullety = 0;
              break;
        }
  }
}

  // ----------------update section ---------------------------

    updateReq() {
        
            if(this.deadOrAlive === 1 && this.game.gameOutCome === 0) {
            requestAnimationFrame((e) => this.updateReq());
            this.update();
            }
        }
      
        update() {
            
            this.newX += this.dx;
            this.newY += this.dy;
            this.stayInMap();
            this.hittingWall();
            this.updateReDraw();
            this.updateBulletArr();
            this.enemyAndEnemyBullets();
            this.hittingPlayer1();
            if(this.game.playerNumb === 2) {
                this.hittingPlayer2() 
        }
            this.EnemyDead();
        }
    
        updateReDraw() {
            
            this.game.ctx.clearRect(this.x, this.y, 48, 48 );
            this.x = this.newX;
             this.y = this.newY;
             if( this.type === 1) {
                this.game.ctx.drawImage(this.imgFrieza, this.newX , this.newY, 48, 48); }
            if( this.type === 2) {
                this.game.ctx.drawImage(this.imgCell, this.newX , this.newY, 48, 48);}
            if( this.type === 3) {
                this.game.ctx.drawImage(this.imgbuu, this.newX , this.newY, 48, 48);}
        
    }

        // removes bullet if it left canvas.
        updateBulletArr() {
            for(let i = 0 ; i < this.bulletArr.length ; i++) {
                if(this.bulletArr[i].deadOrAlive === 0) {
                    this.bulletArr.splice(this.bulletArr[i]);
                    break;}
            }
        }

        // make enemys stay in Canvas

        stayInMap() {
            if (this.newY < 0) {
                 this.newY += Math.abs(this.dy)
                this.DirectionGenerator();}
            if (this.newY > this.game.CanvasHeight - 48) {
                 this.newY = this.game.CanvasHeight - 48;
                 this.DirectionGenerator();}
            if(this.newX > this.game.CanvasWidth - 48) {
                 this.newX = this.game.CanvasWidth - 48;
                 this.DirectionGenerator();}
            if(this.newX  < 0 ) { this.newX = 0;
                this.DirectionGenerator();}
              }
          

        
        // bullet generator - need some work
        BulletGenerator( ) {
            if(this.bulletArr.length < 1) {
            if(this.deadOrAlive === 1 && this.game.gameOutCome === 0) {
            switch(Math.ceil(Math.random() * 4)) {
              case 1:
                    this.bulletArr.push(new Bullet(this.x , this.y, this.bulletx , this.bullety , this )) ;
                  break;
              case 2:
                   this.bulletArr.push(new Bullet(this.x , this.y, this.bulletx , this.bullety , this )) ;
                   this.DirectionGenerator();
                  break;
              case 3:
                  this.bulletArr.push(new Bullet(this.x , this.y, this.bulletx , this.bullety , this )) ;
                  break;
              case 4:
                   this.bulletArr.push(new Bullet(this.x , this.y, this.bulletx , this.bullety , this )) ;
                  break;
            }
      }
    }
    }

      // ---------------------- Wall Collison -------------------------------------

      WallsCollision() {
        this.collision= [];
        for(let i =0; i < this.game.walls.allWalls.length; i++) {
                let dx=(this.x + 47 /2)-(this.game.walls.allWalls[i].x + 16/2);
                let dy=(this.y + 47 /2) -  (this.game.walls.allWalls[i].y + 16 /2);
                let width=(44 + 16) /  2;
                let height=(44 + 16) / 2;
                let crossWidth=width*dy;
                let crossHeight=height*dx;
                if(Math.abs(dx)<=width && Math.abs(dy)<=height){
                    if(crossWidth>crossHeight){
                        this.collision.push((crossWidth>(-crossHeight))?1:2);
                    }else{
                        this.collision.push((crossWidth>-(crossHeight))? this.game.walls.allWalls[i].x +16  : 4);
                    }  
                 }
        }
        return this.collision;
 }
    SideColision(array) {
        for( let i = 0 ; i < array.length; i++) {
            if ( array[i] > 4) {
                return array[i]; }
        }
        return 3;  
    }
    hittingWall() {
        if(this.WallsCollision().includes(1)) { 
           this.newY += Math.abs(this.dy);
           this.dy= 0;
           
          
        }
        if(this.WallsCollision().includes(4)) {
           this.newY -= this.dy;
           this.dy= 0;
           
           
        }
        if(this.WallsCollision().includes(2)) {
           this.newX -= this.dx;
           this.dx= 0;
           
           
        }
        if(  this.SideColision(this.WallsCollision() ) > 4 ) {
            this.newX = this.SideColision(this.WallsCollision());
            this.dx= 0;
           
        }
    }

    // ...................this. enemy and player1 collsion  ......................................
    CollisionWithPlayer1() {
        this.collision= [];
                let dx=(this.x + 48 /2)-(this.game.player1.x + 48/2);
                let dy=(this.y + 48 /2) -  (this.game.player1.y + 48 /2);
                let width=(48 + 48) /  2;
                let height=(48 + 48) / 2;
                let crossWidth=width*dy;
                let crossHeight=height*dx;
                if(Math.abs(dx)<=width && Math.abs(dy)<=height){
                    this.DirectionGenerator();
                    if(crossWidth>crossHeight){
                        this.collision.push((crossWidth>(-crossHeight))?1:2);
                    }else{
                        this.collision.push((crossWidth>-(crossHeight))? this.game.player1.x +16  : 4);
                    }  
                 }
        return this.collision;
 }
 hittingPlayer1() {
    if(this.CollisionWithPlayer1().includes(1)) { 
       this.newY += Math.abs(this.dy);
    }
    if(this.CollisionWithPlayer1().includes(4)) {
       this.newY -= this.dy;
    }
    if(this.CollisionWithPlayer1().includes(2)) {
       this.newX -= this.dx;
    }
    if(  this.SideColision(this.CollisionWithPlayer1() ) > 4 ) {
        this.newX = this.SideColision(this.CollisionWithPlayer1());
    }
}




// ...................this. enemy and player2 collsion  ......................................
CollisionWithPlayer2() {
    this.collision= [];
            let dx=(this.x + 48 /2)-(this.game.player2.x + 48/2);
            let dy=(this.y + 48 /2) -  (this.game.player2.y + 48 /2);
            let width=(48 + 48) /  2;
            let height=(48 + 48) / 2;
            let crossWidth=width*dy;
            let crossHeight=height*dx;
            if(Math.abs(dx)<=width && Math.abs(dy)<=height){
                this.DirectionGenerator();
                if(crossWidth>crossHeight){
                    this.collision.push((crossWidth>(-crossHeight))?1:2);
                }else{
                    this.collision.push((crossWidth>-(crossHeight))? this.game.player2.x +16  : 4);
                }  
             }
    return this.collision;
}
hittingPlayer2() {
if(this.CollisionWithPlayer2().includes(1)) { 
   this.newY += Math.abs(this.dy);
}
if(this.CollisionWithPlayer2().includes(4)) {
   this.newY -= this.dy;
}
if(this.CollisionWithPlayer2().includes(2)) {
   this.newX -= this.dx;
}
if(  this.SideColision(this.CollisionWithPlayer2() ) > 4 ) {
    this.newX = this.SideColision(this.CollisionWithPlayer2());
}
}
//................... enemy with enemy bullets collsion.............................

enemyAndEnemyBullets() { 
     
    for( let i = 0; i < this.game.enemyBulletsArray.length; i++) {
        if (this.game.enemyBulletsArray[i].x        < this.x + 48 &&
            this.game.enemyBulletsArray[i].x + 8   > this.x  &&
            this.game.enemyBulletsArray[i].y        <  this.y + 48 &&
            this.game.enemyBulletsArray[i].y + 8   >  this.y)  {
                            this.game.enemyBulletsArray[i].deadOrAlive = 0;
                            this.game.ctx.clearRect(this.game.enemyBulletsArray[i].x, this.game.enemyBulletsArray[i].y, 8, 8);
                            
                            

 }
    }



}


 // --------------------Enemy killed -----------------------

 EnemyDead() { 
     
    for( let i = 0; i < this.game.playersBulletsAr.length; i++) {
        if (this.game.playersBulletsAr[i].x        < this.x + 48 &&
            this.game.playersBulletsAr[i].x + 8   > this.x  &&
            this.game.playersBulletsAr[i].y        <  this.y + 48 &&
            this.game.playersBulletsAr[i].y + 8   >  this.y)  {
                            this.deadOrAlive = 0;
                            this.game.playersBulletsAr[i].deadOrAlive = 0;
                            this.game.ctx.clearRect(this.game.playersBulletsAr[i].x, this.game.playersBulletsAr[i].y, 8, 8);
                            this.game.ctx.clearRect(this.x, this.y, 48, 48);
                            

 }
    }



}
      
    
}   




 














