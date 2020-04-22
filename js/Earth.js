 export default class Earth {
    constructor(game){
        this.c = game.c;
        this.ctx = game.ctx;
        this.widthCanvas = game.CanvasWidth;
         this.heightCanvas = game.CanvasHeight;
         this.EarthHeight = 48;
         this.EarthWidth = 48;
         this.x = 0;
         this.y =0;
         this.img = document.querySelector('img');
         this.EarthPlace();
         this.img.onload = this.renderEarth();
         this.update();
    }
    renderEarth() {
        this.ctx.drawImage(this.img, this.x , this.y, this.EarthHeight, this.EarthWidth);
    }
    EarthPlace(){
        this.x = this.widthCanvas / 2 - this.EarthWidth / 2 ;
        this.y = this.heightCanvas - this.EarthHeight;
    }
    update() {
        requestAnimationFrame((e) => this.update());
        this.renderEarth();
        
    }

}