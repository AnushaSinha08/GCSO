
var car, wall,wall2,wall,wall4;
var speed1, speed2,spped3, speed4, weight;


function setup() {
  createCanvas(1600,400);
 
  weight = random(400,1500);
  speed1 = random(55,90);
  speed2 = random(55,90);
  speed3 = random(55,90);
  speed4 = random(55,90);


  car = createSprite(50, 50, 10, 10);
  car2 = createSprite(50, 150, 10, 10);
  car3 = createSprite(50, 250, 10, 10);
  car4 = createSprite(50, 350, 10, 10);
  wall= createSprite(1500, 50, 20, 65);
  wall2= createSprite(1500, 150, 20, 65);
  wall3= createSprite(1500, 250, 20, 65);
  wall4= createSprite(1500, 350, 20, 65);
  
  
  car.velocityX =  60;
  car2.velocityX =  60;
  car3.velocityX =  60;
  car4.velocityX =  60;

}

function carXPosition(carx,car2x,car3x,car4x)
{
if (carx=1)
{
  car.x = 1485;
}
if (car2x=1)
{
  car2.x = 1485;
}

if (car4x=1)
{
  car4.x = 1485;
}

if (car4x=1)
{
  car4.x = 1485;
}

}
function draw() {

  background(255,255,255);  
  car.display();
  car2.display();
  car3.display();
  car4.display();
  
  
  wall.display();
  wall2.display();
  wall3.display();
  wall4.display();

  if(collide(car,wall)){

      if(wall.x - car.x < (car.width + wall.width)/2) {
    
      car.velocityX = 0;
     
      var deformation = (0.5 * weight * speed1 * speed1/22509);
   
      if(deformation>180) {
        car.x = 1485;
        car.shapeColor = color(255,0,0);
       
      }
    
      if(deformation<180 && deformation>100) {
        car.x = 1485;
         car.shapeColor = color(230,230,0);
       
      }
    
      if(deformation<100){
        car.x = 1485;
         car.shapeColor = color(0,255,0);
         
      }
    }
  }
  if(collide(car2,wall2)) {
    
    if(wall2.x - car2.x < (car2.width + wall2.width)/2) {

      car2.velocityX = 0;
     
      var deformation = 0.5 * weight * speed2 * speed2/22509;
      
      if(deformation>180) {
      
        car2.x = 1485;
        car2.shapeColor = color(255,0,0);
      
      
      }
    
      if(deformation<180 && deformation>100) {
        
        car2.x = 1485;
        car2.shapeColor = color(230,230,0);
     
      
      }
    
      if(deformation<100){
        
        car2.x = 1485;
        car2.shapeColor = color(0,255,0);
  
      }
    }
  }

  if(collide(car3,wall3)) {   
  
    if(wall3.x - car3.x < (car3.width + wall3.width)/2) {
    
    car3.velocityX = 0;
   
    var deformation = 0.5 * weight * speed3 * speed3/22509;
    
    if(deformation>180) {
     
        car3.x = 1485;
       
      car3.shapeColor = color(255,0,0);
     
    }
  
    if(deformation<180 && deformation>100) {
      
      car3.x = 1485;
   
      car3.shapeColor = color(230,230,0);
     
    }
  
    if(deformation<100){
     
      car3.x = 1485;
      
      car3.shapeColor = color(0,255,0);
      
    }
  }
}

if(collide(car4,wall4)) {
if(wall4.x - car4.x < (car4.width + wall4.width)/2) {

  car4.velocityX = 0;
 
  var deformation = 0.5 * weight * speed4 * speed4/22509;
  
  if(deformation>180) {
    car4.x = 1485;

    car4.shapeColor = color(255,0,0);
    
  }

  if(deformation<180 && deformation>100) {
   
    car4.x = 1485;
    car4.shapeColor = color(230,230,0);
 
  }

  if(deformation<100){
    car4.x = 1485;
    
    car4.shapeColor = color(0,255,0);
    
  }
}
}




drawSprites();
}