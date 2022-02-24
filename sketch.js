var hypnoticBall, database;
var position;


function setup(){

  createCanvas(500,500);

  hypnoticBall = createSprite(250,250,10,10);
  hypnoticBall.shapeColor = "red";

}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      readPosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      readPosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      readPosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      readPosition(0,+1);
    }
    drawSprites();
  
}


function readPosition(data){
  position = data.val();
  console.log(position.x);
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
}

