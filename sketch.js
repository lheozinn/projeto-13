var garden,rabbit;
var gardenImg,rabbitImg;

function preload()
{
  gardenImg = loadImage("star-wars.png");
  rabbitImg = loadImage("nave-ovni.png");
  appleImg = loadImage("foguete-amarelo.png");
  orangeImg = loadImage("foguete-vermelho.png");
  redImg = loadImage("foguete.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.20;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();

  var select_sprites = Math.round(random(1,3));

  if (frameCount % 80 == 0 ) 
   {
    if (select_sprites == 1) 
      {
        createApples();
      }
      else if (select_sprites == 2)
      {
        createOrange(); 
      } 
      else
      {
        createRed();
      }
    }

  rabbit.x = World.mouseX;
  
}


function createApples() 
{
  apple = createSprite(random(50, 350),40, 10, 10);
  apple.addImage(appleImg);
  apple.scale=0.17;
  apple.velocityY = 5;
  apple.lifetime = 150;
}

function createOrange()
{
  orangeL = createSprite(random(50, 350),40, 10, 10);
  orangeL.addImage(orangeImg);
  orangeL.scale=0.19;
  orangeL.velocityY = 9;
  orangeL.lifetime = 150;
}


function createRed()
{
  redL = createSprite(random(50, 350),40, 10, 10);
  redL.addImage(redImg);
  redL.scale=0.02;
  redL.velocityY = 7;
  redL.lifetime = 150;
}








