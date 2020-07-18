const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

let background;
let diver;
let waste = [];
let animal = [];

// draw the infinite background 
function Background() {
  this.img = new Image();
  this.img.src = './img/background-game.jpg';
  this.scale = 1.05;
  this.y = 0;
  this.dx = 0.5;
  this.imgW = this.img.width;
  this.imgH = this.img.height;
  this.x = 0;
  this.clearX = 0;
  this.clearY = 0;
  that = this;
  this.img.onload = function() {
    that.imgW = that.img.width * that.scale;
    that.imgH = that.img.height * that.scale;
    if (that.imgW > W) { that.x = W - that.imgW; }
    if (that.imgW > W) { that.clearX = that.imgW; } else { that.clearX = W; }
    if (that.imgH > H) { that.clearY = that.imgH; } else { that.clearY = H; }
  };
  
  this.draw = function() {
    if (that.imgW <= W) {
      if (that.x > W) { that.x = -that.imgW + that.x; }
      if (that.x > 0) { ctx.drawImage(that.img, -that.imgW + that.x, that.y, that.imgW, that.imgH); }
      if (that.x - that.imgW > 0) { ctx.drawImage(that.img, -that.imgW * 2 + that.x, that.y, that.imgW, that.imgH); }
    } else {
      if (that.x > (W)) { that.x = W - that.imgW; }
      if (that.x > (W - that.imgW)) { ctx.drawImage(that.img, that.x - that.imgW + 1, that.y, that.imgW, that.imgH); }
    }
    ctx.drawImage(that.img, that.x, that.y, that.imgW, that.imgH);
    that.x += that.dx;
    
  };
}

function startGame() {
  ctx.clearRect(0,0,W,H);
  background = new Background();
  diver = new Diver(0, H/2);
  
}

startGame();
