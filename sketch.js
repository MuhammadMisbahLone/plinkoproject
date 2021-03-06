const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;

function setup(){
  var canvas = createCanvas(600,500);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(300,490,600,20);
  division1 = new Divisions(60,420,10,120);
  division2 = new Divisions(120,420,10,120);
  division3 = new Divisions(180,420,10,120);
  division4 = new Divisions(240,420,10,120);
  division5 = new Divisions(300,420,10,120);
  division6 = new Divisions(360,420,10,120);
  division7 = new Divisions(420,420,10,120);
  division8 = new Divisions(480,420,10,120);
  division9 = new Divisions(540,420,10,120);
  //row 1
  plinko1 = new Plinko(40,50,10,10);
  plinko2 = new Plinko(140,50,10,10);
  plinko3 = new Plinko(260,50,10,10);
  plinko4 = new Plinko(360,50,10,10);
  plinko5 = new Plinko(460,50,10,10);
  plinko6 = new Plinko(560,50,10,10);
  //row 2
  plinko7 = new Plinko(90,100,10,10);
  plinko8 = new Plinko(200,100,10,10);
  plinko9 = new Plinko(310,100,10,10);
  plinko10 = new Plinko(410,100,10,10);
  plinko11 = new Plinko(510,100,10,10);
   //row 3
   plinko12 = new Plinko(40,150,10,10);
   plinko13 = new Plinko(140,150,10,10);
   plinko14 = new Plinko(260,150,10,10);
   plinko15 = new Plinko(360,150,10,10);
   plinko16 = new Plinko(460,150,10,10);
   plinko17 = new Plinko(560,150,10,10);
   //row 4
   plinko18 = new Plinko(90,200,10,10);
   plinko19 = new Plinko(200,200,10,10);
   plinko20 = new Plinko(310,200,10,10);
   plinko21 = new Plinko(410,200,10,10);
   plinko22 = new Plinko(510,200,10,10);
  //row 5
  plinko23 = new Plinko(40,250,10,10);
  plinko24 = new Plinko(140,250,10,10);
  plinko25 = new Plinko(260,250,10,10);
  plinko26 = new Plinko(360,250,10,10);
  plinko27 = new Plinko(460,250,10,10);
  plinko28 = new Plinko(560,250,10,10);
  //row 6
  plinko29 = new Plinko(90,300,10,10);
  plinko30 = new Plinko(200,300,10,10);
  plinko31 = new Plinko(310,300,10,10);
  plinko32 = new Plinko(410,300,10,10);
  plinko33 = new Plinko(510,300,10,10);
   //row 7
   plinko34 = new Plinko(40,350,10,10);
   plinko35 = new Plinko(140,350,10,10);
   plinko36 = new Plinko(260,350,10,10);
   plinko37 = new Plinko(360,350,10,10);
   plinko38 = new Plinko(460,350,10,10);
   plinko39 = new Plinko(560,350,10,10);
   particle1 = new Particle(90,30,10,10);
   particle2 = new Particle(200,30,10,10);
   particle3 = new Particle(310,30,10,10);
   particle4 = new Particle(410,30,10,10);
   particle5 = new Particle(510,30,10,10);
}
function draw(){
  background("black");
  Engine.update(engine);
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();
  division9.display();
  //row 1
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  //row 2
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  //row 3
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  //row 4
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
   //row 5
   plinko23.display();
   plinko24.display();
   plinko25.display();
   plinko26.display();
   plinko27.display();
   plinko28.display();
   //row 6
   plinko29.display();
   plinko30.display();
   plinko31.display();
   plinko32.display();
   plinko33.display();
   //row 7
   plinko34.display();
   plinko35.display();
   plinko36.display();
   plinko37.display();
   plinko38.display();
   plinko39.display();
   particle1.display();
   particle2.display();
   particle3.display();
   particle4.display();
   particle5.display();
}
function mouseDragged(){
  Matter.Body.setPosition(particle1.body, {x: mouseX , y: mouseY});
}