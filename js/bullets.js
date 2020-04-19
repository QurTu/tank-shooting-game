export default class Bullet {
    /// reikai saudytoja kodrinaciu ir paskutines pasisukimo krypties. ir pacio zaidimo.
    constructor( shooterX, shootery, speedX, speedY, game ) {
        this.buletsize = 8 ;
        this.dx = speedX;
        this.dy = speedY;
        this.bulletX = shooterX;
        this.bulletY = shootery;
        this.bulletXNew = null;
        this.bulletYNew = null;
        this.player = game;
        this.bulletRender() ;
        this.updateReq();
        
    }
    bulletRender(){
        console.log("veikiu");
        console.log(this.player);
          this.bulletinitPlace() ;
        this.player.ctx.fillStyle = "#FF0000";
        this.player.ctx.fillRect(this.bulletX, this.bulletY, this.buletsize, this.buletsize );
        this.bulletXNew = this.bulletX;
        this.bulletYNew = this.bulletY; 
    }

    bulletinitPlace() {
        if( this.dx > 0 && this.dy === 0) {
            this.bulletX +=  48;
            this.bulletY +=  10;
        }
        if( this.dx < 0 && this.dy === 0) {
            this.bulletY +=  10;
        }
        if( this.dx === 0 && this.dy > 0) {
            this.bulletX +=  10;
            this.bulletY +=  24;
        }
        if( this.dx === 0 && this.dy < 0) {
            this.bulletX +=  24;
            this.bulletY -=  8;
        }

    }
    

 updateReq() {
     requestAnimationFrame((e) => this.updateReq());
     this.update();
 }  

 update() {
    console.log("update");
    this.bulletXNew += this.dx ;
    this.bulletYNew += this.dy ;
    this.updateReDraw();
         
 }


 updateReDraw() {
    //player1
    this.player.ctx.clearRect(this.bulletX, this.bulletY, this.buletsize, this.buletsize );
    this.bulletX = this.bulletXNew ;
    this.bulletY =this.bulletYNew ;
    this.player.ctx.fillRect(this.bulletXNew,this.bulletYNew , this.buletsize, this.buletsize );
    
 }
 




}