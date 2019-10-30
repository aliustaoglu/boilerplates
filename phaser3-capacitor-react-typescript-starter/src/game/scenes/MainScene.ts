import Phaser from 'phaser'
import Kid from '../objects/Kid'

class MainScene extends Phaser.Scene {
  kid: Kid
  constructor() {
    super('MainScene')
    this.kid = new Kid(this)
  }

  create() {
    this.kid.create()
  }

  preload() {
    var k = 1
    this.kid.preload()
  }

  update() {
    this.kid.update()
  }
}

export default MainScene
