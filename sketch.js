var   bg,backImg;
var    tom,tom1,tom2,tom3;
var     jerry,jerry1,jerry2;jerry3;
function preload() {
backImg=loadImage("images/garden.png");
tom1=loadAnimation("images/cat1.png");
tom2=loadAnimation ("images/cat2.png","images/cat3.png");
tom3=loadAnimation ("images/cat4.png");  
jerry1=loadAnimation ("images/mouse1.png");       
jerry2=loadAnimation ("images/mouse2.png","images/mouse3.png");   
jerry3=loadAnimation ("images/mouse4.png");      
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    tom=createSprite(500,600)
    tom.addAnimation("tom sleeping",tom1);
    tom.scale=0.2;
    jerry=createSprite (200,600);
    jerry.addAnimation ("jerry stands",jerry1);
    jerry.scale=0.15;
    //create tom and jerry sprites here

}

function draw() {
    background  (backImg)
    //Write condition here to evalute if tom and jerry collide
if (tom.x-jerry.x < (tom.width-jerry.width)/2){
    tom.velocityX=0;
    tom.addAnimation("tomAfraid",tom3);
    tom.changeAnimation ("tomAfraid");
    tom.x=300;
    tom.scale=0.2;
    jerry.addAnimation("lastImg",jerry3);
    jerry.changeAnimation ("lastImg");
    jerry.scale=0.15;
    
}

    drawSprites();
    
}

function keyPressed(){
if (keyCode  === LEFT_ARROW){ 
    tom.velocityX=-3;
    tom.addAnimation("tomWalking",tom2);
    tom.changeAnimation ("tomWalking");    
    jerry.addAnimation("jeeryTeeasing",jerry2);
    jerry.changeAnimation("jeeryTeeasing");
}
  //For moving and changing animation write code here                      


}

