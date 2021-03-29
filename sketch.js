const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var snow1;

function preload() {
  getBackgroundImg();
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  
  createCanvas(800,400);
  snow = new Snow(400, 200, 50, 50, this.body.angle);
}

function draw() {
  background(backgroundImg);  
  drawSprites();
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON= await response.json();

  var dateTime= responseJSON.datetime;
  var hour = dateTime.slice(11,13);

  if(hour>=06 && hour<=19){
     bg="snow2.jpg";
  }
  else{
      bg = "snow3.png";
  }

  backgroundImg = loadImage(bg);

 // console.log(hour);
}