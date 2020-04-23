import Bullet from './bullets.js';

export default class Player {
    constructor( player ,game){
         this.c  = game.c;
         this.ctx = game.ctx;
         this.img1 = document.querySelector(".player1");
         this.img2 = document.querySelector(".player2");
         this.height = 48;
         this.width = 48;
         this.playerNumb = player;
         this.game = game;
         this.x = 0;
         this.y = 0;
         this.playerPozition = {};
         this.pressedKeys = [];
         this.dx = 0;
         this.dy = -1 ;
         this.dx = 0;
         this.dy = -1 ;
         this.dMax = 4;
         this.dMin = -4;
         this.d0 = 0;
         this.hp = 2 ;

         this.kamehame = new Audio('../sound/kamehame.mp3');
         this.move = new Audio('../sound/move.mp3');
         
         this.deadOrAlive = 1;
         this.bulletArr = []; 
         this.firstSpawn() ;
         this.eventLisiner();
         this.updateReq();
         
         
        
    }

    // ------------------------SPAWNING PLAYER ----------------------------
  // first spawn
    firstSpawn() {
        this.spawnPlayer(); 
          if( this.playerNumb === 2)    {
               this.spawnPlayer2();
            }
          
    }
  // spawning player1
  spawnPlayer() { 
    this.player1Place();
    this.img1.onload = this.ctx.drawImage( this.img1 , this.x , this.y, this.height, this.width);
    this.playerPozition = { x:this.x, y:this.y };
}

        player1Place() {
            this.x = 48 *5 ;
            this.y = this.game.CanvasHeight - this.height ;
        }



 // spawning player2
   spawnPlayer2() {
        this.player2Place();
        this.img2.onload = this.ctx.drawImage( this.img2 , this.x , this.y, this.height, this.width);
        this.playerPosition = { x:this.x, y:this.y }; 
    }
            player2Place() {
            this.x = 48 *11 ;
            this.y = this.game.CanvasHeight - this.height ;
            }





// ---------------Event lisiner ----------------------

     // key unpressed.
    keyUp(e) {
        this.pressedKeys[e.keyCode] = false;
        this.move.pause();
    }
    eventLisiner() {
        if(this.deadOrAlive === 1 && this.game.gameOutCome === 0) {
        window.addEventListener('keydown' , (e)  => this.update(e), false);
        window.addEventListener('keyup', (e) => this.keyUp(e), false);
   }
}
 
   

   // ------------ redraw after moving-----------------------------
   
updateDraw() {
    if(this.deadOrAlive === 1 && this.game.gameOutCome === 0) {
    //player1
    if(this.playerNumb === 1) {
    this.ctx.clearRect(this.playerPozition.x, this.playerPozition.y, this.width, this.width);
    this.img1.onload = this.ctx.drawImage( this.img1 , this.x , this.y, this.height, this.width);
    this.playerPozition = { x:this.x, y:this.y };   }
    //player2
    if(this.playerNumb === 2)
    {
    this.ctx.clearRect(this.playerPosition.x, this.playerPosition.y, this.width, this.width);
    this.img2.onload = this.ctx.drawImage( this.img2 , this.x , this.y, this.height, this.width);
    this.playerPosition = { x:this.x, y:this.y };  
    } 
}
}
    // update bulletArray
    updateReq() {
        if(this.deadOrAlive === 1 && this.game.gameOutCome === 0) {
            requestAnimationFrame((e) => this.updateReq());
            this.updateBulletArr() ;
            this.PlayerAndEnemyBullets();
        }
    }  
    updateBulletArr() {
        for(let i = 0 ; i < this.bulletArr.length ; i++) {
            if(this.bulletArr[i].deadOrAlive === 0) {
                this.bulletArr.splice(this.bulletArr[i]);
                break;}
        }
    }


    // ------------------------ PLayer 1 movments --------------------------
    
