export default class Player {
    constructor(location, tileSize, speed, dir, map) {
        this.x = location[0]
        this.y = location[1]
        this.radius = tileSize / 2
        this.speed = speed
        this.movementSpeed = this.speed * tileSize / 16
        this.dir = dir
        this.map = map
    }
    // Private Variables
    #upPressed = false
    #downPressed = false
    #rightPressed = false
    #leftPressed = false


    draw(ctx, tileSize) {
        this.#playerDraw(ctx, tileSize)
        this.#dirDraw(ctx, tileSize)
        this.#debugDraw(ctx, tileSize)
    }

    #debugDraw (ctx, tileSize) {
        // X
        ctx.strokeStyle = 'blue'
        ctx.lineWidth = tileSize / 32
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x + tileSize / 4, this.y)
        ctx.stroke()
        // Y
        ctx.strokeStyle = 'blue'
        ctx.lineWidth = tileSize / 32
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x, this.y - tileSize / 4)
        ctx.stroke()
    }

    #playerDraw (ctx, tileSize) {
        ctx.fillStyle = 'lime'
        ctx.beginPath()
        ctx.arc(this.x, this.y - tileSize/2, this.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath()
        ctx.fill()
    }

    #dirDraw (ctx, tileSize) {
        if (this.dir == "right") {
            ctx.strokeStyle = 'red'
            ctx.lineWidth = tileSize / 16
            ctx.beginPath()
            ctx.moveTo(this.x, (this.y - tileSize/2))
            ctx.lineTo(this.x + tileSize / 2 + tileSize / 4, (this.y - tileSize/2))
            ctx.stroke()
        }
        else if (this.dir == "left") {
            ctx.strokeStyle = 'red'
            ctx.lineWidth = tileSize / 16
            ctx.beginPath()
            ctx.moveTo(this.x, (this.y - tileSize/2))
            ctx.lineTo(this.x - tileSize / 2 - tileSize / 4, (this.y - tileSize/2))
            ctx.stroke()
        }
        else if (this.dir == "up") {
            ctx.strokeStyle = 'red'
            ctx.lineWidth = tileSize / 16
            ctx.beginPath()
            ctx.moveTo(this.x, (this.y - tileSize/2))
            ctx.lineTo(this.x, (this.y - tileSize/2) - tileSize / 2 + tileSize / 4)
            ctx.stroke()
        }
        else if (this.dir == "down") {
            ctx.strokeStyle = 'red'
            ctx.lineWidth = tileSize / 16
            ctx.beginPath()
            ctx.moveTo(this.x, (this.y - tileSize/2))
            ctx.lineTo(this.x, (this.y - tileSize/2) + tileSize / 2 + tileSize / 4)
            ctx.stroke()
        }
    }

    move(dir, coliders) {
        /* switch (dir) {
            case "none":
                this.#upPressed = false
                this.#downPressed = false
                this.#rightPressed = false
                this.#leftPressed = false
                break
            case "left":
                this.#leftPressed = true
                this.dir = "left"
                break
            case "right":
                this.#rightPressed = true
                this.dir = "right"
                break
            case "up":
                this.#upPressed = true
                break
            case "down":
                this.#downPressed = true
                break
        }
        this.#inputs(coliders) */
        
        if (dir == "none") {
            this.#upPressed = false
            this.#downPressed = false
            this.#rightPressed = false
            this.#leftPressed = false
        }
        if (dir == "left") {
            this.#leftPressed = true
            this.dir = "left"
        }
        if (dir == "right") {
            this.#rightPressed = true
            this.dir = "right"
        }
        if (dir == "up") {
            this.#upPressed = true
        }
        if (dir == "down") {
            this.#downPressed = true
        }
        this.#inputs(coliders)
    }

    #inputs (coliders) {
        if (this.#upPressed == true) {
            console.log("up")
            this.#up(coliders)
        }
        if (this.#downPressed == true) {
            console.log("down")
            this.#down(coliders)
        }
        if (this.#rightPressed == true) {
            console.log("right")
            this.#right(coliders)
        }
        if (this.#leftPressed == true) {
            console.log("left")
            this.#left(coliders)
        }
    }

    #left(coliders) {
        this.x -= this.movementSpeed
    }

    #right (coliders) {
        this.x += this.movementSpeed
    }

    #up (coliders) {
        for (let height = 27; height > 0; height--) {
            setTimeout(() => { this.y -= height }, 2500 / height)
        }
        this.#upPressed = false
    }

    #down (coliders) {}

    gravity (strength, coliders, tileSize) {
        if ( coliders[1] + 1 * tileSize > this.y ) {
            this.y += strength
        }
    }
}