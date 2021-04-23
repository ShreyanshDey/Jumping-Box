  var fixedRect, movingRect,rect2,rect3,rect4,edges


  function setup() {
    createCanvas(900,700);
    fixedRect = createSprite(100, 600, 50, 80);
    fixedRect.shapeColor = "orange";
    
    rect2 = createSprite(400, 600, 50, 80);
    rect2.shapeColor = "magenta";
    //fixedRect.debug = true;
    rect3 = createSprite(300, 600, 50, 80);
    rect3.shapeColor = "blue";
    //fixedRect.debug = true;
    rect4 = createSprite(200, 600, 50, 80);
    rect4.shapeColor = "lime";
    //fixedRect.debug = true;
    movingRect = createSprite(400, 100,80,30);
    movingRect.shapeColor = "red";
    //movingRect.debug = true;

    movingRect.velocityY = 7

         movingRect.velocityX= 4
   
  }

  function draw() {
    background("yellow");  

    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
        && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
      movingRect.velocityX = movingRect.velocityX * (-1);
      
    }
    if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
      movingRect.velocityY = movingRect.velocityY * (-1);
      }
      if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
        && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
      movingRect.velocityX = movingRect.velocityX * (-1);
    
    }
      //rect2
    if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
      movingRect.velocityY = movingRect.velocityY * (-1);
      }
      if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
        && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
      movingRect.velocityX = movingRect.velocityX * (-1);
      
    }
  //rect3
    if (movingRect.y - rect3.y < rect3.height/2 + movingRect.height/2
      && rect3.y - movingRect.y < rect3.height/2 + movingRect.height/2){
      movingRect.velocityY = movingRect.velocityY * (-1);
      }
      
      if (movingRect.x - rect3.x < rect3.width/2 + movingRect.width/2
        && rect3.x - movingRect.x < rect3.width/2 + movingRect.width/2){
        movingRect.velocityY = movingRect.velocityY * (-1);
        }
      //rect4
      if (movingRect.y - rect4.y < rect4.height/2 + movingRect.height/2
        && rect4.y - movingRect.y < rect4.height/2 + movingRect.height/2){
        movingRect.velocityY = movingRect.velocityY * (-1);
        }
        
        if (movingRect.x - rect4.x < rect4.width/2 + movingRect.width/2
          && rect4.x - movingRect.x < rect4.width/2 + movingRect.width/2){
          movingRect.velocityY = movingRect.velocityY * (-1);
          }

         if (movingRect.isTouching(rect2)) {
           movingRect.shapeColor="magenta"
         }
         if (movingRect.isTouching(rect3)) {
          movingRect.shapeColor="blue"
        }
        if (movingRect.isTouching(rect4)) {
          movingRect.shapeColor="lime"
        }
        if (movingRect.isTouching(fixedRect)) {
          movingRect.shapeColor="orange"
        }
         

          edges=createEdgeSprites()
          
          movingRect.bounceOff(rect4)
          
          movingRect.bounceOff(rect3)
          
          movingRect.bounceOff(rect2)
          
          movingRect.bounceOff(fixedRect)
          
         movingRect.bounceOff(edges)

         
    
    
    drawSprites();
  }