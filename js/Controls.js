 export default class Controls {
     constructor(playersnumber) {
         this.player = playersnumber;
         this.renderControls();
         this.gameDOM = document.querySelector('.game');
     }
     renderControls(){
         console.log('veikiu');
        if(this.player === 1) {
            let HTML = `<div class = "control"> 
            <div class="palyer1-controls">  
            <h1>Son Goku Controls </h1>
            <img src="./img/player1controls.png" alt="">
        </div> </div>`
        document.querySelector('.game').insertAdjacentHTML("beforeend", HTML);
        }
        if(this.player === 2) {
         let HTML = `<div class = "control"> 
         <div class="palyer1-controls">  
         <h1>Son Goku Controls </h1>
         <img src="./img/player1controls.png" alt="">
     </div>
      <div class="palyer2-controls">
          <h1>Vegeta Controls</h1>
          <img src="./img/player222.png" alt="">
      </div>
     </div>`
     document.querySelector('.game').insertAdjacentHTML("beforeend", HTML);
        }
       
     }
 } 