const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")


canvas.width = window.innerWidth
canvas.height = window.innerHeight

let x = 0, y = 0

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
})

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const deltaX = Math.random() * 10 - 3; 
  const deltaY = Math.random() * 10 - 3; 

  x += deltaX;
  y += deltaY;

  x = Math.max(50, Math.min(canvas.width - 50, x));
  y = Math.max(50, Math.min(canvas.height - 50, y));
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, 2 * Math.PI);
  ctx.fill();
  requestAnimationFrame(animate)
}

animate()

