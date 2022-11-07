class Carta {
  constructor(tipo, cara, flip, sprite, posicionx, posiciony) {
    this.tipo = tipo;
    this.cara = cara;
    this.flip = flip;
    this.sprite = sprite;
    this.posicionx = posicionx;
    this.posiciony = posiciony;
  }

  // Función para reproducir la animación correspondiente
  flipCarta() {
    if (this.cara == 0 && this.flip == 0) {
      if (this.tipo == 0) {
        this.sprite.play({ key: "Rflip1", repeat: 0 });
      }
      if (this.tipo == 1) {
        this.sprite.play({ key: "Pflip1", repeat: 0 });
      }
      if (this.tipo == 2) {
        this.sprite.play({ key: "Sflip1", repeat: 0 });
      }
      this.cara = 1;
      this.flip = 1;
    }

    if ((this.cara = 1) && this.flip == 0) {
      if (this.tipo == 0) {
        this.sprite.play({ key: "Rflip2", repeat: 0 });
      }
      if (this.tipo == 1) {
        this.sprite.play({ key: "Pflip2", repeat: 0 });
      }
      if (this.tipo == 2) {
        this.sprite.play({ key: "Sflip2", repeat: 0 });
      }
      this.cara = 0;
      this.flip = 1;
    }

    this.flip = 0;
  }

  // Función para mover los marcos de carta a la carta seleccionada
  marcosCartas(marcoA, marcoB, cartaant, selec, color) {
    marcoA.body.reset(this.posicionx, this.posiciony);
    marcoA.tint = color;
    if (selec > 1) {
      marcoB.body.reset(cartaant.posicionx, cartaant.posiciony);
      marcoB.tint = color;
    }
  }
}

export default Carta;
