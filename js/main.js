
import AllGame from './AllGame.js';


 const gameDOM = document.querySelector('.game');
 gameStart();

 
function gameStart() {
    let  HTML = ` <div class="start"> <div class='start-menu'>

    <div class=" btn one-player"> START GAME : ONE PLAYER</div>
    <div class=" btn two-players">START GAME : TWO PLAYER</div>
    <div class=" btn create-lvl">CREATE LEVEL (Commint soon)</div>
</div> ` ;
   gameDOM.insertAdjacentHTML("afterbegin" , HTML) ;
    document.querySelector('.one-player').onclick = () => {
        gameDOM.innerHTML = '';
        const game = new AllGame(1);  
        update(game);   
      }
    document.querySelector('.two-players').addEventListener('click', ()  =>{
      gameDOM.innerHTML = '';
      const game = new AllGame(2);   
      update(game);  
}) 


}
function restartGame() {
    console.log('clicked');
    gameDOM.innerHTML = '';
    const game = new AllGame(1);  
    update(game);   
  }




function update(game) {
    requestAnimationFrame((e) => update(game));
    if(game.alive === 0) {
        location.reload();
    }

}



