export default class World {
  constructor(tileSize, map) {
    this.tileSize = tileSize
    this.map = map
    this.dirt = this.#image("dirt.png")
    this.air = this.#image("air.png")
    this.grass = this.#image("grass.png")
  }

  #image(fileName) {
    const img = new Image()
    img.src = `img/${fileName}`
    return img
  }

  returnPlayerLocation() {
    for (let row = 0; row < this.map.length; row++) {
      for (let column = 0; column < this.map[row].length; column++) {
        let tile = this.map[row][column]
        if ( tile==3 )
          return [column * this.tileSize + this.tileSize / 2, row * this.tileSize + this.tileSize / 2]
      }
    }
  }

  returnColiders(x, y) {
    // console.log([x, y])
    let tile = this.map[y][x]
    // console.log(tile)

    if (tile != 0 && tile != 3) 
      return [x, y]
    else 
      return [this.map.length[0] * this.tileSize, this.map.length * this.tileSize]
  }

  draw(canvas, ctx) {
    this.#setCanvasSize(canvas)
    this.#clearCanvas(canvas, ctx)
    this.#drawMap(ctx)
  }

  #drawMap(ctx, showGrid = false) {
    for (let row = 0; row < this.map.length; row++) {
      for (let column = 0; column < this.map[row].length; column++) {
        const tile = this.map[row][column]
        let image = null
        switch (tile) {
          case 1:
            image = this.dirt
            break
          case 0:
            image = this.air
            break
          case 2:
            image = this.grass
            break
          case 3:
            image = this.air
            break
        }

        if ( image != null && showGrid == false )
          ctx.drawImage(
            image,
            column * this.tileSize,
            row * this.tileSize,
            this.tileSize,
            this.tileSize
          )
        if ( image != null && showGrid == true )
          ctx.drawImage(
            image,
            column * this.tileSize + this.tileSize / 64,
            row * this.tileSize + this.tileSize / 64,
            this.tileSize - this.tileSize / 64,
            this.tileSize - this.tileSize / 64
          )
      }
    }
  }

  #clearCanvas(canvas, ctx) {
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }

  #setCanvasSize(canvas) {
    canvas.height = this.map.length * this.tileSize
    canvas.width = this.map[0].length * this.tileSize
  }
}