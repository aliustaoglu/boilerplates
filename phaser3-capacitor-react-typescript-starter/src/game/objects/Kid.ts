import Phaser from 'phaser'
import kidSprite from './sprite-kid.png'

class Kid {
  scene: Phaser.Scene
  constructor(scene: Phaser.Scene){
    this.scene = scene
  }
  create() {
    let kid = this.scene.add.sprite(100, 100, "kid");
    let kid2 = this.scene.add.sprite(100, 250, "kid");
    
    this.scene.anims.create({
      key: "kid_walk",
      frames: this.scene.anims.generateFrameNumbers("kid", {
        start: 0,
        end: 3,
      }),
      repeat: -1,
      frameRate: 8,
    });
    this.scene.anims.create({
      key: "kid_run",
      frames: this.scene.anims.generateFrameNumbers("kid", {
        start: 0,
        end: 3,
      }),
      repeat: -1,
      frameRate: 16,
    });
    kid.play("kid_walk");
    kid2.play("kid_run");
  }

  preload() {
    this.scene.load.spritesheet("kid", kidSprite, {
      frameHeight: 130,
      frameWidth: 130,
    });
  }

  update() {
    
  }
}

export default Kid