const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")
const circleUI = document.querySelector(".circle")
const circleCoverUI = document.querySelector(".circle-cover")
const speedUI = document.querySelector(".speed")
const sizeUI = document.querySelector(".size")
const colorUI = document.querySelector(".color")
const resetBtn = document.querySelector(".reset")
const dropdownBtn = document.querySelector(".dropdown-btn")
const coverUI = document.querySelector(".cover-ui")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let paramsUI = {
  color: "#000000",
  size: 12,
  speed: 1
}
let particles = []

function initializeParticles() {
  for (let i = 0; i < 1; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: Math.random() * 2,
      size: Math.random() * 5 + 12,
      color: "#000000"
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
  ctx.fillStyle = particle.color
  ctx.fill()
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  particles.forEach((particle, i) => {
    createCircle(particle, i)
  })
  requestAnimationFrame(animate)
}

window.addEventListener("DOMContentLoaded", () => {
  sizeUI.addEventListener("input", e => {
    paramsUI.size = e.target.value
    console.log(e.target.value)
    editCircle(paramsUI)
  })

  speedUI.addEventListener("input", e => {
    paramsUI.speed = e.target.value
  })

  colorUI.addEventListener("input", e => {
    paramsUI.color = e.target.value
    editCircle(paramsUI)
  })

  dropdownBtn.addEventListener("click", () => {
    dropdownBtn.textContent = dropdownBtn.textContent == "Show" ? "Hide" : "Show"
    coverUI.classList.toggle("toggle")
    circleCoverUI.classList.toggle("toggle")
  })

  circleUI.addEventListener("dragend", (e) => {
    // Push particles here with right parameters
    const {x, y} = e
    particles.push({
      x,
      y,
      speed: paramsUI.speed,
      size: paramsUI.size,
      color: paramsUI.color
    });
  })

  resetBtn.addEventListener("click", () => {
    particles = []
  })

  function editCircle(circleParams) {
    const {size, color} = circleParams
    circleUI.style.backgroundColor = color
    circleUI.style.width = `${parseInt(size) + 15}px`
    circleUI.style.height = `${parseInt(size) + 15}px`
  }

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  })

  editCircle(paramsUI)
  initializeParticles()
  animate()
})


// TO ADD
// Add interaction on particles (combine, explode)
// Add line on particles when near each other

