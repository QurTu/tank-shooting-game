import Bullet from './bullets.js';

export default class Player {
    constructor(playerNumber , game){
         this.playerNumber = playerNumber;
         this.game = game;
         this.playerHeight = 48;
         this.playerWidth = 48;
         this.Player1x = 0;
         this.Player1y = 0;
         this.Player2x = 0;
         this.Player2y =0;
         this.lastplayer1Position = {};
         this.lastplayer2Position = {}; 
         this.pressedKeys = [];

         this.bulletArr = []; 
         this.dx1 = 0;
         this.dy1 = -1 ;
         this.dx2 = 0;
         this.dy2 = -1 ;
         this.dMax = 4;
         this.dMin = -4;
         this.d0 = 0;
         this.wallArray = this.game.walls.wallArray;

         this.c  = game.c;
         this.ctx = game.ctx;
         this.img1 = document.querySelector(".player1");
         this.img2 = document.querySelector(".player2");
          this.spawnPlayer1();
          this.spawnPlayer2();
          this.eventliseners();
          



    }

    //player1 collsion with walls
    Player1ColisionWithWalls() {
        let collision= [];
        for(let i =0; i < this.game.walls.wallArray.length; i++) {
                let dx=(this.Player1x + 47 /2)-(this.game.walls.wallArray[i].x + 16/2);
                let dy=(this.Player1y + 47 /2) -  (this.game.walls.wallArray[i].y + 16 /2);
                let width=(47 + 16) /  2;
                let height=(47 + 16) / 2;
                let crossWidth=width*dy;
                let crossHeight=height*dx;
                if(Math.abs(dx)<=width && Math.abs(dy)<=height){
                    if(crossWidth>crossHeight){
                        collision.push((crossWidth>(-crossHeight))?1:2);
                    }else{
                        collision.push((crossWidth>-(crossHeight))? this.game.walls.wallArray[i].x +16  : 4);
                    }  
            }
}
return collision;
    }


    Player1ColisionWithWalls2() {
       let collision= [];
        for(let i =0; i < this.game.walls.wallArray.length; i++) {
                let dx=(this.Player2x + 47 /2)-(this.game.walls.wallArray[i].x + 16/2);
                let dy=(this.Player2y + 47 /2) -  (this.game.walls.wallArray[i].y + 16 /2);
                let width=(47 + 16) /  2;
                let height=(47 + 16) / 2;
                let crossWidth=width*dy;
                let crossHeight=height*dx;
                if(Math.abs(dx)<=width && Math.abs(dy)<=height){
                    if(crossWidth>crossHeight){
                        collision.push((crossWidth>(-crossHeight))?1:2);
                    }else{
                        collision.push((crossWidth>-(crossHeight))? this.game.walls.wallArray[i].x +16  : 4);
                    }  
            }
}
return collision;
    }



    SideColision(array) {
        for( let i = 0 ; i < array.length; i++) {
            if ( array[i] > 4) {
                return array[i];
            }
        }
        return 3;
        
    }
        

    

    // player1 to player2  collsion
    PlayerColision() {
            let dx=(this.Player1x + 48 /2)-(this.Player2x + 48/2);
            let dy=(this.Player1y + 48 /2) -  (this.Player2y + 48 /2);
            let width=(48 + 48) /  2;
            let height=(48 + 48) / 2;
            let crossWidth=width*dy;
            let crossHeight=height*dx;
            let collision= 0;
            
            if(Math.abs(dx)<=width && Math.abs(dy)<=height){
                if(crossWidth>crossHeight){
                    collision=(crossWidth>(-crossHeight))?1:2;
                }else{
                    collision=(crossWidth>-(crossHeight))?3: 4;
                }
            }
            return(collision);  
        } 
    

   // player2 to player1  collsion
    PlayerColision2() {
            let dx=(this.Player2x + 48 /2)-(this.Player1x + 48 /2);
            let dy=(this.Player2y + 48 /2) -  (this.Player1y + 48 /2);
            let width=(48 + 48) /  2;
            let height=(48 + 48) / 2;
            let crossWidth=width*dy;
            let crossHeight=height*dx;
            let collision= 0;
            
            if(Math.abs(dx)<=width && Math.abs(dy)<=height){
                if(crossWidth>crossHeight){
                    collision=(crossWidth>(-crossHeight))?1:2;
                }else{
                    collision=(crossWidth>-(crossHeight))?3: 4;
                }
            }
            return(collision);
    }
         
    // }
     // key unpressed.
    keyUp(e) {
        this.pressedKeys[e.keyCode] = false;
    }
    
