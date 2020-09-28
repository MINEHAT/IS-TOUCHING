var fixedRect, movingRect;
var box1,box2,box3,box4;

function setup() {

  createCanvas(1200,800);

  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;


  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;

  box1 = createSprite(100,100,50,50);
  box1.shapeColor = "green";

  box2 = createSprite(200,100,50,50);
  box2.shapeColor = "green";

  box3 = createSprite(300,100,50,50);
  box3.shapeColor = "green";

  box4 = createSprite(400,100,50,50);
  box4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(movingRect,fixedRect)){

  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";

}
else{

  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
isTouching(box1,movingRect);
isTouching(box2,movingRect);
isTouching(box3,movingRect);
isTouching(box4,movingRect);

  
  drawSprites();

  var x = mouseX;
  var y = mouseY;

  text(x + "," + y,x,y);
}

function isTouching(object1,object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object1.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {

  object1.shapeColor = "blue";
  object2.shapeColor = "blue";

}

else {
  object1.shapeColor = "green";
  object2.shapeColor = "green";
}

}