   update(e) {
    
       this.pressedKeys[e.keyCode] = true;
       
   

       if(this.deadOrAlive === 1 && this.game.gameOutCome === 0) {
       //shooting
      if( this.playerNumb === 1)  {
         if (this.pressedKeys[32]) {
             if(this.bulletArr < 1) {
             this.bulletArr.push( new Bullet(this.x , this.y, this.dx , this.dy , this ));
             this.kamehame.play();
            } 
         }
            //move up
    if (this.pressedKeys[87]) {
        this.move.play();
        this.dx = this.d0;
        this.dy = this.dMin;
        this.y -= 6; 
        if (this.y < 0  || this.playerAndEnemyCollision().includes(1) )  {
            this.y += 6; }
            for(let i = 0 ; i < this.playerAndWallsCollision().length; i++ ) {
                
                if(this.playerAndWallsCollision()[i].side === 1) {
                    this.y = this.playerAndWallsCollision()[i].place   ;
                }
            }
        this.updateDraw();}

            //move down
    if (this.pressedKeys[83]) {
        this.move.play();
        this.dx = this.d0;
        this.dy = this.dMax;
        this.y += 6;
        if (this.y > this.game.CanvasHeight - this.height || this.playerAndEnemyCollision().includes(4) ) {
            this.y -= 6;}
            for(let i = 0 ; i < this.playerAndWallsCollision().length; i++ ) {
                
                if(this.playerAndWallsCollision()[i].side === 4) {
                    this.y = this.playerAndWallsCollision()[i].place   ;
                }
            }
        this.updateDraw();}

       //   movie --->
    if ( this.pressedKeys[68]) {
        this.move.play();
        this.dx = this.dMax;
        this.dy = this.d0;
        this.x += 6;
        if( this.playerAndEnemyCollision().includes(2) ) {
            this.x -= 6;}
        if(this.x > this.game.CanvasWidth - this.width) {
            this.x = this.game.CanvasWidth - this.width;}
        for(let i = 0 ; i < this.playerAndWallsCollision().length; i++ ) {
            
            if(this.playerAndWallsCollision()[i].side === 2) {
                this.x = this.playerAndWallsCollision()[i].place   ;
            }
        }
        this.updateDraw();}

            //move <-----
    if ( this.pressedKeys[65]) {
        this.move.play();
        this.dx = this.dMin;
        this.dy = this.d0;
        this.x -= 6; 
        if(this.x < 0 ) {
            this.x = 0;}
        if(this.SideColision(this.playerAndEnemyCollision()) > 4 ) {
            this.x = this.SideColision(this.playerAndEnemyCollision())
            }
            for(let i = 0 ; i < this.playerAndWallsCollision().length; i++ ) {
 
                if(this.playerAndWallsCollision()[i].side === 3) {
                    this.x = this.playerAndWallsCollision()[i].place   ;
                }
            }


        
        this.updateDraw();}
        }
        }
    
        
    

// ------------------------ PLayer 2 movments --------------------------

     // player 2 shooting
     if(this.deadOrAlive === 1 && this.game.gameOutCome === 0) {
 if(this.playerNumb === 2) {
    if (this.pressedKeys[107]) {
        if(this.bulletArr < 1) {
        this.bulletArr.push( new Bullet(this.x , this.y, this.dx , this.dy , this ));
        this.kamehame.position = 0 
        this.kamehame.play();
        this.kamehame.position = 0 ;} 
        }
        //player2 up
    if ( this.pressedKeys[104]) {
        this.move.play();
        this.dx = this.d0;
        this.dy = this.dMin;
        this.y -= 6;
        if (this.y < 0 || this.playerAndEnemyCollision().includes(1)) {
            this.y += 6;}
            for(let i = 0 ; i < this.playerAndWallsCollision().length; i++ ) {
          
                if(this.playerAndWallsCollision()[i].side === 1) {
                    this.y = this.playerAndWallsCollision()[i].place   ;
                }
            }
        this.updateDraw(); }

            //player2 down
    if ( this.pressedKeys[101]) {
        this.move.play();
           this.dx = this.d0;
           this.dy = this.dMax;
            this.y += 6;
        if (this.y > this.game.CanvasHeight - this.height  ||
          this.playerAndEnemyCollision().includes(4)) {
            this.y -= 6;}
            for(let i = 0 ; i < this.playerAndWallsCollision().length; i++ ) {
         
                if(this.playerAndWallsCollision()[i].side === 4) {
                    this.y = this.playerAndWallsCollision()[i].place   ;
                }
            }
        this.updateDraw();
    }

            //player2 ---->
    if ( this.pressedKeys[102]) {
        this.move.play();
        this.dx = this.dMax;
        this.dy = this.d0;
        this.x += 6;
        if(this.x > this.game.CanvasWidth - this.width) {
            this.x = this.game.CanvasWidth - this.width;};
        if( this.playerAndEnemyCollision().includes(2)) {
            this.x -= 6;}
            for(let i = 0 ; i < this.playerAndWallsCollision().length; i++ ) {
              
                if(this.playerAndWallsCollision()[i].side === 2) {
                    this.x = this.playerAndWallsCollision()[i].place   ;
                }
            }
        this.updateDraw();}

            //player2  <----
    if ( this.pressedKeys[100]) {
        this.move.play();
        this.dx = this.dMin;
        this.dy = this.d0;
        this.x -= 6;
        if(this.x < 0 ) {
            this.x = 0;};  }
        if(this.SideColision(this.playerAndWallsCollision()) > 4 ) {
            this.x = this.SideColision(this.playerAndWallsCollision())
            }
            for(let i = 0 ; i < this.playerAndWallsCollision().length; i++ ) {
               
                if(this.playerAndWallsCollision()[i].side === 3) {
                    this.x = this.playerAndWallsCollision()[i].place   ;
                }
            }
        this.updateDraw();}
    }

    }

