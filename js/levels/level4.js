let level4 = [];
  earthWallArrayBuilding();
     
 
 

  RenderLenght( 0, 48*3  , 12 , "toX" , 1);
  RenderLenght( 0, 48*6  , 6 , "toY" , 1);


  RenderLenght( 48*3, 48*3  , 12 , "toX" , 1);
  RenderLenght( 48*4, 48*3  , 3 , "toX" , 1);
  RenderLenght( 48*5, 48*3  , 12 , "toX" , 1);
  RenderLenght( 48*4, 48*5  , 3 , "toX" , 1);

  RenderLenght( 48*7 , 48*6  , 12 , "toY" , 1);
  RenderLenght( 48*10 , 48*5  , 3 , "toY" , 1);
  RenderLenght( 48*7 , 48*4 , 12 , "toY" , 1);
  RenderLenght( 48*7 , 48*2 , 12 , "toY" , 1);
  RenderLenght( 48*7 , 48*3  , 3 , "toY" , 1);

  RenderLenght( 48*12 , 48*3  , 12 , "toY" , 1);
  RenderLenght( 48*13.5, 48*4  , 12 , "toX" , 1);


 


  

  
 
 


function earthWallArrayBuilding() {

  
  RenderLenght( 48* 8 - 8, 624 - 96  , 4 , "toY" , 2);
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
       level4.push({x: x1, y: y1 , t: type })
       x1 += 16;
    }    
}
function RenderToY(xKord, yKord, type) {
   let y1 = yKord;
   let x1 = xKord;
    for( let i = 0 ; i < 3 ; i++) {
       level4.push({x: x1, y: y1 , t: type })
       y1 += 16;
    }    
}


export default level4;