class Car {
  constructor(x, y, elementId) {
      this.x = x;
      this.y = y;
      this.element = document.getElementById(elementId);
      this.interval = null;
      this.updatePosition();
  }

  updatePosition() {
      this.element.style.left = this.x + 'px';
      this.element.style.top = this.y + 'px';
  }

  moveLeft() {
      this.x -= 10;
      this.updatePosition();
  }

  moveRight() {
      this.x += 10;
      this.updatePosition();
  }

  moveCar(direction) {
      this.stopMoving();

      if (direction === 'left') {
          this.interval = setInterval(() => this.moveLeft(), 100);
      } else if (direction === 'right') {
          this.interval = setInterval(() => this.moveRight(), 100);
      }
  }

  stopMoving() {
      if (this.interval) {
          clearInterval(this.interval);
          this.interval = null;
      }
  }
}
