const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")


canvas.width = window.innerWidth
canvas.height = window.innerHeight

let x = 0, y = 0

let nextPos = {
  x: 0,
  y: 0
}

setInterval(() => {
  const posX = Math.random() * canvas.width
  const posY = Math.random() * canvas.height
  nextPos.x = posX
  nextPos.y = posY
}, 1000)



window.addEventListener('resize', () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
})

function createCircle(x, y) {
  ctx.beginPath()
  ctx.arc(x, y, 10, 0, 2 * Math.PI)
  ctx.fill()
}

function animate() {


  ctx.clearRect(0, 0, canvas.width, canvas.height)
  // const deltaX = Math.random() * 35 - 5
  // const deltaY = Math.random() * 35 - 5

  if (x < nextPos.x) {
    x += 10
  }
  if (x > nextPos.x){
    x -= 10
  }

  y = 50
  // add bouncing if border of canvas
  
  // x = Math.max(50, Math.min(canvas.width - 30, x));
  // y = Math.max(50, Math.min(canvas.height - 30, y));
  console.log(nextPos)

  createCircle(x, y)
  requestAnimationFrame(animate)
}

animate()

