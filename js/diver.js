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
      this.vx = 0;
      this.vy = 0;
    }
    img.src= "./img/diver-2-1.png"
  }

  draw() {
    if (!this.img) return;
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }

  update() {
    if (this.y > H+30) {gameover = true}
    if (this.y < -50) {gameover = true}
    const accy = weightforce + pushforce;

    this.vy += accy; 

    if (this.vy > MAXSPEED) this.vy = MAXSPEED; 
    if (this.vy < -MAXSPEED) this.vy = -MAXSPEED; 

    this.y += this.vy;
    this.x += this.vx;

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
      && this.left() < animal.right()) { 
        $lostSound.play();
        return gameover = true;
      }
  }
  
  pickUp(waste) {
    if (this.bottom() > waste.top() 
      && this.top() < waste.bottom() 
      && this.right() > waste.left() 
      && this.left() < waste.right()) { 
        $winSound.play();
        var wasteIndex = wastes.indexOf(waste);
        wastes.splice(wasteIndex, 1)
        return point++;
      }
  }  
};