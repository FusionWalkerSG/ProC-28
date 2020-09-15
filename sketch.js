const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
//First Pyramid
var flbox1,flbox2,flbox3,flbox4,flbox5;
var slbox1,slbox2,slbox3,slbox4;
var tlbox1,tlbox2,tlbox3;
var frlbox1,frlbox2;
var fnlbox;
//Second Pyramid
var olbox1,olbox2,olbox3;
var twlbox1,twlbox2;
var llbox;
//Catapult
var Rockthrower;
//Ground
var ground;
//Platforms and their stands
var platform1,platform2,pltfrm1stnd1,pltfrm1stnd2,pltfrm2stnd;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(450,390,900,20);
  makePyramid(); 
  makePlatform();
}

function draw() {
  background(255,127,80);
  Engine.update(engine);

  //Ground Display
  displayGround();
  //Pyramid display
  displayFirstPyramid();
  displaySecondPyramid();
  //Platform for pyramid's display
  displayPlatform();
  //Trick to find x,y position
  showMousePostition();
}

function displayGround(){
  push();
  fill(	rgb(34,139,34));
  ground.display();
  pop();
}

function showMousePostition(){
  push()
  fill("red")
  text(mouseX+" , "+ mouseY,mouseX,mouseY)
  pop()
}

function displayPlatform(){
  push();
  fill(192,192,192);
  platform1.display();
  platform2.display();
  pop();
  push();
  fill(46,41,58);
  pltfrm1stnd1.display();
  pltfrm1stnd2.display();
  pltfrm2stnd.display();
  pop();

}

function displayFirstPyramid(){
  push();
  fill(rgb(220,20,60));
  flbox1.display();
  flbox2.display();
  flbox3.display();
  flbox4.display();
  flbox5.display();
  pop();
  push();
  fill(rgb(255,215,0));
  slbox1.display();
  slbox2.display();
  slbox3.display();
  slbox4.display();
  pop();
  push();
  fill(rgb(127,255,212));
  tlbox1.display();
  tlbox2.display();
  tlbox3.display();
  fill(rgb(255,218,185));
  frlbox1.display();
  frlbox2.display();
  fill(rgb(0,255,255));
  fnlbox.display();
  pop();
}

function displaySecondPyramid(){
  push();
  fill(0,0,139);
  olbox1.display();
  olbox2.display();
  olbox3.display();
  pop();
  push();
  fill(255,0,0);
  twlbox1.display();
  twlbox2.display();
  pop();
  push();
  fill(0,255,255);
  llbox.display();
  pop();
}

function makePyramid(){
   //First level of first pyramid
   flbox1 = new Box(430,270,30,30);
   flbox2 = new Box(460,270,30,30);
   flbox3 = new Box(490,270,30,30);
   flbox4 = new Box(520,270,30,30);
   flbox5 = new Box(550,270,30,30);
   //Second level of first pyramid
   slbox1 = new Box(445,250,30,30);
   slbox2 = new Box(475,250,30,30);
   slbox3 = new Box(505,250,30,30);
   slbox4 = new Box(535,250,30,30);
   //Third level of first pyramid
   tlbox1 = new Box(460,220,30,30);
   tlbox2 = new Box(490,220,30,30);
   tlbox3 = new Box(520,220,30,30);
   //Fourth level of first pyramid
   frlbox1 = new Box(475,190,30,30);
   frlbox2 = new Box(505,190,30,30);
   //Final level of first pyramid
   fnlbox = new Box(490,170,30,30);
   //First level of second pyramid
   olbox1 = new Box(645,125,30,30);
   olbox2 = new Box(675,125,30,30);
   olbox3 = new Box(705,125,30,30);
   //Second level of second pyramid
   twlbox1 = new Box(660,110,30,30);
   twlbox2 = new Box(690,110,30,30);
   //Last level of second pyramid
   llbox = new Box(675,95,30,30);
}

function makePlatform(){
  //Platforms for the pyramids
  platform1 = new Ground(500,300,175,10);
  pltfrm1stnd1 = new Ground(430,345,10,80);
  pltfrm1stnd2 = new Ground(570,345,10,80);
  platform2 = new Ground(680,130,100,10);
  pltfrm2stnd = new Ground(680,260,10,250);
}