import { SCENES, TEXTURES } from '../constants';
import { Scene } from 'phaser';

export default class Boot extends Scene {
  constructor() {
    super({ key: SCENES.BOOT });
  }

  preload() {
    const { load } = this;
    load.image(TEXTURES.BACKGROUND, require('../assets/sprites/background.png'));
  }

  create() {
    this.scene.start(SCENES.MAIN);
  }
}
