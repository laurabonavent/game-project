var ctx = document.querySelector('canvas').getContext('2d');
var W = ctx.canvas.width;
var H = ctx.canvas.height;

let diver;
let waste = [];
let animal = [];

// draw the infinite background 
function background() {
  const img = new Image();
  img.src = './img/background-game.jpg';
  img.width = W;
  img.height = H;
  var speed = 25; // plus elle est basse, plus c'est rapide
  var scale = 1.05;
  var y = -4.5; // décalage vertical

  // Programme principal

  var dx = 0.75;
  var imgW;
  var imgH;
  var x = 0;
  var clearX;
  var clearY;
  var ctx;

  img.onload = function() {
      imgW = img.width * scale;
      imgH = img.height * scale;
      
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
      
      // récupérer le contexte du canvas
      ctx = document.getElementById('canvas').getContext('2d');
  
      // définir le taux de rafraichissement
      return setInterval(draw, speed);
  }

  function draw() {
      ctx.clearRect(0, 0, clearX, clearY); // clear the canvas
      
      // si image est <= taille du canvas
      if (imgW <= W) {
          // réinitialise, repart du début
          if (x > W) {
              x = -imgW + x;
          }
          // dessine image1 supplémentaire
          if (x > 0) {
              ctx.drawImage(img, -imgW + x, y, imgW, imgH);
          }
          // dessine image2 supplémentaire
          if (x - imgW > 0) {
              ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
          }
      }

      // image est > taille du canvas
      else {
          // réinitialise, repeart du début
          if (x > (W)) {
              x = W - imgW;
          }
          // dessine image supplémentaire
          if (x > (W-imgW)) {
              ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
          }
      }
      // dessine image
      ctx.drawImage(img, x, y,imgW, imgH);
      // quantité à déplacer
      x += dx;
  }
  }


    function draw() {
        ctx.clearRect(0, 0, clearX, clearY); // clear the canvas
        
        // si image est <= taille du canvas
        if (imgW <= W) {
            // réinitialise, repart du début
            if (x > W) {
                x = -imgW + x;
            }
            // dessine image1 supplémentaire
            if (x > 0) {
                ctx.drawImage(img, -imgW + x, y, imgW, imgH);
            }
            // dessine image2 supplémentaire
            if (x - imgW > 0) {
                ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
            }
        }

        // image est > taille du canvas
        else {
            // réinitialise, repeart du début
            if (x > (W)) {
                x = W - imgW;
            }
            // dessine image supplémentaire
            if (x > (W-imgW)) {
                ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
            }
        }
        // dessine image
        ctx.drawImage(img, x, y,imgW, imgH);
        // quantité à déplacer
        x += dx;
  }


function startGame() {
  ctx.clearRect(0,0,W,H);
  background();
  diver = new Diver(0, H/2);
  
}

startGame();
