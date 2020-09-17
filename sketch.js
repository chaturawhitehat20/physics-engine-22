
//Engine, world, bodies
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var canvas,engine,world,object,ground;

function setup() {
canvas = createCanvas(400,400);
engine = Engine.create();//chatura's engine
world = engine.world;
var options  = { restitution:1.0 }
object = Bodies.rectangle(200,100,50,50,options);
World.add(world,object);




var options1  = { isStatic : true }

ground =Bodies.rectangle(200,320,300,20,options1);
World.add(world,ground);

console.log(object.type);
console.log(object.position.x);

}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50); 
  drawSprites();
}
