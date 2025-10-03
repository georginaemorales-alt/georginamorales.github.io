function Ball() {
  this.x = 0;
  this.y = 0;
  this.width = 100;   // Aumentado desde 50
  this.height = 100;  // Aumentado desde 50

  this.image = new Image();
  this.image.src = 'star.png'; // Asegúrate de que star.png esté en la ubicación correcta
}

Ball.prototype.draw = function(context) {
  context.drawImage(this.image, this.x, this.y, this.width, this.height);
};
