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
        this.bulletx = 0;
        this.bullety = 0;
        this.c  = game.c;
         this.ctx = game.ctx;
        this.bulletArr = [];
        this.wallArray = this.game.walls.wallArray;
        this.imgFrieza = document.querySelector('.frieza');
        this.imgCell = document.querySelector('.cell');
        this.imgbuu = document.querySelector('.buu');
        this.imgbuu.onload =  this.RenderEnemy();
        this.updateReq();
        this.DirectionGenerator();
        setInterval(() => this.DirectionGenerator(), 3000);
      //  setInterval(() => this.BulletGenerator(), 3000)
 
    }

    EnemyColisionWithWalls() {
        this.collision= [];
        
        for(let i =0; i < this.game.walls.wallArray.length; i++) {
                let dx=(this.x + 47 /2)-(this.game.walls.wallArray[i].x + 16/2);
                let dy=(this.y + 47 /2) -  (this.game.walls.wallArray[i].y + 16 /2);
                let width=(47 + 16) /  2;
                let height=(47 + 16) / 2;
                let crossWidth=width*dy;
                let crossHeight=height*dx;
                if(Math.abs(dx)<=width && Math.abs(dy)<=height){
                    if(crossWidth>crossHeight){
                        this.collision.push((crossWidth>(-crossHeight))?1:2);
                    }else{
                        this.collision.push((crossWidth>-(crossHeight))? this.game.walls.wallArray[i].x + 16  : 4);
                    }  
            }
}

return this.collision;
    }

//     BulletGenerator( ) {
//         switch(Math.ceil(Math.random() * 4)) {
//             case 1:
//                 this.bulletArr.push(new Bullet(this.x , this.y, this.bulletx , this.bullety , this ));
//               break;
//           case 2:
//             this.bulletArr.push(new Bullet(this.x , this.y, this.bulletx , this.bullety , this )) ;
//               break;
//           case 3:
//             this.bulletArr.push(new Bullet(this.x , this.y, this.bulletx , this.bullety , this )) ;
//               break;
//           case 4:
//             this.bulletArr.push(new Bullet(this.x , this.y, this.bulletx , this.bullety , this )) ;
//               break;
//         }
//   }


    

    DirectionGenerator() {
          switch(Math.ceil(Math.random() * 4)) {
              case 1:
                this.dx = 0;
                this.dy = 1;
                this.bulletx = 0;
                this.bullety = 4;
                break;
            case 2:
                this.dx = 0;
                this.dy = - 1;
                this.bulletx = 0;
                this.bullety = -4;
                break;
            case 3:
                this.dx =  1;
                this.dy = 0;
                this.bulletx = 4;
                this.bullety = 0;
                break;
            case 4:
                this.dx = - 1;
                this.dy = 0;
                this.bulletx = -4;
                 this.bullety = 0;
                break;
          }
    }


    updateReq() {
    requestAnimationFrame((e) => this.updateReq());
    this.update();
    
    
    
}  
        update() {
            
            
            
            this.newX += this.dx;
            this.newY += this.dy;
            this.stayInMap();
            this.hittingWall();
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
       this.newY = this.game.heightCanvas - 48;}

    if(this.newX > this.game.widthCanvas - 48) {
       this.newX = this.game.widthCanvas - 48;}

         if(this.newX  < 0 ) {
               this.newX = 0;}

    }

    SideColision(array) {
        for( let i = 0 ; i < array.length; i++) {
            if ( array[i] > 4) {
                return array[i];
            }
        }
        return 3;
        
    }
    hittingWall() {
        console.log(this.EnemyColisionWithWalls());
        console.log(this.EnemyColisionWithWalls().includes(1));
        console.log(this.EnemyColisionWithWalls().includes(4));
        console.log(this.EnemyColisionWithWalls().includes(2));
        console.log( this.SideColision(this.EnemyColisionWithWalls()));

        if(this.EnemyColisionWithWalls().includes(1)) {
            
           this.newY += Math.abs(this.dy);
           
        }
        if(this.EnemyColisionWithWalls().includes(4)) {
            
           this.newY -= this.dy;
        }


        if(this.EnemyColisionWithWalls().includes(2)) {
            
           this.newX -= this.dx;
        }
        
        if(  this.SideColision(this.EnemyColisionWithWalls())  > 4 ) {
            
            this.newX = this.SideColision(this.EnemyColisionWithWalls());
            console.log(this.newX);
            console.log(this.newY);
        }

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




