var wall, thickness;
var bullets, speed, weights

function setup() {
  createCanvas(1600, 400, 50,50);
  thickness = random(22, 83);
  bullets = createSprite(100, 200, 30, 10);
  bullets.shapeColor(80,80,80);
  bullets.debug = true;
  wall = createSprite(1200, 200, thickness, width/2);
  wall.shapecolor(80,80,80);
  wall.debug = true;
  speed = random(223, 321);
  weight = random(30, 52);

}
function draw(){
  background(0,0,0);

  if(bullets.x - wall.x < wall.width/2 + bullets.width/2
    &&wall.x - bullets.x < wall.width/2 + bullets.width/2
    &&bullets.x - wall.x < wall.width/2 + bullets.width/2){
    bullets.shapeColor = "red";
    wall.shapeColor = "red"
  }

  else{
    bullets.shapeColor = "blue";
    wall.shapeColor = "blue";
  }
  drawSprites();

  if(hasCollided(bullet, wall))
  {
    bullets.velocityX = 0;
    var damage= 0.5*weight *speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor = color(255, 0, 0);
    }

    if(damage<10){
      wall.shapeColor = color(0, 255, 0);
    }
  }

}

function hasCollided(lbullets, lwall)
{
  bulletsRightEdge = bullets.x + bullets.width;
  wallLeftEdge = lwall.x;
  if(bulletsRightEdge>= wallLeftEdge){
    return true;
  }
  return  false;

}