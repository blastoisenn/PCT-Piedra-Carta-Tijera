import { EN_US, ES_AR } from "./enums/languages.js";
import Button from "./button";
import { getTranslations } from "./Services/translations.js";
export default class MenuPrincipal extends Phaser.Scene {
  #language;
  constructor() {
    super("Idioma");
  }

  create() {
    let contexto = this; //Variable de contexto
    let lock = 0; // Variable para evitar que se seleccionen dos idiomas distintos

    // Imagen de Fondo
    this.add
      .image(this.cameras.main.centerX, this.cameras.main.centerY, "FondoMenu")
      .setScale(0.6);

    // Botón "English"
    let botonjugar2 = new Button(
      this.cameras.main.centerX,
      this.cameras.main.centerY * 0.7,
      "English",
      this,
      () => {
        if (lock == 0) {
          lock = 1;
          this.#language = EN_US;
          getTranslations(this.#language);
          setTimeout(function idioma1() {
            contexto.scene.start("MenuPrincipal");
          }, 2000);
        }
      }
    );

    // Botón "Español"
    let botonjugar = new Button(
      this.cameras.main.centerX,
      this.cameras.main.centerY * 1.25,
      "Español",
      this,
      () => {
        if (lock == 0) {
          lock = 1;
          this.#language = ES_AR;
          getTranslations(this.#language);
          setTimeout(function idioma1() {
            contexto.scene.start("MenuPrincipal");
          }, 2000);
        }
      }
    );
  }
}
