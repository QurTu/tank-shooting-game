export default class Score {
    constructor(game) {
        this.game = game;
        
        this.enemyleft = 21;
      
        this.renderScoreBoard();
    }

renderScoreBoard() {
 this.HTML = `   <div class="score-board">  
 <div class="control-btns">
  <div class="pauze-btn"> Pauze </div>
  <div class="stop-music">music</div>
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
</div>`;
document.querySelector('.game').insertAdjacentHTML('beforeend', this.HTML);
console.log(this.game.playerNumb);
if(this.game.playerNumb === 2) {
    console.log('veikiu');
    this.player2HTML = ` <div class="score-player2">
    <h2>Vegeta lifes:</h2>
    <img  class = "hp" src="./img/hp.png" alt="">
    <img  class = "hp" src="./img/hp.png" alt="">
    <img  class = "hp" src="./img/hp.png" alt="">
  </div>
    `
    document.querySelector('.score-board').insertAdjacentHTML('beforeend', this.player2HTML);
}
}


}