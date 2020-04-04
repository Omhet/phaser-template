import { SCENES, TEXTURES } from '../constants';
import { Scene } from 'phaser';

export default class Main extends Scene {
  constructor() {
    super({ key: SCENES.MAIN });
  }

  create() {
    this.addBackground();
  }

  addBackground() {
    const background = this.add.sprite(-50, -50, TEXTURES.BACKGROUND);
    background.setOrigin(0, 0);
    background.displayWidth = this.game.config.width + 100;
    background.displayHeight = this.game.config.height + 100;
  }

  update(time, delta) {
  }
}
