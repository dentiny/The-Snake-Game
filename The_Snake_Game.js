//by Ethan Jiang
//May.12th, 2018
//p5.js

var snake;
var food;

var grid_scale=10;

function setup() 
{
  createCanvas(640,480);
  frameRate(10);
  
  snake=new Snake();
  this.pickLocation(); //generate initial food
}

function pickLocation()
{
 var column=floor(width/grid_scale);
 var row=floor(height/grid_scale);
 
 var random_x=floor(random(width/grid_scale));
 var random_y=floor(random(height/grid_scale));
 food=createVector(random_x,random_y);
 food.mult(grid_scale);
}

function draw() 
{
  background(0);
  
  var ifEatFood= snake.eat(food);
  if(ifEatFood)
    this.pickLocation();  //generate new food
    
  snake.death();
  snake.update();
  snake.show();
  
  fill(255,0,100);
  rect(food.x,food.y,grid_scale,grid_scale);
}

function keyPressed()
{
 switch(keyCode)
  {
   case UP_ARROW:snake.dir(0,-1);break;
   case DOWN_ARROW:snake.dir(0,1);break;
   case LEFT_ARROW:snake.dir(-1,0);break;
   case RIGHT_ARROW:snake.dir(1,0);break;
   default:break;
  }
}
