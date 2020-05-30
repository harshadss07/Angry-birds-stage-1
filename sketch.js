const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground1;
var pig1;
var log1;
var box3;
var box4;
var pig2;
var log2;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    log2 = new log(810,180,300,PI/7);
    ground1 = new ground(600,390,1200,20);
    pig1 = new pig(800,350);
    log1 = new log(800,260,300,PI/2);
    pig2 = new pig(800,220);
    bird1 = new bird(100,100);
}

function draw(){
    background(255);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground1.display();
    pig1.display();
    log1.display();
    pig2.display();
    box3.display();
    box4.display();
    log2.display();
    bird1.display();
    console.log(ground1)
}