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
  for (let i = 0; i < 15; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: Math.random() * 2,
      size: Math.random() * 5 + 12,
    });
  }
}

function createCircle(particle, i) {
  const posX = Math.random() * 20 - 10
  const posY = Math.random() * 20 - 10
  
  particle.x += posX * particle.speed
  particle.y += posY * particle.speed

  // prevent particles from going off the canvas
  particle.x = Math.max(0, Math.min(canvas.width, particle.x))
  particle.y = Math.max(0, Math.min(canvas.height, particle.y))

  ctx.beginPath()
  ctx.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI)
  ctx.fill()
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  particles.forEach((particle, i) => {
    createCircle(particle, i)
  })
  requestAnimationFrame(animate)
}

initializeParticles()
animate()

// TO ADD
// Add UI for adding particles
// Add interaction on particles (combine, explode)
// Add line on particles when near each other

