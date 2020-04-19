export default class Bullet {
    /// reikai saudytoja kodrinaciu ir paskutines pasisukimo krypties. ir pacio zaidimo.
    constructor9( shooterX, shootery, speedX, speedY, game ) {
        this.buletsize = 4 ;
        this.buletSpeedX = speedX;
        this.buletSpeedY = speedY;
        this.shooterX = shooterX;
        this.shooterY = shootery;
        this.player = game;
        this.bulletRender() ;
        
    }
    bulletRender(){
         
    }
}

