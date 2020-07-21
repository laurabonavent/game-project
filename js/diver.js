class Diver {
  constructor(x,y){
    const img = new Image();
    img.onload = () => {
      this.img = img;
      const ratio = img.naturalWidth/img.naturalHeight;
      this.w = 360; 
      this.h = this.w/ratio;
      this.x = x;
      this.y = y;
      this.speedX = 0;
      this.speedY = 9;
      this.gravity = 0.0025;
      this.gravitySpeed = 0;
    }
    img.src= "./img/diver-2-1.png"
  }

  draw() {
    if (!this.img) return;
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }
  
  // method to go up 
  moveUp() {
    /*if (this.y < 0) {this.y = H/2}
    if (this.y > H) {gameover}*/
    return this.y -= this.speedY;
  }

  moveDown() {
    this.gravitySpeed += this.gravity;
    this.y += this.speedY + this.gravitySpeed; 
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.w;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.h;
  }

  hits(animal) {
      if (this.bottom() > animal.top() 
      && this.top() < animal.bottom() 
      && this.right() > animal.left() 
      && this.left() < animal.right()) 
      { 
        return gameover = true;
        console.log("you hit an animal!");
      }
  }
  
  pickUp(waste) {
    if (this.bottom() > waste.top() 
      && this.top() < waste.bottom() 
      && this.right() > waste.left() 
      && this.left() < waste.right()) 
      { 
        return point++;
        console.log("you pick up a waste");
      }
  }  
}