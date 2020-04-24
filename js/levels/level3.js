let level3 = [];
  earthWallArrayBuilding();
     
 
 


  RenderLenght( 48 * 2, 48*3, 24 , "toX" , 1);
  RenderLenght( 48 * 3, 48*2, 22 , "toX" , 1);
  RenderLenght( 48 * 4, 48*2, 21 , "toX" , 1);
  RenderLenght( 48 * 5, 48* 2, 20 , "toX" , 1);
  RenderLenght( 48 * 6, 48*2 ,24, "toX" , 1);
  
  RenderLenght( 48 * 7, 48*4, 18 , "toX" , 1);
  RenderLenght( 48 * 8, 48*4, 18 , "toX" , 1);
  RenderLenght( 48 * 9, 48*4, 18 , "toX" , 1);

  RenderLenght( 48 * 10, 48* 2, 24 , "toX" , 1);
  RenderLenght( 48 *11, 48*2 ,20, "toX" , 1);
  RenderLenght( 48 * 12, 48*2, 21 , "toX" , 1);
  RenderLenght( 48 * 13, 48*2, 22 , "toX" , 1);
  RenderLenght( 48 * 14, 48*3, 24 , "toX" , 1);
  RenderLenght( 0, 48 * 2, 3 , "toX" , 2);
  RenderLenght( 0, 48* 12, 3 , "toX" , 2);
  
  



  

  
 
 


function earthWallArrayBuilding() {
  RenderLenght( 48* 8 + 60, 624 - 48, 3 , "toY" , 1);
  RenderLenght( 48* 8 + 60, 624 - 48 *2 , 3 , "toY" , 1);
  RenderLenght( 48* 8 - 60, 624 - 48 *2 , 3 , "toY" , 1);
  RenderLenght( 48* 8 - 60, 624 - 48  , 3 , "toY" , 1);
  RenderLenght( 48* 8 - 8, 624 - 96  , 4 , "toY" , 1);
}





function RenderLenght(x , y , lenght , toYorToX , t) {
   if (toYorToX === "toY") {
       for (let i = 0 ; i < lenght; i++ ) {
         RenderToY(x, y , t);
         x += 16;
       }
     }
    if (toYorToX === "toX") {
     for (let i = 0 ; i < lenght; i++ ) {
       RenderToX(x, y, t);
       y += 16;
     }
   }
   
}


function RenderToX(xKord, yKord , type) {
   let y1 = yKord;
   let x1 = xKord;
    for( let i = 0 ; i < 3 ; i++) {
       level3.push({x: x1, y: y1 , t: type })
       x1 += 16;
    }    
}
function RenderToY(xKord, yKord, type) {
   let y1 = yKord;
   let x1 = xKord;
    for( let i = 0 ; i < 3 ; i++) {
       level3.push({x: x1, y: y1 , t: type })
       y1 += 16;
    }    
}


export default level3;



