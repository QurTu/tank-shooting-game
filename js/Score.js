export default class Score {
    constructor(game) {
        this.game = game;
        
        this.enemyleft = 21;
      
        this.renderScoreBoard();
        
       
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
  <h2 class= "player1hp">3</h2>
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
  <h2 class= "player1hp">3</h2>
       

</div>
<div class="score-player2">
    <h2>Vegeta lifes:</h2>
    <h2 class= "player2hp">3</h2>
  </div>
</div>`; }
document.querySelector('.game').insertAdjacentHTML('beforeend', this.HTML);
document.querySelector('.score-player1').removeChild(document.querySelector('.score-player1').firstChild);

}



}


