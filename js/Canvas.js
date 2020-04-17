class Canvas {
    constructor() {
        this.width = 800;
        this.height = 640;
        this.c = null ;
        this.ctx = null;
        this.renderCanvas();
    }
    renderCanvas() {
        this.gamePlace = document.querySelector('.game');
         this.HTML = `<canvas width="${this.width}" height="${this.height}"> </canvas> <div class="score-board">  </div> `;
        this.gamePlace.insertAdjacentHTML('afterbegin' , this.HTML);
        this.c = document.querySelector('canvas') ;
            this.ctx = this.c.getContext("2d")
    }
}
export default Canvas;