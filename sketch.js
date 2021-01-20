
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,paper1,dustbin1;
var dustbin2,dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground1=new Ground();
   paper1=new Paper();
   dustbin1=new Dustbin(1000,360,200,20);
   dustbin2=new Dustbin(900,320,20,100);
dustbin3=new Dustbin(1100,320,20,100);

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine)
  
 ground1.display();
 paper1.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
}



