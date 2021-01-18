const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var thunder_1
var thunder_2
var thunder_3
var thunder_4
var engine,world
var drops = [];
var rand;
var maxDrops=100;
var thunderCreatedFrame=0;

function preload(){
thunder_1=loadImage ("images/thunderbolt/1.png");
thunder_2=loadImage("images/thunderbolt/2.png");
thunder_3=loadImage("images/thunderbolt/3.png");
thunder_4=loadImage("images/thunderbolt/4.png"); 
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    umbrella = new umbrella(200,500);

    //creating drops
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new createdrop(random(0,400), random(0,400)));
        }

    }
    
}

function draw(){
    Engine.update(engine);
    background(0); 

    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder_1);
            break;
            case 2: thunder.addImage(thunder_2);
            break; 
            case 3: thunder.addImage(thunder_3);
            break;
            case 4: thunder.addImage(thunder_4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
}   
if(thunderCreatedFrame + 10 ===frameCount && thunder){
    thunder.destroy();
}

umbrella.display();

//displaying rain drops
for(var i = 0; i<maxDrops; i++){
    drops[i].showdrop();
    drops[i].updateY()
    
}

drawSprites();
}
