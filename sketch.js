
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;

var angle=60;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 1.00,
    frictionAir:0.05
  }
   
   var ground_options ={
     isStatic: true
   };
  
   btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  ground1 = Bodies.rectangle(100,300,100,20,ground_options);
  World.add(world,ground1);

  ball1 = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball1);
  
  ball2 = Bodies.circle(50,50,20,ball_options);
  World.add(world,ball2);

  ground = Bodies.rectangle(100,400,650,20,ground_options);
  World.add(world,ground); 
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
  Matter.Body.rotate(ground1,angle)
 push();
  translate(ground1.position.x,ground1.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  
  angle +=0.1;

 

  ellipse(ball1.position.x,ball1.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  rect(ground.position.x,ground.position.y,650,20);
 
  console.log(ground.position.y);

  
  
}

function vForce()
{
  Matter.Body.applyForce(ball1,{x:0,y:0},{x:0,y:-0.05});
  Matter.Body.applyForce(ball2,{x:0,y:0},{x:0,y:-0.05});
}
  