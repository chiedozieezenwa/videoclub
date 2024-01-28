class Movie {
  contructor(title, genre, countryOfOrigin, starAct, yearOfProduction) {
    this.title = title;
    this.genre = genre;
    this.countryOfOrigin = countryOfOrigin;
    this.starAct = starAct;
    this.yearOfProduction = yearOfProduction;
    this.available = null;
  }
}

class videoClub {
  constructor() {
    this.movies = [];
  }

  addFilm(title, genre, countryOfOrigin, starAct, yearOfProduction) {
    const film = new Film(
      title,
      genre,
      countryOfOrigin,
      starAct,
      yearOfProduction
    );
    this.movies.push(film);
    console.log(`"${title}" has been added to the store.`);
  }

  rentMovie(title) {
    const movie = this.movies.find((movie) => movie.title === title);
    if (movie) {
      if (movie.available) {
        movie.available = false;
        console.log(`"${title}" has been rented.`);
      } else {
        console.log(`Sorry, "${title}" is not available for rent.`);
      }
    } else {
      console.log(`"${title}" is not available in the store.`);
    }
  }

  returnMovie(title) {
    const movie = this.movies.find((movie) => movie.title === title);
    if (movie) {
      if (!movie.available) {
        movie.available = true;
        console.log(`"${title}" has been returned.`);
      } else {
        console.log(`"${title}" is already available.`);
      }
    } else {
      console.log(`"${title}" is not available in the store.`);
    }
  }

  checkAvailability(title) {
    const movie = this.movies.find((movie) => movie.title === title);
    if (movie) {
      if (movie.available) {
        console.log(`"${title}" is available for rent.`);
      } else {
        console.log(`"${title}" is not available for rent.`);
      }
    } else {
      console.log(`"${title}" is not available in the store.`);
    }
  }
}

const videoClub = new videoClub();
