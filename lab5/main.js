// Abstract Engine Class
class Engine {
    static #count = 0;
  
    constructor(source) {
      if (new.target === Engine) {
        throw new Error("Cannot abstract class Engine directly.");
      }
      this.source = source;
      Engine.#count++;
    }
  
    static getCount() {
      return Engine.#count;
    }
  }
  
  // Car Class
  class Car extends Engine {
    constructor(top, left, source) {
      super(source);
      this.top = top;
      this.left = left;
  
      // Create car image element
      this.img = document.createElement("img");
      this.img.src = this.source;
      this.img.style.position = "absolute";
      this.img.style.top = `${this.top}px`;
      this.img.style.left = `${this.left}px`;
      this.img.style.width = "100px";
      document.body.appendChild(this.img);
    }
  
    set Top(value) {
      this.top = value;
      this.img.style.top = `${this.top}px`;
    }
  
    set Left(value) {
      this.left = value;
      this.img.style.left = `${this.left}px`;
    }
  
    moveLeft(step = 10) {
      this.left = Math.max(0, this.left - step);
      this.img.style.left = `${this.left}px`;
    }
  
    moveRight(step = 10) {
      const pageWidth = window.innerWidth;
      const maxRight = pageWidth - this.img.offsetWidth;
      this.left = Math.min(maxRight, this.left + step);
      this.img.style.left = `${this.left}px`;
    }
  
    changeStyle(styleObj) {
      Object.assign(this.img.style, styleObj);
    }
  
    moveCar(direction) {
      const move = () => {
        if (direction === "left" && this.left > 0) {
          this.moveLeft();
          requestAnimationFrame(move);
        } else if (direction === "right" && this.left < window.innerWidth - this.img.offsetWidth) {
          this.moveRight();
          requestAnimationFrame(move);
        }
      };
      move();
    }
  }
  