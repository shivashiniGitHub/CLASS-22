const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world

var ground

var ball;


function setup() {

  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world

  var options= {


    isStatic: true
  }

  ground = Bodies.rectangle(200,390,400,20,options)
  World.add(world,ground)
console.log(ground)
console.log(ground.position.x)
console.log(ground.position.y)
  
var property = {

  'restitution': 0.8
}

  ball = Bodies.circle(200,200,25,property)
  World.add(world,ball);
}

function draw() {
  background(0);  
  Engine.update(engine);
  fill("yellow");
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25);
}