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
let point = 0; 

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
  background();
  diver = new Diver(10, H/2);
  requestAnimationFrame(animLoop);
}

// draw elements on the page 
function draw() {
  //draw diver
  diver.moveDown();
  diver.draw();
  
  //draw wastes et fait bouger vers la gauche
  if (frames % 200 === 0) {
    const type = randomWaste();
    var waste = new Waste(type);
    wastes.push(waste);
  }
  wastes.forEach((el)=> {
    el.draw();
  })
  for (i = 0; i < wastes.length; i++) {
    wastes[i].x += -5; // ç afait défiler à gauche 
  }

  // draw animals
  if (frames % 120 === 0) {
    const type = randomAnimal();
    var animal = new Animal(type);
    animals.push(animal);
  }
  animals.forEach((el)=> {
    if ((wastes.y === animals.y) && (wastes.x === animals.x)) {
      !el.draw();
    } else {
    el.draw();}
  })
  for (i = 0; i < animals.length; i++) {
    animals[i].x += -5; // ça fait défiler à gauche 
  }

  /*// waste 
  for (waste of wastes) {
    if (diver.pickUp(waste)) {
      console.log('picked up');
      point +=1;
      console.log(point);
    }
  }

  //animals
  for (animal of animals) {
    if (diver.hits(animal)) {
      console.log('crashed');
      gameover = true;
    }
  }*/



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

// background
function background() {
  const img = new Image();
  img.src = './img/background-game.jpg';
  img.width = W;
  img.height = H;
  var speed = 1; // plus elle est basse, plus c'est rapide
  var y = 0;

  var dx = 0.75;
  var imgW;
  var imgH;
  var x = 0;
  var clearX;
  var clearY;

  img.onload = function() {
      imgW = img.width;
      imgH = img.height; 
      
      if (imgW > W) {
          x = W - imgW;
      }
      if (imgW > W) {
          clearX = imgW;
      } else {
          clearX = W;
      }
      if (imgH > H) {
          clearY = imgH;
      } else {
          clearY = H;
      }
      return setInterval(draw, speed);
  }

  function draw() {
      ctx.clearRect(0, 0, clearX, clearY); 
      
      if (imgW <= W) {
          if (x < W) {
              x = x + imgW;
          }
          if (x > 0) {
              ctx.drawImage(img, -imgW + x, y, imgW, imgH);
          }
          if (x - imgW > 0) {
              ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
          }
      } else {
          if (x > (W)) {
              x = W - imgW;
          }
          if (x > (W-imgW)) {
              ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
          }
      } 
      ctx.drawImage(img, x, y,imgW, imgH);
      x -= dx;
  }
}




// Pour jouer 
document.onkeydown = (e) => {
  if (e.keyCode === 38) {diver.moveUp()};
  if (e.keyCode === 40) {diver.moveDown()};
}

// compter les points 


// game over 