const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight


window.addEventListener('resize', () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
})

let particles = []

function initializeParticles() {
  for (let i = 0; i < 5; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: Math.random() * 10
    });
  }
}

function createCircle(particle) {
  const posX = Math.random() * canvas.width
  const posY = Math.random() * canvas.height
  if (particle.x < posX) {
    particle.x += particle.speed
  }
  if (particle.x > posX){
    particle.x -= particle.speed
  }

  if (particle.y < posY) {
    particle.y += particle.speed
  }
  if (particle.y > posY){
    particle.y -= particle.speed
  }
  ctx.beginPath()
  ctx.arc(particle.x, particle.y, 10, 0, 2 * Math.PI)
  ctx.fill()
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  particles.forEach(particle => {
    createCircle(particle)
  })
  requestAnimationFrame(animate)
}

initializeParticles()
animate()
