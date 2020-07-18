function random(from, to) {
  return Math.floor(from +(Math.random()*(to-from)))
}

// waste type = bag, bottle, can

class Waste {
  constructor(type){
    const img = document.createElement('img')
    img.onload = () => {
      this.img = img;
      this.type = type;
      this.w = random(0, Infinity) // à modifier
      this.h = 50;
      this.x = random(0, H);
      this.y = 0;
    }
    //img.src =`./img/${this.type}.jpeg`
  } 

  draw() {
    switch (this.type) {
      case "bag" : 
        img.src ="./img/bag.png";
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        break;
      case "bottle" : 
        this.img.src = "./img/bottle.png";
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        break;
      case "can" : 
        this.img.src = "./img/can.png";
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        break;
    }
  }
}
