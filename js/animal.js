function random(from, to) {
  return Math.floor(from +(Math.random()*(to-from)))
}

// animal type = turtle, medusa, fish

class Animal {
  constructor(type){
    const img = document.createElement('img')
    img.onload = () => {
      this.img = img;
      this.type = type;
      this.w = random(0, W) 
      this.h = 50;
      this.x = random(0, H);
      this.y = 0;
    }
    //img.src =`./img/${this.type}.jpeg`
  } 

  draw() {
    switch (this.type) {
      case "turtle" : 
        img.src ="./img/turtle.png";
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        break;
      case "medusa" : 
        this.img.src = "./img/medusa.png";
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        break;
      case "fish" : 
        this.img.src = "./img/fish.png";
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        break;
    }
  }
}
