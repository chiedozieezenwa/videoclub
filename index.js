class Movie {
  constructor(title, genre, countryOfOrigin, starAct, yearOfProduction) {
    this.title = title;
    this.genre = genre;
    this.countryOfOrigin = countryOfOrigin;
    this.starAct = starAct;
    this.yearOfProduction = yearOfProduction;
    this.available = true;
  }
}

class videoClub {
  constructor() {
    this.movies = [];
  }

  addMovie(title, genre, countryOfOrigin, starAct, yearOfProduction) {
    const movie = new Movie(
      title,
      genre,
      countryOfOrigin,
      starAct,
      yearOfProduction
    );
    this.movies.push(movie);
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

const myVideoClub = new videoClub();

myVideoClub.addMovie(
  "Queen of the South",
  "Action/Thriller",
  "USA",
  "Alice Braga",
  2016
);
myVideoClub.addMovie(
  "Vikings",
  "Action/War/Historical Drama",
  "Canada",
  "Katheryn Winnick",
  2013
);
myVideoClub.addMovie(
  "How to get away with murder",
  "Drama",
  "USA",
  "Viola Davis",
  2020
);

myVideoClub.rentMovie("How to get away with murder");
myVideoClub.rentMovie("Vikings");
myVideoClub.returnMovie("Vikings");

myVideoClub.checkAvailability("Osuofia");
myVideoClub.checkAvailability("Queen of the South");
