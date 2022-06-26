// DOM
const canvas = document.getElementById("mainScreen")
const ctx = canvas.getContext("2d")
var canvasBoundingBox = canvas.getBoundingClientRect()
canvas.width = canvasBoundingBox.width
canvas.height = canvasBoundingBox.height

// Variables

// Player
class Player {
    constructor() {
        this.x = canvas.width / 2
        this.y = canvas.height / 2
        this.radius = 50
    }
    draw() {
        ctx.fillStyle = 'lime'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath()
        ctx.fill()
        ctx.strokeStyle = 'red'
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x + 100, this.y)
        ctx.stroke()
    }
}
const player = new Player()

// World
class World {
    constructor() {
        this.x = canvas.width / 2
        this.y = canvas.height / 1
    }
    draw() {
        ctx.fillStyle = "red"
        ctx.beginPath()
        ctx.fillRect(this.x - 200, this.y -200, this.x + 200, this.y + 200)
        ctx.fill()
        ctx.closePath()
        ctx.fill()
    }
}
const world = new World()
// Render
function render() {
    canvasBoundingBox = canvas.getBoundingClientRect()
    canvas.width = canvasBoundingBox.width
    canvas.height = canvasBoundingBox.height
    ctx.fillStyle = "lightblue"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    world.draw()
    player.draw()
    // requestAnimationFrame(render)
}

render()