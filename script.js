class Planet {
  constructor() {
    this.x = 200;
    this.y = 200;
    this.radius = 80;
  }

  draw(context) {
    context.beginPath();
    context.ard(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fill();
  }
}

window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 800;

  const planet = new Planet();
  planet.draw();
});
