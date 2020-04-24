import Canvas from './Canvas.js';
import  Earth from './Earth.js';
import  Walls from './Walls.js';
import Player from './Player.js';
import Enemy from './Enemy.js';
import Controls from './Controls.js';
import Score from './Score.js';

 export default class Game  {
    constructor( level, playerNumb) {
        this.level = level;
        this.c = null ;
        this.ctx = null;
        this.CanvasWidth = 816;
        this.CanvasHeight = 624;
        this.playerNumb = playerNumb;
        this.walls;
        this.earth;
        this.player1;
        this.player2;
        this.EnemyArray = [];
        this.vawe = 3;
        this.allBullets = [];
        this.enemyBulletsArray = [];
        this.playersBulletsAr = [];
        this.shortArray = [];
        this.gameOutCome = 0;
        this.controls ;
        this.backMusic = document.querySelector('.background');
        this.backMusic.loop = true;
         this.backMusic.volume = 0.01;
         this.music = 1;
        
 
       this.renderGame();
       setInterval(() => this.RenderEnemys(), 100);
       this.updateReq();
       
    } 
   
    // -----------------render game and objects-----------------------------
    renderGame() {
        this.renderCanvas();
        this.earth = new Earth(this);
        this.walls = new Walls(this);
        this.controls = new Controls(this.playerNumb);
        this.ScoreBoard = new Score(this);
        this.initPlayers();
        this.RenderEnemys();
        if( this.music === 1) {
            this.backMusic.play();
           }
    }

    renderCanvas() {
        this.canvas = new Canvas(this);
        this.c = this.canvas.c ;
        this.ctx = this.canvas.ctx;
        
    }
    initPlayers() {
        if (this.playerNumb === 1){
            this.player1 = new Player( 1, this);
        }
        if (this.playerNumb === 2){
            this.player1 = new Player( 1 , this);
            this.player2 = new Player(  2 , this);
        }
    }

  
//  ------------------------ENEMYS----------------------------------------
RenderEnemys() {
         this.RenderWaveOfenemys();
}
RenderWaveOfenemys()  {
    if (this.vawe >  0) {
        this.EnemyArray.push(  new Enemy (0, 0, Math.ceil(Math.random()*3), this ) ) ; 
        this.EnemyArray.push(new Enemy  (this.CanvasWidth / 2 - 24 , 0, Math.ceil(Math.random()*3), this ) ) ; 
        this.EnemyArray.push( new Enemy (this.CanvasWidth - 48 , 0, Math.ceil(Math.random()*3), this ) ) ; 
        this.vawe--;
    }
}

 // check if enemys are dead and remove from array
 AreTheyDead() {
    for( let i= 0 ; i < this.EnemyArray.length ; i++) {
        if(this.EnemyArray[i].deadOrAlive === 0) { 
            document.querySelector('.enemyleft ').innerHTML -= 1;
            this.EnemyArray.splice(i, 1);
            break;
        }
       
    }
        
    }
    



// -----------------------collision detection------------------------------

updateReq() {
     if(this.gameOutCome === 0) {
        requestAnimationFrame((e) => this.updateReq());
        this.enemyBullets() ;
            this.playersBullets();
            this.AreTheyDead();
            this.CanRespaw();
            this.gameWon();
            
        if(this.playerNumb == 2) {
            this.PlayerWithTeamBullets( );
        }
        
    }
}
// player with teammate bullets collsion
   PlayerWithTeamBullets( ) {
    for( let j = 0 ; j < this.player2.bulletArr.length ; j++) {
        if (this.player2.bulletArr[j].x        < this.player1.x + 48 &&
            this.player2.bulletArr[j].x + 16    > this.player1.x  &&
            this.player2.bulletArr[j].y        <  this.player1.y + 48 &&
            this.player2.bulletArr[j].y + 16    >  this.player1.y )  {
                this.ctx.clearRect(this.player2.bulletArr[j].x , this.player2.bulletArr[j].y , 8, 8 );
                this.player2.bulletArr[j].deadOrAlive = 0;
                break;
            }
 }
         for( let i = 0 ; i < this.player1.bulletArr.length ; i++) {
            if (this.player1.bulletArr[i].x        < this.player2.x + 48 &&
                this.player1.bulletArr[i].x + 16    > this.player2.x  &&
                this.player1.bulletArr[i].y        <  this.player2.y + 48 &&
                this.player1.bulletArr[i].y + 16    >  this.player2.y )  {
                    this.ctx.clearRect(this.player1.bulletArr[i].x , this.player1.bulletArr[i].y , 8, 8 );
                    this.player1.bulletArr[i].deadOrAlive = 0;
                    break;
                }
   }
}





///...............bulllet array reffresh...............................

// bullets arrays 
enemyBullets() {
    this.shortArray = [] ;  
    for( let i = 0 ; i < this.EnemyArray.length; i++) {
         this.a = this.EnemyArray[i].bulletArr;
         this.shortArray = this.shortArray.concat(this.a);}
    this.enemyBulletsArray = this.shortArray;  
}
playersBullets() {
    if(this.playerNumb === 1) {
        this.playersBulletsAr = this.player1.bulletArr;
    }
    if(this.playerNumb === 2) {
    this.playersBulletsAr = this.player2.bulletArr.concat(this.player1.bulletArr);
    }
    this.allBullets = this.playersBulletsAr.concat(this.enemyBulletsArray);
}


//......................... Game over or  Victory .....................

//can respawn player? or game over
CanRespaw() {
    if(this.player1.deadOrAlive === 0) {
        if(this.player1.hp > 0) {
            this.player1.deadOrAlive = 1;
            setTimeout( this.player1.spawnPlayer() , 3000);
            this.player1.hp -= 1;}
    }
    
    if(this.playerNumb === 2) {
        if(this.player2.deadOrAlive === 0) {
            if(this.player2.hp > 0) {
                setTimeout( this.player2.spawnPlayer2() , 3000);
                this.player2.deadOrAlive = 1;
                this.player2.hp -= 1;}
        }
    }6
    this.gameOver();
}
// if player dead? gameOver
gameOver() {
    if(this.playerNumb ===  1) {
        if(this.player1.hp === 0) {
            this.gameOutCome = -1;
            this.backMusic.pause();
        }
            
           
    }
    if(this.playerNumb ===  2) {
        if(this.player1.hp === 0 && this.player2.hp === 0) {
            this.gameOutCome = -1;}
        }
}
// all enemys are killed
gameWon() {
    if(this.vawe === 0 && this.EnemyArray.length === 0) {
        this.gameOutCome = 1;
    }
}
    






}


    



