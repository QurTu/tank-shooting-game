

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

         this.c  = game.c;
         this.ctx = game.ctx;
         this.img1 = document.querySelector(".player1");
         this.img2 = document.querySelector(".player2");
          this.spawnPlayer1();
          this.spawnPlayer2();
          this.eventliseners();
          
          
          
   
          


  
    }

    PlayerColision() {
        let side = 0;

        
            let dx=(this.Player1x + 48 /2)-(this.Player2x + 48 /2);
            let dy=(this.Player1y + 48 /2) -  (this.Player2y + 48 /2);
            let width=(48 + 48) /  2;
            let height=(48 + 48) / 2;
            let crossWidth=width*dy;
            let crossHeight=height*dx;
            let collision= 0;
            //
            if(Math.abs(dx)<=width && Math.abs(dy)<=height){
                if(crossWidth>crossHeight){
                    collision=(crossWidth>(-crossHeight))?1:2;
                }else{
                    collision=(crossWidth>-(crossHeight))?3: 4;
                }
            }
            return(collision);
        
         
    }
     
    
   update(e) {
       console.log(e.keyCode);
      // console.log(this.game.walls);
       if ( e.keyCode === 87) {
        this.Player1y -= 5; 
        console.log(this.PlayerColision());
        if(this.PlayerColision() === 1) {
            this.Player1y += 5; 
        }
           if (this.Player1y < 0) {
            this.Player1y += 5;
           }
           this.updateDraw();
       }






       if ( e.keyCode === 83) {
        this.Player1y += 5;
        console.log(this.PlayerColision());
        if(this.PlayerColision() === 4) {
            this.Player1y -= 5;
        }
        if (this.Player1y > this.game.heightCanvas - this.playerHeight) {
            this.Player1y -= 5;
           }
        this.updateDraw();
    }


    if ( e.keyCode === 68) {
        this.Player1x += 5;
        console.log(this.PlayerColision());
        if(this.PlayerColision() === 2) {
            this.Player1x -= 5;
        }
        if(this.Player1x > this.game.widthCanvas - this.playerWidth) {
            this.Player1x = this.game.widthCanvas - this.playerWidth;
        }
        this.updateDraw();
    }


    if ( e.keyCode === 65) {
        this.Player1x -= 5;
        console.log(this.PlayerColision());
        if(this.PlayerColision() === 3) {
            this.Player1x += 5;
        }

        if(this.Player1x < 0 ) {
            this.Player1x = 0;
        }
        this.updateDraw();
    }

// player 2 controls

    if ( e.keyCode === 104) {
        this.Player2y -= 5;
        if (this.Player2y < 0) {
         this.Player2y += 5;
        }
        this.updateDraw();
    }
    if ( e.keyCode === 101) {
     this.Player2y += 5;
     if (this.Player2y > this.game.heightCanvas - this.playerHeight) {
         this.Player2y -= 5;
        }
     this.updateDraw();
 }
 if ( e.keyCode === 102) {
     this.Player2x += 5;
     if(this.Player2x > this.game.widthCanvas - this.playerWidth) {
         this.Player2x = this.game.widthCanvas - this.playerWidth;
     };
     this.updateDraw();
 }
 if ( e.keyCode === 100) {
     this.Player2x -= 5;
     if(this.Player2x < 0 ) {
         this.Player2x = 0;
     };
     this.updateDraw();
 }
        
    }


    eventliseners() {
        window.addEventListener('keydown' , (e)  => this.update(e)

        )
    }

    spawnPlayer1() {
            this.player1Place();
            this.img1.onload = this.ctx.drawImage( this.img1 , this.Player1x , this.Player1y, this.playerHeight, this.playerWidth);
            this.lastplayer1Position = { x:this.Player1x, y:this.Player1y };
            
           
            
    }
    player1Place() {
        this.Player1x = this.game.widthCanvas / 2   - this.playerWidth * 2 -8 ;
        this.Player1y = this.game.heightCanvas - this.playerHeight ;
        
    }

    spawnPlayer2() {
        this.player2Place();
        this.img2.onload = this.ctx.drawImage( this.img2 , this.Player2x , this.Player2y, this.playerHeight, this.playerWidth);
        this.lastplayer2Position = { x:this.Player2x, y:this.Player2y }; 
    }
    player2Place() {
    this.Player2x = this.game.widthCanvas / 2   + this.playerWidth  +8 ;
    this.Player2y = this.game.heightCanvas - this.playerHeight ;
    }



updateDraw() {
    

    this.ctx.clearRect(this.lastplayer1Position.x, this.lastplayer1Position.y, this.playerWidth, this.playerWidth);
    this.img1.onload = this.ctx.drawImage( this.img1 , this.Player1x , this.Player1y, this.playerHeight, this.playerWidth);
    this.lastplayer1Position = { x:this.Player1x, y:this.Player1y };  

    this.ctx.clearRect(this.lastplayer2Position.x, this.lastplayer2Position.y, this.playerWidth, this.playerWidth);
    this.img2.onload = this.ctx.drawImage( this.img2 , this.Player2x , this.Player2y, this.playerHeight, this.playerWidth);
    this.lastplayer2Position = { x:this.Player2x, y:this.Player2y };
    
}





}









