var cat , cat_anime , cat_default , cat_ending ;
var mouse , mouse_endimg , mouse_anime , mouse_default ;
var bg , bg_anime ;


function preload() {
    //load the images here
mouse_anime = loadAnimation("images/mouse2.png", "images/mouse3.png");
cat_anime = loadAnimation("images/cat2.png","images/cat3.png");
mouse_default = loadAnimation("images/mouse1.png");
cat_default = loadAnimation("images/cat1.png");
cat_ending =  loadAnimation("images/cat4.png");
mouse_ending = loadAnimation("images/mouse4.png");
bg_anime = loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

bg = createSprite(500,400,10,10);
bg.addImage(bg_anime);

cat = createSprite(800,650,20,20);
cat.addAnimation("beginning", cat_default);
cat.addAnimation("walking", cat_anime);
cat.addAnimation("ending", cat_ending);
cat.scale=0.15;
cat.debug=true;
cat.setCollider("rectangle",0,0,1000,1000);



mouse = createSprite(100,650,10,10);
mouse.addAnimation("beginning", mouse_default);
mouse.addAnimation("dancing", mouse_anime);
mouse.addAnimation("ending",mouse_ending);
mouse.scale=0.14;
mouse.debug=true;
mouse.setCollider("rectangle",0,0,1000,1000);


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
keyPressed();

if(cat.x - mouse.x < cat.width/2 + mouse.width/2
 && mouse.x - cat.x < cat.width/2 + mouse.width/2){
cat.changeAnimation("ending", cat_ending);
mouse.changeAnimation("ending", mouse_ending);
cat.velocityX=0;
cat.velocityY=0;


}


    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW ){
    cat.velocityX=-3;
    cat.changeAnimation("walking",cat_anime);
    cat.scale = 0.17;
    mouse.changeAnimation("dancing",mouse_anime);
    mouse.scale = 0.11;
}
  //For moving and changing animation write code here
}





