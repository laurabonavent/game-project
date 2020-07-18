// Create the class Diver 

class Diver {
  constructor(x,y){
    // create a new element in the html for the image 
    const img = document.createElement('img')
    // determine what's happening when the image is loaded 
    img.onload = () => {
      this.img = img;
      const ratio = img.naturalWidth/img.naturalHeight;
      this.w = 50; 
      this.h = this.w/ratio;
      this.x = x;
      this.y = y;
    }
    img.src= "./img/diver-2-1.png"
  }

  // method to draw the diver 
  draw() {
    if (!this.img) return;
     ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }
  
  // method to go up 
  moveUp() {
    return this.x +=20;
  }

}