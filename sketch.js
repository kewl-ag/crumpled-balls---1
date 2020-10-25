
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var ball;
var b1,b2,b3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	 ground = new Ground(600,680,1200,10);

	 var options={
isStatic : false,
restitution : 0.3,
friction:0.5,
density : 2

	 }

	ball =  Matter.Bodies.circle(200, 650, 10, options);

	World.add(world,ball);

	b2 = Matter.Bodies.rectangle(1000,670,100,10,{isStatic : true});
World.add(world,b2);

b1 = Matter.Bodies.rectangle(950,620,10,100,{isStatic : true});
World.add(world,b1);

b3 = Matter.Bodies.rectangle(1050,620,10,100,{isStatic : true});
World.add(world,b3);


	Engine.run(engine);
  
}


function draw() {

	 Engine.update(engine);
  rectMode(CENTER);
  background(0);
fill("red");
  
 ground.display();
ellipse(ball.position.x,ball.position.y,30,30);

rect(b2.position.x,b2.position.y,100,10);

rect(b1.position.x,b1.position.y,10,100);

rect(b3.position.x,b3.position.y,10,100);

jayshree();
}


function jayshree() {
	if (keyCode === 32) {
		console.log("hi");

Matter.Body.applyForce(ball,ball.position,{x : 5 , y : -10});

}

}



