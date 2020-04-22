import Game from './Game.js';


 const gameDOM = document.querySelector('.game');
 gameStart();

 








 
function gameStart() {
    console.log('suveikiau')
    let  HTML = ` <div class="start"> <div class='start-menu'>
    <div class=" btn one-player"> START GAME : ONE PLAYER</div>
    <div class=" btn two-players">START GAME : TWO PLAYER</div>
    <div class=" btn create-lvl">CREATE LEVEL (Commint soon)</div>
</div> ` ;
   gameDOM.insertAdjacentHTML("afterbegin" , HTML) ;
    document.querySelector('.one-player').addEventListener('click', function() {
        gameDOM.innerHTML = '';
        const game = new Game(1, 1);     
      }) 
    document.querySelector('.two-players').addEventListener('click', function() {
      gameDOM.innerHTML = '';
      const game = new Game(1, 2);     
}) 

}






