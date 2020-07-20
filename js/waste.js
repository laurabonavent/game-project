// to random the position 
function randomPosition(from, to) {
  return Math.floor(from +(Math.random()*(to-from)))
}

// to random waste type
const wasteType = ["bag", "bottle", "can"]
function randomWaste (wastetype) {
  return Math.floor(Math.random()* Math.floor(wasteType.length));
}
console.log(randomWaste());

// class Waste 
class Waste {
  constructor(type){
    const img = document.createElement('img')
    img.onload = () => {
      this.img = img;
      this.type = type;
      this.w = randomPosition(0, W)
      this.h = 50;
      this.x = randomPosition(0, H);
      this.y = 0;
    }
    //img.src =`./img/${this.type}.jpeg`
  } 

  draw() {
    switch (this.type) {
      case "0" : 
        img.src ="./img/bag.png";
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        break;
      case "1" : 
        this.img.src = "./img/bottle.png";
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        break;
      case "2" : 
        this.img.src = "./img/can.png";
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        break;
    }
  }
}
