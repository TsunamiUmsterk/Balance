var balance;
var database;
var gameState = 2;
var subtract;
var decrease;
var QR;

function preload() {
  QRImg = loadImage("QRImage.png");
}

function setup() {

  database = firebase.database();

  createCanvas(displayWidth, displayHeight/2);

  balance = getBalance();
  QR = createSprite(displayWidth/6*5, displayHeight/12, 50, 50);
  QR.addImage(QRImg);
  QRImg.resize(displayWidth/10, displayWidth/10);


  enter50 = createButton('50p');
  enter50.size(displayWidth/6, displayHeight/6);
  enter50.position(displayWidth/6*2, displayHeight/6);
  enter50.style("font-size","20px");
  enter50.style("background-color","#66f542");
  enter50.mousePressed(increase50);

  enter1 = createButton('1p');
  enter1.size(displayWidth/6, displayHeight/6);
  enter1.position(0, displayHeight/6);
  enter1.style("font-size","20px");
  enter1.style("background-color","#66f542");
  enter1.mousePressed(increase1);

  enter1b = createButton('£1');
  enter1b.size(displayWidth/6, displayHeight/6);
  enter1b.position(displayWidth/6*3, displayHeight/6);
  enter1b.style("font-size","20px");
  enter1b.style("background-color","#66f542");
  enter1b.mousePressed(increase1b);

  enter10 = createButton('10p');
  enter10.size(displayWidth/6, displayHeight/6);
  enter10.position(displayWidth/6, displayHeight/6);
  enter10.style("font-size","20px");
  enter10.style("background-color","#66f542");
  enter10.mousePressed(increase10);

  enter2 = createButton('£2');
  enter2.size(displayWidth/6, displayHeight/6);
  enter2.position(displayWidth/6*4, displayHeight/6);
  enter2.style("font-size","20px");
  enter2.style("background-color","#66f542");
  enter2.mousePressed(increase2);

  enter5 = createButton('£5');
  enter5.size(displayWidth/6, displayHeight/6);
  enter5.position(displayWidth/6*5, displayHeight/6);
  enter5.style("font-size","20px");
  enter5.style("background-color","#66f542");
  enter5.mousePressed(increase5);

  dent50 = createButton('-50p');
  dent50.size(displayWidth/6, displayHeight/6);
  dent50.position(displayWidth/6*2, displayHeight/3);
  dent50.style("font-size","20px");
  dent50.style("background-color","#f54242");
  dent50.mousePressed(decrease50);

  dent1 = createButton('-1p');
  dent1.size(displayWidth/6, displayHeight/6);
  dent1.position(0, displayHeight/3);
  dent1.style("font-size","20px");
  dent1.style("background-color","#f54242");
  dent1.mousePressed(decrease1);

  dent1b = createButton('-£1');
  dent1b.size(displayWidth/6, displayHeight/6);
  dent1b.position(displayWidth/6*3, displayHeight/3);
  dent1b.style("font-size","20px");
  dent1b.style("background-color","#f54242");
  dent1b.mousePressed(decrease1b);

  dent10 = createButton('-10p');
  dent10.size(displayWidth/6, displayHeight/6);
  dent10.position(displayWidth/6, displayHeight/3);
  dent10.style("font-size","20px");
  dent10.style("background-color","#f54242");
  dent10.mousePressed(decrease10);

  dent2 = createButton('-£2');
  dent2.size(displayWidth/6, displayHeight/6);
  dent2.position(displayWidth/6*4, displayHeight/3);
  dent2.style("font-size","20px");
  dent2.style("background-color","#f54242");
  dent2.mousePressed(decrease2);

  dent5 = createButton('-£5');
  dent5.size(displayWidth/6, displayHeight/6);
  dent5.position(displayWidth/6*5, displayHeight/3);
  dent5.style("font-size","20px");
  dent5.style("background-color","#f54242");
  dent5.mousePressed(decrease5);

}

function draw() {
  background(250);  

  textSize(40);
  fill("orange");
  text("Balance: £" + balance, displayWidth/2-150, 100);

  drawSprites();
}  

function increase1() {
  updateBalance(1/100);
}

function increase10() {
  updateBalance(1/10);
}

function increase50() {
  updateBalance(1/2);
}

function increase1b() {
  updateBalance(1);
}

function increase2() {
  updateBalance(2);
}

function increase5() {
  updateBalance(5);
}

function decrease1() {
  updateBalance(-1/100);
}

function decrease10() {
  updateBalance(-1/10);
}

function decrease50() {
  updateBalance(-1/2);
}

function decrease1b() {
  updateBalance(-1);
}

function decrease2() {
  updateBalance(-2);
}

function decrease5() {
  updateBalance(-5);
}

function getBalance() {
  var balanceRef = database.ref("balance");
  balanceRef.on("value", function(data) { 
       balance = data.val();
  })
}

function updateBalance(value) {
    database.ref("/").update({
       balance : balance + value
  });
}
