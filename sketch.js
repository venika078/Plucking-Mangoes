
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var boy,boyImg;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 450);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stone = new Stone(125,250,20,20)
ground=new Ground(500,435,1100,25)

boy=new Boy(200,200,200,450)
mango1 = new Mango(850,200,20,20)
mango2 = new Mango(900,159,20,20)
mango3 = new Mango(371,400,20,20)
mango4 = new Mango(584,310,20,20)
mango5 = new Mango(359,39,20,20)
chain = new Chain(stone.body,{x:200,y:100});
tree = new Tree(750,220,700,450)
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
background("grey")

text ("Press Space To Play Again",200,200)
stone.display();
ground.display();
//tree.display();
boy.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
chain.display();

detectollision(stone,mango1);
detectollision(stone,mango2);
detectollision(stone,mango3);
detectollision(stone,mango4);
detectollision(stone,mango5);

  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(boy.body,{x:mouseX,y:mouseY})
	}
	
	function mouseReleased(){
	stone.fly();
	}

	function keyPressed(){
		if(keyCode === 32){
			Matter.Body.setPosition(stone.body,{x:235,y:420});
			chain.attach(stone.body);
		}
	}

	function detectollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lmango.r){
	Matter.Body.setStatic(lmango.body,false)
}
	}

