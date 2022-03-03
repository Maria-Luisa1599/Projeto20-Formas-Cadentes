
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
    var plane_options={
		isStatic: true
	}

    var bloco1_Opções = {
		restutition:0.5,
		friction:0.02,
	    frictionAir:0
	}
    var bloco2_Opções = {
		restutition:0.7,
		friction:0.01,
	    frictionAir:0.1
	}
    var bloco3_Opções = {
		restutition:0.01,
		friction:1,
	    frictionAir:0.3
	}

	fill();
	rectMode(CENTER);
	ellipseMode(RADIUS);
	
	bloco1 = Bodies.circle(220,10,10,bloco1_Opções)
	World.add(world,block1);

	bloco2 = Bodies.rectangle(110,50,10,15,bloco2_Opções)
	World.add(world,block2);

	bloco3 = Bodies.circle(350,50,15,bloco3_Opções)
	World.add(world,block3);
 
	groundObj = new ground(width/2,670,widht,20);
	leftSide = new ground(1100,600,20,120);
}


function draw() {
  background("white");
  groundObj.display();
  update();
  ellipse(bloco1.position.x, bloco1.position.y,40);
  rect();
  Engine.update(enigine);
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce;
	}
}

