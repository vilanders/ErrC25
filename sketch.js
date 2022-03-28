//var -------> const

//const matterMin = require("./matter.min");

const Engine = Matter.Engine; //Crear espacio de nombre para Engine
const World = Matter.World; //Crear espacio de nombre para World
const Bodies = Matter.Bodies; //Crear espacio de nombre para Bodies
const Body = Matter.Body; //Crear espacio de nombre para Body
var botton;
var angle=60;
var fan, fan2, fan3, fan4;



function setup() {
  createCanvas(600,600);

  botton = createImg("up.png");
  botton.position(25,30);
  botton.size(50,50);
  botton.mouseClicked(force);

   engine = Engine.create(); //crear engine = motor //esto es una función, yaque tiene dos parentesis vacíos.
   world = engine.world; //Agregar world a engine
                             //el Engine de la linea 17 esta en mayúsculas por que lo mandamos a llamar
   
fan = new rectangulos(50,370,50,30); // rectangulos con R  
fan2 = new rectangulos(150,370,50,30); // rectangulos con R 
fan3 = new rectangulos(250,370,50,30); // rectangulos con R 
fan4 = new rectangulos(350,370,50,30); // rectangulos con R 
  
   var ball_options = {
    restitution: 0.95, //Rebote
    frictionAir:0.01 //Gravedad
  }
   
   var ground_options = {
     isStatic: true
   };
  

  //ground = Bodies.rectangle(200,390,400,20,ground_options); //creación del piso
  //World.add(world,ground); //agregar al mundo
  //ground1 = Bodies.rectangle(100,300,100,20,ground_options); //creación del piso  // DESCOMENTAR ESTA LINEA
  //World.add(world,ground1); //agregar al mundo   // DESCOMENTAR ESTA LINEA
//crear un fondo
//agregarlo a world

  ball = Bodies.circle(100,10,20,ball_options);  
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine); //=drawSprites();
  ellipse(ball.position.x,ball.position.y,20); //funcion para la pelota
  rect(ground1.position.x,ground1.position.y,650,20);//escribir una función rectangle para mostrar el suelo.
  fan.show();
  fan2.show();
  fan3.show();
  fan4.show();

  
  //rect(ground.position.x,ground.position.y,650,20);
  
  //Matter.Body.rotate(ground,angle);
  //push();//nueva posición
  //translate(ground.position.x,ground.position.y);//moverlo
  //rotate(angle);
  //angle +=0.1;
  //rect(0,0,100,20);
  
  
  //pop();

  
  Engine.update(engine); //=drawSprites();
}

function force() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
