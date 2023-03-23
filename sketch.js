var canvas;
var backgroundImage, sh1_img, sh2_img;
var database, gameState;
var form, player, playerCount;
var allPlayers, sh1, sh2;
var sh = [];

function preload() {
  backgroundImage = loadImage("assets/bg.jpeg");
  sh1_img = loadImage("assets/shooter_1.png");
  sh2_img = loadImage("assets/shooter_2.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}