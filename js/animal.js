// to random the position 
function randomPosition(from, to) {
  return Math.floor(from +(Math.random()*(to-from)))
}

// to random waste type
const animalType = ["turtle", "fish", "sea-horse", "goldfish", "starfish", "crab"]
function randomAnimal (animaltype) {
  const randNum = Math.floor(Math.random()* Math.floor(animalType.length)); // 2

  return animalType[randNum];
}

// class Animal 
class Animal {
  constructor(type){
    const img = document.createElement('img')
    img.onload = () => {
      this.img = img;
      const ratio = img.naturalWidth/img.naturalHeight;
      this.type = type;
      this.w = 120;
      this.h = this.w/ratio;
      this.x = W;
      this.y = randomPosition(30, 800);
    }
    img.src =`img/${type}.png`
  } 

  draw() {
    if (!this.img) return;
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
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
};
