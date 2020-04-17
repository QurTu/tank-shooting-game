 export default class Earth {
    constructor(canvas ,canvasCtx,  widthCanvas, heightCanvas){
        this.c = canvas;
        this.ctx = canvasCtx;
        this.widthCanvas = widthCanvas;
         this.heightCanvas =  heightCanvas;
         this.EarthHeight = 48;
         this.EarthWidth = 48;
         this.x = 0;
         this.y =0;
         this.img = document.querySelector('img');
         this.EarthPlace();
         this.img.onload = this.renderEarth();
    }
    renderEarth() {
        this.ctx.drawImage(this.img, this.x , this.y, this.EarthHeight, this.EarthWidth);
        console.log ('did my work')
        console.log (this.img);
        this.ctx.fillStyle = this.pat;
        this.ctx.fill();
    }
    EarthPlace(){
        this.x = this.widthCanvas / 2 - this.EarthWidth / 2 ;
        this.y = this.heightCanvas - this.EarthHeight;
    }
}