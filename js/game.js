// variables globales 
var ctx = document.querySelector('canvas').getContext('2d');
var W = ctx.canvas.width;
var H = ctx.canvas.height;

let diver;
let wastes = []
let animals = [];
let frames = 0;
let raf;
let gameover;
let point; 
const weightforce =  0.4;
const MAXSPEED = 6;
let pushforce = 0;

// au loading de la page 
window.onload = () => {
  ctx.clearRect(0,0,W,H);
  startGame();
}

// au démarrage du jeu 
function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }
  gameover = false;
  point = 0;
  
  diver = new Diver(30, H/2);
  requestAnimationFrame(animLoop);
}

// animloop
function animLoop() {
  frames++;
  draw();

  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
  } else {
    cancelAnimationFrame(raf);
  }
}

//

const img = new Image()
img.src = './img/background-game.png'
const backgroundImage = {
  img: img,
  x: 0,
  speed: -1,

  move: function() {
      this.x += this.speed;
      this.x %= W; // modulo width
  },

  draw: function() {
    ctx.drawImage(this.img, this.x, 0);
    ctx.drawImage(this.img, this.x + W, 0);
  }
};


// draw elements on the page 
function draw() {
  ctx.clearRect(0,0, W,H);

  //background
  backgroundImage.move();
  backgroundImage.draw();

  //draw diver
  //diver.moveDown();
  diver.update();
  diver.draw();

  //draw wastes et fait bouger vers la gauche
  if (frames % 120 === 0) {
    const type = randomWaste();
    var waste = new Waste(type);
    wastes.push(waste);
  }
  wastes.forEach((el)=> {
    el.draw();
  })
  for (i = 0; i < wastes.length; i++) {
    wastes[i].x += -7; // ça fait défiler à gauche 
  }
  
    // draw animals
  if (frames % 150 === 0) {
    const type = randomAnimal();
    var animal = new Animal(type);
    animals.push(animal);
  }
  animals.forEach((el)=> {
    el.draw();}
  )
  for (i = 0; i < animals.length; i++) {
    animals[i].x += -5; // ça fait défiler à gauche 
  }

  // pick up waste 
  for (waste of wastes) {
    if (diver.pickUp(waste)) {
      console.log(point);
    }
  }

  //touch animals
  for (animal of animals) {
    if (diver.hits(animal)) {
      console.log('crashed');
      gameover = true;
    }
  }

  // write points 
  ctx.fillStyle = "white";
  ctx.fillRect(W-380, 7, 360, 50)
  
  ctx.font = "bold 35px Arial";
  ctx.textAlign = "right";
  ctx.fillStyle = "#027c8a";
  ctx.fillText(`${point} wastes picked up`, W-40, 42)
}

function gameOver () {
  if (gameover) {

  }
}

// Pour jouer 
document.onkeydown = function(e) {
  if (e.keyCode === 38) {
    console.log('haut')
  pushforce = -4;} // start pushing          
}
document.onkeyup = function(e) {
  if (e.keyCode === 38) {
  pushforce = 0; }// stop pushing
}
