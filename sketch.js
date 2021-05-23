var canvas;
var database;
//green red yellow blue
var greenhome,redhome,yellowhome,bluehome;
var gc1,gc2,gc3,gc4;
var rc1,rc2,rc3,rc4;
var yc1,yc2,yc3,yc4;
var bc1,bc2,bc3,bc4;
var gc1img,rc1img,yc1img,bc1img;
var diceholder;
var bg;

function preload() {
    bg = loadImage("img/board.png");
    gc1img = loadImage("img/mgreen.png");
    rc1img = loadImage("img/mred.png")
    yc1img = loadImage("img/myellow.png")
    bc1img = loadImage("img/mblue.png")
}


function setup() {
    canvas = createCanvas(712,712);
    canvas.position(400,10);
    database = firebase.database();

    diceholder = createSprite(50,245,70,70);

    greenhome = createSprite(150,150,180,180);
    greenhome.visible = false;

    //green
    yc1 = createSprite(107,500,0,0);
    yc1.addImage(yc1img);
    yc1.scale = 0.4;
    yc2 = createSprite(193,500,0,0);
    yc2.addImage(yc1img);
    yc2.scale = 0.4;
    yc3 = createSprite(107,590,0,0);
    yc3.addImage(yc1img);
    yc3.scale = 0.4;
    yc4 = createSprite(193,590,0,0);
    yc4.addImage(yc1img);
    yc4.scale = 0.4;

    //red
    rc1 = createSprite(517,90,0,0);
    rc1.addImage(rc1img);
    rc1.scale = 0.4;
    rc2 = createSprite(605,90,0,0);
    rc2.addImage(rc1img);
    rc2.scale = 0.4;
    rc3 = createSprite(517,180,0,0);
    rc3.addImage(rc1img);
    rc3.scale = 0.4;
    rc4 = createSprite(605,180,0,0);
    rc4.addImage(rc1img);
    rc4.scale = 0.4;

    //yellow
    gc1 = createSprite(107,90,0,0);
    gc1.addImage(gc1img);
    gc1.scale = 0.4;
    gc2 = createSprite(193,90,0,0);
    gc2.addImage(gc1img);
    gc2.scale = 0.4;
    gc3 = createSprite(107,180,0,0);
    gc3.addImage(gc1img);
    gc3.scale = 0.4;
    gc4 = createSprite(193,180,0,0);
    gc4.addImage(gc1img);
    gc4.scale = 0.4;

    //blue
    bc1 = createSprite(517,500,0,0);
    bc1.addImage(bc1img);
    bc1.scale = 0.4;
    bc2 = createSprite(605,500,0,0);
    bc2.addImage(bc1img);
    bc2.scale = 0.4;
    bc3 = createSprite(517,590,0,0);
    bc3.addImage(bc1img);
    bc3.scale = 0.4;
    bc4 = createSprite(605,590,0,0);
    bc4.addImage(bc1img);
    bc4.scale = 0.4;


}

function draw() {
    background(bg);

    textSize(32)
    text(mouseX+","+mouseY,mouseX,mouseY);

    //green
    fill("white")
    circle(105,105,50);
    circle(105,195,50);
    circle(193,105,50);
    circle(193,195,50);  
    
    //red
    circle(517,105,50);
    circle(605,105,50);
    circle(517,197,50);
    circle(605,196,50);  

    //yellow
    circle(105,518,50);
    circle(193,518,50);
    circle(105,610,50);
    circle(193,610,50);  

    //blue
    circle(517,518,50);
    circle(605,518,50);
    circle(517,609,50);
    circle(605,609,50);  


    drawSprites();
}