class Videoclub {
  contructor(name, genre, countryOfOrigin, starAct) {
    this.name = name;
    this.genre = genre;
    this.countryOfOrigin = countryOfOrigin;
    this.starAct = starAct;
    this.available = null;
  }
  rentMovie() {
    if (this.available) {
      this.available = false;
      console.log(`"${this.name}" has been rented`);
    }
  }
}
