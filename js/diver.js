class Diver {
  constructor(x,y){
    const img = new Image();
    img.onload = () => {
      this.img = img;
      const ratio = img.naturalWidth/img.naturalHeight;
      this.w = 200; 
      this.h = this.w/ratio;
      this.x = x;
      this.y = y;
      //this.speedX = 0;
      //this.speedY = 0.001;
      //this.gravity = 0.0010;
      //this.gravitySpeed = 0;
      this.vx = 0;
      this.vy = 0;
    }
    img.src= "./img/diver-2-1.png"
  }

  draw() {
    if (!this.img) return;
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }
  
  // method to go up 
  /*moveUp() {
    if (this.y < 0) {gameover = true}
    return this.y -= 30 ;
  }

  moveDown() {
    //this.gravitySpeed += this.gravity;
    //this.y += this.speedY + this.gravitySpeed; 
    
    //if (this.y > H) {gameover = true}
  }*/

  update() {
    if (this.y > H) {gameover = true}
    if (this.y < 0) {gameover = true}
    const accy = weightforce + pushforce;

    this.vy += accy; 

    if (this.vy > MAXSPEED) this.vy = MAXSPEED; // can't be >MAXSPEED
    if (this.vy < -MAXSPEED) this.vy = -MAXSPEED; // can't be <-MAXSPEED

    this.y += this.vy;
    this.x += this.vx;

    const rockbottom = H - this.h;
    if (this.y > rockbottom) {
    this.y = rockbottom;
  }

    this.draw()
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
      }
  }
  
  pickUp(waste) {
    if (this.bottom() > waste.top() 
      && this.top() < waste.bottom() 
      && this.right() > waste.left() 
      && this.left() < waste.right()) 
      { 
        var wasteIndex = wastes.indexOf(waste);
        wastes.splice(wasteIndex, 1)
        return point++;

      }
  }  
}