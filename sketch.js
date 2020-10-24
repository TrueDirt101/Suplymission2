var helicopterIMG, helicopterSprite, packageSprite,packageIMG,Box1sprite,Box2sprite;
var packageBody,ground,Box1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-100, width,20);
	groundSprite.shapeColor=color(255);

    Box1sprite=createSprite(width/2,height-120,150,20)
	Box1sprite.shapeColor=color(255,0,0);

	Box2sprite=createSprite(width/2.5,height-160,20,100)
	Box2sprite.shapeColor=color(255,0,0);

	Box3sprite=createSprite(width/1.7,height-160,20,100)
	Box3sprite.shapeColor=color(255,0,0);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 190 , {isStatic:true} );
	World.add(world, ground);

	Box1 = Bodies.rectangle(width/2,640,100,150,{isStatic:true})
	World.add(world, Box1);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  drawSprites();
  keyPressed();
}

function keyPressed() {
 if (keyCode == DOWN_ARROW) { 
	Matter.Body.setStatic(packageBody, false) ;
  }
  
}
 