    ///-----------------------collisions---------------------------------------
// player and Walls collision
playerAndWallsCollision() {
    this.collision= [];
    for(let i =0; i < this.game.walls.allWalls.length; i++) {
            let dx=(this.x + 47 /2)-(this.game.walls.allWalls[i].x + 16/2);
            let dy=(this.y + 47 /2) -  (this.game.walls.allWalls[i].y + 16 /2);
            let width=(47 + 16) /  2;
            let height=(47 + 16) / 2;
            let crossWidth=width*dy;
            let crossHeight=height*dx;
            if(Math.abs(dx)<=width && Math.abs(dy)<=height){
                if(crossWidth>crossHeight){
                    this.collision.push((crossWidth>(-crossHeight))?{side:1 ,place:this.game.walls.allWalls[i].y + 16  }:{side:2 ,place:this.game.walls.allWalls[i].x - 48 });
                }else{
                    this.collision.push((crossWidth>-(crossHeight))? {side:3 ,place:this.game.walls.allWalls[i].x + 16 } : {side:4 ,place:this.game.walls.allWalls[i].y -48 });
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

// enemys can kill players
PlayerAndEnemyBullets() {  
    for( let i = 0; i < this.game.enemyBulletsArray.length; i++) {
        if (this.game.enemyBulletsArray[i].x        < this.x + 48 &&
            this.game.enemyBulletsArray[i].x + 8   > this.x  &&
            this.game.enemyBulletsArray[i].y        <  this.y + 48 &&
            this.game.enemyBulletsArray[i].y + 8   >  this.y)  {
                            this.game.enemyBulletsArray[i].deadOrAlive = 0;
                            this.game.ctx.clearRect(this.game.enemyBulletsArray[i].x, this.game.enemyBulletsArray[i].y, 8, 8);
                            this.deadOrAlive = 0;
                            this.game.ctx.clearRect(this.x, this.y, 48, 48);
 }
    }
}
// player and enemy collsion. cant go throw...
playerAndEnemyCollision() {
    this.collision= [];
    for(let i =0; i < this.game.EnemyArray.length; i++) {
            let dx=(this.x + 48 /2)-(this.game.EnemyArray[i].x + 48/2);
            let dy=(this.y + 48 /2) -  (this.game.EnemyArray[i].y + 48 /2);
            let width=(48 + 48) /  2;
            let height=(48 + 48) / 2;
            let crossWidth=width*dy;
            let crossHeight=height*dx;
            if(Math.abs(dx)<=width && Math.abs(dy)<=height){
                if(crossWidth>crossHeight){
                    this.collision.push((crossWidth>(-crossHeight))?1:2);
                }else{
                    this.collision.push((crossWidth>-(crossHeight))? this.game.EnemyArray[i].x +48  : 4);
                }  
             }
    }
    return this.collision;
}




}










        

    

//     // player1 to player2  collsion
//     PlayerColision() {
//             let dx=(this.x + 48 /2)-(this.x + 48/2);
//             let dy=(this.y + 48 /2) -  (this.y + 48 /2);
//             let width=(48 + 48) /  2;
//             let height=(48 + 48) / 2;
//             let crossWidth=width*dy;
//             let crossHeight=height*dx;
//             let collision= 0;
            
//             if(Math.abs(dx)<=width && Math.abs(dy)<=height){
//                 if(crossWidth>crossHeight){
//                     collision=(crossWidth>(-crossHeight))?1:2;
//                 }else{
//                     collision=(crossWidth>-(crossHeight))?3: 4;
//                 }
//             }
//             return(collision);  
//         } 
    

//    // player2 to player1  collsion
//     PlayerColision2() {
//             let dx=(this.x + 48 /2)-(this.x + 48 /2);
//             let dy=(this.y + 48 /2) -  (this.y + 48 /2);
//             let width=(48 + 48) /  2;
//             let height=(48 + 48) / 2;
//             let crossWidth=width*dy;
//             let crossHeight=height*dx;
//             let collision= 0;
            
//             if(Math.abs(dx)<=width && Math.abs(dy)<=height){
//                 if(crossWidth>crossHeight){
//                     collision=(crossWidth>(-crossHeight))?1:2;
//                 }else{
//                     collision=(crossWidth>-(crossHeight))?3: 4;
//                 }
//             }
//             return(collision);
//     }
    
 