    // movment and collision render and shooting
   update(e) {
       this.pressedKeys[e.keyCode] = true;
       
       

       if (this.pressedKeys[32]) {
        this.bulletArr.push( new Bullet(this.Player1x , this.Player1y, this.dx1 , this.dy1 , this ));

       } 
 



    
       if (this.pressedKeys[87]) {
           this.dx1 = this.d0;
           this.dy1 = this.dMin;
            this.Player1y -= 6; 
            if(this.PlayerColision() === 1 || this.Player1ColisionWithWalls().includes(1) ) {
                this.Player1y += 6; }
            if (this.Player1y < 0) {
                 this.Player1y += 6; }
        this.updateDraw();}

       if (this.pressedKeys[83]) {
        this.dx1 = this.d0;
           this.dy1 = this.dMax;
        this.Player1y += 6;
        if(this.PlayerColision() === 4  || this.Player1ColisionWithWalls().includes(4) ) {
            this.Player1y -= 6;}
        if (this.Player1y > this.game.heightCanvas - this.playerHeight) {
            this.Player1y -= 6;}
        this.updateDraw();}

    if ( this.pressedKeys[68]) {
        this.dx1 = this.dMax;
           this.dy1 = this.d0;
        
        this.Player1x += 6;
        if(this.PlayerColision() === 2 || this.Player1ColisionWithWalls().includes(2)) {
            this.Player1x -= 6;}
        if(this.Player1x > this.game.widthCanvas - this.playerWidth) {
            this.Player1x = this.game.widthCanvas - this.playerWidth;}
        this.updateDraw();}

    if ( this.pressedKeys[65]) {
        this.dx1 = this.dMin;
           this.dy1 = this.d0;
        this.Player1x -= 6; 
        if(this.PlayerColision() === 3  ) {
            this.Player1x += 6; }
        if(this.SideColision(this.Player1ColisionWithWalls()) > 4 ) {
                this.Player1x = this.SideColision(this.Player1ColisionWithWalls())
            }
        if(this.Player1x < 0 ) {
            this.Player1x = 0;}
        this.updateDraw();}

// player 2 controls
if (this.pressedKeys[107]) {
    this.bulletArr.push( new Bullet(this.Player2x , this.Player2y, this.dx2 , this.dy2 , this ));

   } 

    if ( this.pressedKeys[104]) {
        this.dx2 = this.d0;
           this.dy2 = this.dMin;
        this.Player2y -= 6;
            if(this.PlayerColision2() === 1|| this.Player1ColisionWithWalls2().includes(1)) {
                this.Player2y += 6; }
            if (this.Player2y < 0) {
            this.Player2y += 6;}
        this.updateDraw(); }

    if ( this.pressedKeys[101]) {
        this.dx2 = this.d0;
           this.dy2 = this.dMax;
     this.Player2y += 6;
        if(this.PlayerColision2() === 4|| this.Player1ColisionWithWalls2().includes(4)) {
            this.Player2y -= 6;}
        if (this.Player2y > this.game.heightCanvas - this.playerHeight) {
            this.Player2y -= 6;}
        this.updateDraw();
    }

 if ( this.pressedKeys[102]) {
    this.dx2 = this.dMax;
    this.dy2 = this.d0;
     this.Player2x += 6;
     if(this.PlayerColision2() === 2|| this.Player1ColisionWithWalls2().includes(2)) {
        this.Player2x -= 6;}
    if(this.Player2x > this.game.widthCanvas - this.playerWidth) {
         this.Player2x = this.game.widthCanvas - this.playerWidth;};
     this.updateDraw();}

 if ( this.pressedKeys[100]) {
    this.dx2 = this.dMin;
    this.dy2 = this.d0;
     this.Player2x -= 6;
     if(this.PlayerColision2() === 3) {
        this.Player2x += 6;}
     if(this.Player2x < 0 ) {
         this.Player2x = 0;};
         if(this.SideColision(this.Player1ColisionWithWalls2()) > 4 ) {
            this.Player2x = this.SideColision(this.Player1ColisionWithWalls2())
        }
     this.updateDraw();}

}

   // player controls eventLiseners
    eventliseners() {
        window.addEventListener('keydown' , (e)  => this.update(e), false);
        window.addEventListener('keyup', (e) => this.keyUp(e), false);
    }
   // spawing player1
    spawnPlayer1() {
            this.player1Place();
            this.img1.onload = this.ctx.drawImage( this.img1 , this.Player1x , this.Player1y, this.playerHeight, this.playerWidth);
            this.lastplayer1Position = { x:this.Player1x, y:this.Player1y };}
    player1Place() {
        this.Player1x = 48 *6 ;
        this.Player1y = this.game.heightCanvas - this.playerHeight ;}

        //spawing player2
    spawnPlayer2() {
        this.player2Place();
        this.img2.onload = this.ctx.drawImage( this.img2 , this.Player2x , this.Player2y, this.playerHeight, this.playerWidth);
        this.lastplayer2Position = { x:this.Player2x, y:this.Player2y }; }
    player2Place() {
    this.Player2x = 48 *10 ;
    this.Player2y = this.game.heightCanvas - this.playerHeight ;
    }


  // players canvas update after moving
updateDraw() {
    //player1
    this.ctx.clearRect(this.lastplayer1Position.x, this.lastplayer1Position.y, this.playerWidth, this.playerWidth);
    this.img1.onload = this.ctx.drawImage( this.img1 , this.Player1x , this.Player1y, this.playerHeight, this.playerWidth);
    this.lastplayer1Position = { x:this.Player1x, y:this.Player1y };  
    //player2
    this.ctx.clearRect(this.lastplayer2Position.x, this.lastplayer2Position.y, this.playerWidth, this.playerWidth);
    this.img2.onload = this.ctx.drawImage( this.img2 , this.Player2x , this.Player2y, this.playerHeight, this.playerWidth);
    this.lastplayer2Position = { x:this.Player2x, y:this.Player2y };   
    console.log('suveikiu');
}




}









