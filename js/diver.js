// Create the class Diver 

class Diver {
  constructor(x,y){
    // create a new element in the html for the image 
    const img = document.createElement('img')
    // determine what's happening when the image is loaded 
    diverImg.onload = () => {
      this.img = img;
      const ratio = img.naturalWidth/img.naturalHeight;
      this.w = 50; // A VERIFIER PLUS TARD
      this.h = this.w/ratio;
      this.x = x;
      this.y = y;
    }
    // set src of the image (img.src= "")
  }

  // method to draw the diver 
  draw() {
    // if not loaded or of it's loaded 
  }
  
  // method to go up 
  moveUp() {
    // add x 
  }

  animation() {
    // create bubbles and leg mouvment 
  }
}