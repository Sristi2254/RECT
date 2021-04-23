const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
    box1 =  new Box(200,140,50,50);
    box2 = new Box(200,50,50,100);

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);


}

function draw(){
    background(0);
    Engine.update(engine);

   
    rect(ground.position.x,ground.position.y,400,20);

    box1.display();
    box2.display();
}
