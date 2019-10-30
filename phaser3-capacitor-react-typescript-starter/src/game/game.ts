import Phaser from 'phaser'
import MainScene from './scenes/MainScene'

export const initGame = (parent: string) => {
  const game = new Phaser.Game({
    parent,
    type: Phaser.AUTO,
    width: 300,
    height: 500,
    scene: [MainScene]
  })
  return game
}
