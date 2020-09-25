const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var body1
var ground
function setup() {
  createCanvas(800,400);
 engine=Engine.create();
 world=engine.world;
 var props={
   restitution:1.0
 }
body1=Bodies.rectangle(400,100,70,70,props);
World.add(world,body1);
ground=Bodies.rectangle(400,300,800,10,{isStatic:true});
World.add(world,ground);
}

function draw() {
  background(0);
  Engine.update(engine)
  rectMode(CENTER);  
  rect(body1.position.x,body1.position.y,70,70);
  rect(ground.position.x,ground.position.y,800,10);
}