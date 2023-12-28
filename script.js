const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")


canvas.width = window.innerWidth
canvas.height = window.innerHeight

let x = 0, y = 0

let nextPos = {
  x: 0,
  y: 0
}

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

  setInterval(() => {
    const posX = Math.random() * canvas.width
    const posY = Math.random() * canvas.height
    nextPos.x = posX
    nextPos.y = posY
  }, 500)
  
  if (x < nextPos.x) {
    x += 1
  }
  if (x > nextPos.x){
    x -= 1
  }

  if (y < nextPos.y) {
    y += 1
  }
  if (y > nextPos.y){
    y -= 1
  }
  createCircle(x, y)
  requestAnimationFrame(animate)
}

animate()

