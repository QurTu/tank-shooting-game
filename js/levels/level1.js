
let level1 = [];
     
 
 


 RenderLenght( 48, 48, 16 , "toX");
 RenderLenght( 48 *3, 48, 16 , "toX");
 RenderLenght( 48 *5, 48, 14 , "toX");
 RenderLenght( 48 * 7, 48, 12 , "toX");
 RenderLenght( 48 * 9, 48, 12 , "toX");
 RenderLenght( 48 * 11, 48, 14 , "toX");
 RenderLenght( 48 * 13, 48, 16 , "toX");
 RenderLenght( 48 * 15, 48, 16 , "toX");
 


 



 function RenderLenght(x , y , lenght , toYorToX) {
    if (toYorToX === "toY") {
        for (let i = 0 ; i < lenght; i++ ) {
          RenderToY(x, y);
          x += 16;
        }
      }
     if (toYorToX === "toX") {
      for (let i = 0 ; i < lenght; i++ ) {
        RenderToX(x, y);
        y += 16;
      }
    }
    
 }


 function RenderToX(xKord, yKord) {
    let y1 = yKord;
    let x1 = xKord;
     for( let i = 0 ; i < 3 ; i++) {
        level1.push({x: x1, y: y1})
        x1 += 16;
     }    
}
function RenderToY(xKord, yKord) {
    let y1 = yKord;
    let x1 = xKord;
     for( let i = 0 ; i < 3 ; i++) {
        level1.push({x: x1, y: y1})
        y1 += 16;
     }    
}








export default level1;