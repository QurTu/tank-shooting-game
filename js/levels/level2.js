
  let level2 = [];
  earthWallArrayBuilding();
     
 
 


  RenderLenght( 48, 48, 12 , "toX" , 1);
  RenderLenght( 48 *3, 48, 12 , "toX" , 1);
  RenderLenght( 48 *5, 0, 6 , "toX" , 2);
  RenderLenght( 48 *5, 48* 3, 6 , "toX" , 1);
  RenderLenght( 0, 48 * 8 , 3 , "toX" , 2);
  RenderLenght( 48 * 9, 0, 3 , "toX" , 2);
  RenderLenght( 48 * 9, 48, 6 , "toX" , 1);

  RenderLenght( 48 * 8, 48*4, 3 , "toX" , 2);
  RenderLenght( 48 * 11, 48, 9 , "toX" , 1);
  RenderLenght( 48 * 13, 48, 9 , "toX" , 1);
  RenderLenght( 48 * 15, 48, 9 , "toX" , 1);
  RenderLenght( 48 * 16, 48*5, 3 , "toX" , 2);
  RenderLenght( 48 * 14, 48*3, 3 , "toX" , 2);
  RenderLenght( 48 * 12, 48*3, 6 , "toX" , 2);
  RenderLenght( 48* 12, 48 * 5 , 3 , "toY" , 1);
  RenderLenght( 48* 14, 48 * 5 , 6 , "toY" , 1);
  RenderLenght( 48 * 7, 48 *5, 15 , "toX" , 1);
  RenderLenght( 48 * 8, 48 * 8 , 6 , "toX" , 1);
  RenderLenght( 48 * 9, 48* 7 , 9, "toX" , 1);

  
  RenderLenght( 48 *12, 48* 8, 9 , "toX" , 1);
  RenderLenght( 48 *14, 48* 7, 12 , "toX" , 1);
  RenderLenght( 48 *13, 48* 8, 3 , "toX" , 2);
  RenderLenght( 48 *11, 48* 6, 3 , "toX" , 2);

 
  RenderLenght( 48 *1, 48 * 8, 11 , "toX" , 1);
  RenderLenght( 48 *3, 48* 8, 11 , "toX" , 1);
  RenderLenght( 48 *5, 48* 8, 11 , "toX" , 1);
  
  RenderLenght( 48* 2, 48 * 6 , 10 , "toY" , 1);
 


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
       level2.push({x: x1, y: y1 , t: type })
       x1 += 16;
    }    
}
function RenderToY(xKord, yKord, type) {
   let y1 = yKord;
   let x1 = xKord;
    for( let i = 0 ; i < 3 ; i++) {
       level2.push({x: x1, y: y1 , t: type })
       y1 += 16;
    }    
}


export default level2;





