class Diver {
  constructor(x,y){
    const img = new Image();
    img.onload = () => {
      this.img = img;
      const ratio = img.naturalWidth/img.naturalHeight;
      this.w = 45; 
      this.h = this.w/ratio;
      this.x = x;
      this.y = y;
      this.speedX = 0;
      this.speedY = 0;
    }
    img.src= "./img/diver-2-1.png"
  }

  draw() {
    if (!this.img) return;
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }
  
  // method to go up 
  moveUp() {
    if (this.y < 0) {this.y = H/2}
    if (this.y > H) {gameover}
    return this.y -=10;
  }

  moveDown() {
    if (this.y > H) {gameover}
    return this.y +=10;
  }

}