  var  movingrect,fixrect;
  function setup() {
  createCanvas(1200,800);
  fixrect=createSprite(600,400,50,80);
  movingrect=createSprite(400,200,80,30);
  fixrect.shapeColor="green";
  movingrect.shapeColor="green";
  }

function draw() {
  background(0,0,0);  
  movingrect.x=mouseX;
  movingrect.y=mouseY;
 
  if(isTouching(movingrect,fixrect)){
    fixrect.shapeColor="blue";
    movingrect.shapeColor="blue";

  }
  else
       {
         fixrect.shapeColor="green";
   movingrect.shapeColor="green";
       }
  drawSprites();
    }

  



  
