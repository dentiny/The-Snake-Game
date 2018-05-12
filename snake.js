//by Ethan Jiang 
//May.12th, 2018
//p5.js

function Snake()
{
 this.x=0;
 this.y=0;
 this.xspeed=1;
 this.yspeed=0;
 
 this.total=0;
 this.tail=[];
 
 this.dir=function(x,y)
 {
   this.xspeed=x;
   this.yspeed=y;
 }
 
 this.eat=function(food)
 {
   var distance=dist(this.x,this.y,food.x,food.y);
   if(distance<1)
   {
     this.total++; 
     return true;
   }
   else 
     return false;
 }
 
 this.update=function()
 {
   if(this.total===this.tail.length) //the snake not eat
   {
     for(var i=0;i<this.total-1;i++)
     {
       this.tail[i]=this.tail[i+1];
     }
   }
   this.tail[this.total-1]=createVector(this.x,this.y);
   
   this.x+=this.xspeed*grid_scale;
   this.y+=this.yspeed*grid_scale;
   this.x=constrain(this.x,0,width-grid_scale);
   this.y=constrain(this.y,0,height-grid_scale);
 }
 
 this.show=function()
 {
   fill(255);
   rect(this.x,this.y,grid_scale,grid_scale);
   for(var i=0;i<this.total;i++)
  {
    rect(this.tail[i].x,this.tail[i].y,grid_scale,grid_scale);
  }
 }
 
 this.death=function()
 {
  for(var i=0;i<this.tail.length;i++)
  {
   var position=this.tail[i];
   var distance=dist(this.x,this.y,position.x,position.y);
   if(distance<1)
   {
    println("starting over");
    this.total=0;
    this.tail=[];
   }
  }
 }
}
