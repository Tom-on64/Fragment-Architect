// DOM
const canvas = document.getElementById("mainScreen")
const ctx = canvas.getContext("2d")
var canvasBoundingBox = canvas.getBoundingClientRect()
canvas.width = canvasBoundingBox.width
canvas.height = canvasBoundingBox.height

// Variables
downPressed = false
upPressed = false
leftPressed = false
rightPressed = false


// Functions
document.addEventListener("keydown", keyDown)
document.addEventListener("keyup", keyUp)

function keyDown(event) {
    if (event.keyCode == 40) {
        player.dir = "up"
        downPressed = true
    }
    if (event.keyCode == 38) {
        player.dir = "down"
        upPressed = true
    }
    if (event.keyCode == 37) {
        player.dir = "left"
        leftPressed = true
    }
    if (event.keyCode == 39) {
        player.dir = "right"
        rightPressed = true
    }
}
function keyUp(event) {
    if (event.keyCode == 40) {
        downPressed = false
    }
    if (event.keyCode == 38) {
        upPressed = false
    }
    if (event.keyCode == 37) {
        leftPressed = false
    }
    if (event.keyCode == 39) {
        rightPressed = false
    }
}

function inputs() {
    if (upPressed == true & player.y >= world.ground - player.radius) {
        player.y -= player.speed * 20
    }
    if (leftPressed == true) {
        player.x -= player.speed
    }
    if (rightPressed == true) {
        player.x += player.speed
    }
}

function boundryCheck () {
    // Up
    if (player.y < player.radius) {
        player.y = player.radius
    }
    // Down
    if (player.y > world.ground - player.radius) {
        player.y = world.ground - player.radius
    }
    // Left
    if (player.x < player.radius) {
        player.x = player.radius
    }
    // Right
    if (player.x > canvas.width - player.radius) {
        player.x = canvas.width - player.radius
    }
}

function gravity() {
    player.y += player.y / 60
}

// Player
class Player {
    constructor() {
        this.x = canvas.width / 2
        this.y = canvas.height / 2
        this.radius = 50
        this.speed = 10
        this.dir = "right"
    }
    draw() {
        ctx.fillStyle = 'lime'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath()
        ctx.fill()
        if (this.dir == "right") {
            ctx.strokeStyle = 'red'
            ctx.lineWidth = 1.5
            ctx.beginPath()
            ctx.moveTo(this.x, this.y)
            ctx.lineTo(this.x + 100, this.y)
            ctx.stroke()
        }
        else if (this.dir == "left") {
            ctx.strokeStyle = 'red'
            ctx.lineWidth = 1.5
            ctx.beginPath()
            ctx.moveTo(this.x, this.y)
            ctx.lineTo(this.x - 100, this.y)
            ctx.stroke()
        }
        else if (this.dir == "up") {
            ctx.strokeStyle = 'red'
            ctx.lineWidth = 1.5
            ctx.beginPath()
            ctx.moveTo(this.x, this.y)
            ctx.lineTo(this.x, this.y + 100)
            ctx.stroke()
        }
        else if (this.dir == "down") {
            ctx.strokeStyle = 'red'
            ctx.lineWidth = 1.5
            ctx.beginPath()
            ctx.moveTo(this.x, this.y)
            ctx.lineTo(this.x, this.y - 100)
            ctx.stroke()
        }
    }
}
const player = new Player()

// World
class World {
    constructor() {
        this.x = 0
        this.y = canvas.height / 1.20
        this.ground = this.y
    }
    draw() {
        ctx.fillStyle = "red"
        ctx.fillRect(this.x, this.y, canvas.width, canvas.height)
    }
}
const world = new World()
// Render
function render() {
    canvasBoundingBox = canvas.getBoundingClientRect()
    canvas.width = canvasBoundingBox.width
    canvas.height = canvasBoundingBox.height
    inputs()
    gravity()
    boundryCheck()
    ctx.fillStyle = "lightblue"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    world.draw()
    player.draw()
    requestAnimationFrame(render)
}

render()