var FORM
var banner,bannerIMG;
var database;

function preload() {
    bannerIMG = loadImage("img/banner.png");
}

function setup() {
    createCanvas(600,600);

    database = firebase.database();

    form = new Form();

    banner = createSprite(300,75,10,10);
    banner.addImage(bannerIMG);
}

function draw() {
    background(255);

    textSize(20);
    fill(0);
    text("UID :",120,190);
    text("E-Mail :",96,240);
    text("Password :",65,290);

    form.display();
    drawSprites();
}
