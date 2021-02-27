var car, wall;



function setup() {
  createCanvas(800,400);
  speed = random(60,80)
  weight = random(30,25)
  car = createSprite(50, 200, 50, 50)

car.velocityx = speed;
car.shapeColor = color (255);

wall = createSprite(1500, 200, 60, hight/2);
wall.shapeColor = color(80, 80, 80);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}