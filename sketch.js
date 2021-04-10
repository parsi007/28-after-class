
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint=Matter.Constraint;



function preload()
{
boy=loadImage("boy.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stoneobj=new Stone(235,420,30);
mango1=new Mango(1100,100,30);
mango1=new Mango(1100,100,30);
mango1=new Mango(1100,100,30);
mango1=new Mango(1100,100,30);
mango1=new Mango(1100,100,30);
mango1=new Mango(1100,100,30);
mango1=new Mango(1100,100,30);
mango1=new Mango(1100,100,30);
mango1=new Mango(1100,100,30);
mango1=new Mango(1100,100,30);
mango1=new Mango(1100,100,30);
treeobj=new Tree(1050,580);
groundobj=new Ground(width/2,600,width,20);
launcherobj=new Launcher(stoneobj.body,{x:235,y:420});

var render=Render.create({
	element:document.body,
	engine:engine,
	options:{
	width:1300,
	height:600,
	wireframes:false	
	}
})



	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(230);
  textSize(25);
  text("PRESS SPACE",50,50);
  image(boy,200,340,200,300);
  treeobj.display();
  stoneobj.display();
  mango1.display();
  mango2.display();
  mango4.display();
  mango5.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango3.display();
  mango12.display();
  mango6.display();
 
  groundobj.display();
launcherobj.display();
detectcollision(stoneobj,mango1)
detectcollision(stoneobj,mango2)
detectcollision(stoneobj,mango3)
detectcollision(stoneobj,mango4)
detectcollision(stoneobj,mango5)
detectcollision(stoneobj,mango6)
detectcollision(stoneobj,mango7)
detectcollision(stoneobj,mango8)
detectcollision(stoneobj,mango9)
detectcollision(stoneobj,mango10)
detectcollision(stoneobj,mango11)
detectcollision(stoneobj,mango12)
  drawSprites();
 
}



