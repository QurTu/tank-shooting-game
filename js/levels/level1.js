
let level1 = [];
earthWallArrayBuilding();
     
 


 RenderLenght( 48, 48, 12 , "toX" , 1);
 RenderLenght( 48 *3, 48, 12 , "toX" , 1);
 RenderLenght( 48 *5, 48, 12 , "toX" , 1);
 RenderLenght( 48 * 7, 48, 10 , "toX" , 1);
 RenderLenght( 48 * 8, 48 * 2 , 2 , "toX" , 2);
 RenderLenght( 48 * 9, 48, 10 , "toX" , 1);
 RenderLenght( 48 * 11, 48, 12 , "toX" , 1);
 RenderLenght( 48 * 13, 48, 12 , "toX" , 1);
 RenderLenght( 48 * 15, 48, 12 , "toX" , 1);
 RenderLenght( 0, 48 * 6 , 1 , "toX" , 2);
 RenderLenght( 48* 16, 48 * 6 , 1 , "toX" , 2);

 RenderLenght( 48 * 7, 48 *6, 10 , "toX" , 1);
 RenderLenght( 48 * 8, 48 * 7 , 2 , "toX" , 1);
 RenderLenght( 48 * 9, 48* 6 , 10, "toX" , 1);

 RenderLenght( 48 *1, 48 * 8, 11 , "toX" , 1);
 RenderLenght( 48 *3, 48* 8, 11 , "toX" , 1);
 RenderLenght( 48 *5, 48* 8, 11 , "toX" , 1);
 RenderLenght( 48 *15, 48 * 8, 11 , "toX" , 1);
 RenderLenght( 48 *11, 48* 8, 11 , "toX" , 1);
 RenderLenght( 48 *13, 48* 8, 11 , "toX" , 1);

 RenderLenght( 48* 2, 48 * 6 , 10 , "toY" , 1);
 RenderLenght( 48* 12, 48 * 6 , 10 , "toY" , 1);

 

 


 
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
        level1.push({x: x1, y: y1 , t: type })
        x1 += 16;
     }    
}
function RenderToY(xKord, yKord, type) {
    let y1 = yKord;
    let x1 = xKord;
     for( let i = 0 ; i < 3 ; i++) {
        level1.push({x: x1, y: y1 , t: type })
        y1 += 16;
     }    
}








export default level1;