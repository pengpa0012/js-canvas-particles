const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")


canvas.width = window.innerWidth
canvas.height = window.innerHeight

const draw = () => {
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, 2 * Math.PI);
  ctx.fill();
}

draw()

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  draw()
})