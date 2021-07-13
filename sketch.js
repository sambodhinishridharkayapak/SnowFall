const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
var bg;
var land;
var flakes=[];
var world,engine;
 function preload()
 {
   bg=loadImage("snow1.jpg");
  
 }
function setup() {
  createCanvas(1200,550);
  engine=Engine.create();
  world=engine.world;

  land = new ground(600,520,30,1200);

  
}

function draw() {
  background(bg);  
  Engine.update(engine);

land.display();

  if(frameCount%10===0)
  {
    flakes.push(new snow(random(0,1200),0,50));
  }
  for(var i=0;i<flakes.length;i++)
  {
    flakes[i].display();
  }

}