var bullet,speed,weight ;
var wall,thickness; 
function setup() { 
  createCanvas(1600,400); 
  bullet = createSprite(50, 200, 50, 50); 
  wall=createSprite(1200,200,60,height/2); 
  wall.shapeColor = color(80,80,80); 
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83); 
  deformation = 0.5 * weight * speed * speed / (thickness * thickness * thickness)

  bullet.velocityX = speed;
} 
function draw() { 
background(0);
if(bullet.x-wall.x<(bullet.width+wall.width)/2){ 

if(deformation > 10)
{
 bullet.shapeColor = color(255,0,0);
 } 
if(deformation < 10){ 
bullet.shapeColor = color(0,255,0);
} 
bullet.velocityX = 0; 
} 
 
drawSprites();
}