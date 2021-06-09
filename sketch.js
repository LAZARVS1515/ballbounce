
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var angle=60;
var poly;
var wedge;
var wall;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    'restitution': 5,
    'frictionAir':0.05
  }
   
   var ground_options ={
     isStatic: true
   }
   var wedge_options ={
     isStatic: true
   }
   var wall_options ={
isStatic: true
   }  
   
  
    

  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(150,10,20,ball_options);
  World.add(world,ball);
  
  wedge = Bodies.rectangle(100,200,100,10,wedge_options);
  World.add(world,wedge)
  
  wall = Bodies.rectangle(300,200,50,10,wall_options)
  World.add(world,wall);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  
  Matter.Body.rotate(wedge, angle);

  push();
  translate(wedge.position.x,wedge.position.y);
  rotate(angle);
  rect(0,0,100,10);
  pop();
  angle+=0.1

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(wall.position.x,wall.position.y,50,10); 

}

