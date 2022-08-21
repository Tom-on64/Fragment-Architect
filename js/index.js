import World from "./classes/World.js"
import Player from "./classes/Player.js"

// DOM
const canvas = document.getElementById("mainScreen")
const ctx = canvas.getContext("2d")

// Variables
var moveDir = "none"
const tileSize = 256

const map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2],
    [1, 1, 1, 1, 1, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

const world = new World(tileSize, map)
const player = new Player(world.returnPlayerLocation(), tileSize, 3, "right", map)


// Functions
document.addEventListener("keydown", keyDown)
document.addEventListener("keyup", keyUp)

/*
function keyDown(event) {
    switch (event.keyCode) {
    case 40: 
        player.move("down", world.returnColiders(Math.floor(player.x / tileSize), Math.floor(player.y / tileSize)), tileSize) // Down Arrow
        console.log("down")
        break
    case 38:
        player.move("up", world.returnColiders(Math.floor(player.x / tileSize), Math.floor(player.y / tileSize)), tileSize)   // Up Arrow
        console.log("up")
        break
    case 32:
        player.move("up", world.returnColiders(Math.floor(player.x / tileSize), Math.floor(player.y / tileSize)), tileSize)   // Space Bar 
        console.log("up")
        break
    case 16 :
        player.move("none", world.returnColiders(Math.floor(player.x / tileSize), Math.floor(player.y / tileSize)), tileSize) // Shift        NOTE: Add Shifting
        console.log("none")
        break
    case 37:
        player.move("left", world.returnColiders(Math.floor(player.x / tileSize), Math.floor(player.y / tileSize)), tileSize) // Left Arrow
        console.log("left")
        break
    case 39:
        player.move("right", world.returnColiders(Math.floor(player.x / tileSize), Math.floor(player.y / tileSize)), tileSize)// Right Arrow
        console.log("right")
        break
    }
}
function keyUp(event) {        // If a key is lifted, stops
    switch (event.keyCode) {
        case 40:
            player.move("none", world.returnColiders(Math.floor(player.x / tileSize), Math.floor(player.y / tileSize)), tileSize)
            console.log("none")
            break
        case 38:
            player.move("none", world.returnColiders(Math.floor(player.x / tileSize), Math.floor(player.y / tileSize)), tileSize)
            console.log("none")
            break
        case 32:
            player.move("none", world.returnColiders(Math.floor(player.x / tileSize), Math.floor(player.y / tileSize)), tileSize)
            console.log("none")
            break
        case 37:
            player.move("none", world.returnColiders(Math.floor(player.x / tileSize), Math.floor(player.y / tileSize)), tileSize)
            console.log("none")
            break
        case 39:
            player.move("none", world.returnColiders(Math.floor(player.x / tileSize), Math.floor(player.y / tileSize)), tileSize)
            console.log("none")
            break
    }
}
*/

// Render
function render() {
    world.draw(canvas, ctx)
    player.draw(ctx, tileSize)
    player.gravity(10, world.returnColiders(Math.floor(player.x / tileSize), Math.floor(player.y / tileSize)), tileSize)
    requestAnimationFrame(render)
}

render()



function keyDown(event) {
    if (event.keyCode == 40) {
        player.move("down", world.returnColiders(Math.floor(player.x / tileSize), Math.floor(player.y / tileSize)), tileSize) // Down Arrow
    }
    if (event.keyCode == 38) {
        player.move("up", world.returnColiders(Math.floor(player.x / tileSize), Math.floor(player.y / tileSize)), tileSize)   // Up Arrow
    }
    if (event.keyCode == 32) {
        player.move("up", world.returnColiders(Math.floor(player.x / tileSize), Math.floor(player.y / tileSize)), tileSize)   // Space Bar 
    }
    if (event.keyCode == 16) {
        player.move("none", world.returnColiders(Math.floor(player.x / tileSize), Math.floor(player.y / tileSize)), tileSize) // Shift        NOTE: Add Shifting
    }
    if (event.keyCode == 37) {
        player.move("left", world.returnColiders(Math.floor(player.x / tileSize), Math.floor(player.y / tileSize)), tileSize) // Left Arrow
    }
    if (event.keyCode == 39) {
        player.move("right", world.returnColiders(Math.floor(player.x / tileSize), Math.floor(player.y / tileSize)), tileSize)// Right Arrow
    }
}

function keyUp(event) { // When Key Lifted
    if (event.keyCode == 40) {
        player.move("none", world.returnColiders(Math.floor(player.x / tileSize), Math.floor(player.y / tileSize)), tileSize)
    }
    if (event.keyCode == 38) {
        player.move("none", world.returnColiders(Math.floor(player.x / tileSize), Math.floor(player.y / tileSize)), tileSize)
    }
    if (event.keyCode == 32) {
        player.move("none", world.returnColiders(Math.floor(player.x / tileSize), Math.floor(player.y / tileSize)), tileSize)
    }
    if (event.keyCode == 37) {
        player.move("none", world.returnColiders(Math.floor(player.x / tileSize), Math.floor(player.y / tileSize)), tileSize)
    }
    if (event.keyCode == 39) {
        player.move("none", world.returnColiders(Math.floor(player.x / tileSize), Math.floor(player.y / tileSize)), tileSize)
    }
}
