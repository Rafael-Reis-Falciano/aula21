
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var bola, solo;
var esquerda, direita;

function preload()
{
	
}

function setup() 
{
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = 
	{
		restitution: 0.3,
		frictionAir:1,
	}

	var static_options = {
		isStatic: true,
	}

	//Create the Bodies Here.

	bola = Matter.Bodies.circle(150, 670, 10, ball_options);
	World.add(world, bola);

	solo = Matter.Bodies.rectangle(width/2, 695, width, 10, static_options);
	World.add(world, solo);

	esquerda = Matter.Bodies.rectangle(600, 670, 10, 40, static_options);
	direita = Matter.Bodies.rectangle(650, 670, 10, 40, static_options);
	World.add(world, esquerda);
	World.add(world, direita);

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);

  ellipse(bola.position.x, bola.position.y, 10);

  rect(solo.position.x, solo.position.y, width, 10)
  rect(esquerda.position.x, esquerda.position.y, 10, 40)
  rect(direita.position.x, direita.position.y, 10, 40)

}

function keyPressed()
{
	if(keyCode === 32)
	{
		Matter.Body.applyForce(bola, {x: 0, y: 0}, {x: 15, y: -11});
	}
 
}

