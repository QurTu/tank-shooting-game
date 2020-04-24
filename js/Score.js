export default class Score {
    constructor(game) {
        this.game = game;
        
        this.enemyleft = 21;
      
        this.renderScoreBoard();
        
        this.addLisiner()
    }

renderScoreBoard() {
    if(this.game.playerNumb === 1) {
 this.HTML = `   <div class="score-board">  
 <div class="control-btns">
 
  <div class="stop-music">STOP MUSIC</div>
</div>
 <div class="score-enemy">
     <h2>Enemys left:</h2>
     <h2 class= "enemyleft ">${ this.enemyleft }</h2>
 </div>
 <div class="score-player1">
  <h2>Songoku lifes:</h2>
  <img  class = "hp" src="./img/hp.png" alt="">
  <img  class = "hp" src="./img/hp.png" alt="">
  <img  class = "hp" src="./img/hp.png" alt="">
</div>
</div>`;
    }
    if(this.game.playerNumb === 2) {
        this.HTML = `   <div class="score-board">  
 <div class="control-btns">
  <div class="stop-music"> STOP MUSIC</div>
</div>
 <div class="score-enemy">
     <h2>Enemys left:</h2>
     <h2 class= "enemyleft ">${ this.enemyleft }</h2>
 </div>
 <div class="score-player1">
  <h2>Songoku lifes:</h2>
  <img  class = "hp" src="./img/hp.png" alt="">
  <img  class = "hp" src="./img/hp.png" alt="">
  <img  class = "hp" src="./img/hp.png" alt="">
</div>
<div class="score-player2">
    <h2>Vegeta lifes:</h2>
    <img  class = "hp" src="./img/hp.png" alt="">
    <img  class = "hp" src="./img/hp.png" alt="">
    <img  class = "hp" src="./img/hp.png" alt="">
  </div>
</div>`; }
document.querySelector('.game').insertAdjacentHTML('beforeend', this.HTML);

}

addLisiner() {
    document.querySelector('.stop-music').addEventListener('click', () => {
    if(this.game.music === 1) {
        console.log('veikiu');
        this.game.backMusic.pause();  
          this.game.music = 0 ;
    }

   
    })
}


}


