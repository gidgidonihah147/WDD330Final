import {
  getLocalStorage,
  setLocalStorage,
  qs,
  renderListWithTemplate
} from './utils.mjs';



export default class MovieDetails {
  constructor(dataSource, movieTitle) {
    this.movieTitle = movieTitle;
    this.movie = {};
    this.dataSource = dataSource;
  }

  async init() {
    // use our datasource to get the details for the current movie. findmovieById will return a promise! use await or .then() to process it
    this.movie = await this.dataSource.findMovieByTitle(this.movieTitle);
    // once we have the movie details we can render out the HTML
    renderListWithTemplate(movieTemplate, qs('main'), [this.movie])
    // once the HTML is rendered we can add a listener to Add to Collection button
    // Notice the .bind(this). Our callback will not work if we don't include that line. Review the readings from this week on 'this' to understand why.
    document.getElementById('addToCollection')
      .addEventListener('click', this.addToCollection.bind(this));
    document.getElementById('addToAction')
      .addEventListener('click', this.addToAction.bind(this));
    document.getElementById('addToDrama')
      .addEventListener('click', this.addToDrama.bind(this));
    document.getElementById('addToFantasy')
      .addEventListener('click', this.addToFantasy.bind(this));
    document.getElementById('addToHorror')
      .addEventListener('click', this.addToHorror.bind(this));

  }
  addToCollection() {
    let movies = []; // init cart array

    if (localStorage.getItem('collection')) {
      //if contents in previous array
      movies = getLocalStorage('collection'); //add old contents to array
    }
    const movieIndex = movies.findIndex(
      (movie) => movie.Title === this.movie.Title
    );
    //if item exists in local storage, remove item, increment quantity
    if (movieIndex == -1) {
      movies.push(this.movie); // add new content to array
      setLocalStorage('collection', movies);
    }
    //push to storage
  }
  addToAction() {
    let movies = []; // init cart array

    if (localStorage.getItem('action')) {
      //if contents in previous array
      movies = getLocalStorage('action'); //add old contents to array
    }
    const genreIndex = movies.findIndex(
      (movie) => movie.Title === this.movie.Title
    );
    //if item exists in local storage, remove item, increment quantity
    if (genreIndex == -1) {
      movies.push(this.movie); // add new content to array
      setLocalStorage('action', movies);
    }
    movies = []; // init cart array
    if (localStorage.getItem('collection')) {
      //if contents in previous array
      movies = getLocalStorage('collection'); //add old contents to array
    }
    const collectionIndex = movies.findIndex(
      (movie) => movie.Title === this.movie.Title
    );
    //if item exists in local storage, remove item, increment quantity
    if (collectionIndex == -1) {
      movies.push(this.movie); // add new content to array
      setLocalStorage('collection', movies);
    }
    //push to storage
  }
  addToDrama() {
    let movies = []; // init cart array

    if (localStorage.getItem('drama')) {
      //if contents in previous array
      movies = getLocalStorage('drama'); //add old contents to array
    }
    const movieIndex = movies.findIndex(
      (movie) => movie.Title === this.movie.Title
    );
    //if item exists in local storage, remove item, increment quantity
    if (movieIndex == -1) {
      movies.push(this.movie); // add new content to array
      setLocalStorage('drama', movies);
    }
    movies = []; // init cart array
    if (localStorage.getItem('collection')) {
      //if contents in previous array
      movies = getLocalStorage('collection'); //add old contents to array
    }
    const collectionIndex = movies.findIndex(
      (movie) => movie.Title === this.movie.Title
    );
    //if item exists in local storage, remove item, increment quantity
    if (collectionIndex == -1) {
      movies.push(this.movie); // add new content to array
      setLocalStorage('collection', movies);
    }
    //push to storage
  }
  addToHorror() {
    let movies = []; // init cart array

    if (localStorage.getItem('horror')) {
      //if contents in previous array
      movies = getLocalStorage('horror'); //add old contents to array
    }
    const movieIndex = movies.findIndex(
      (movie) => movie.Title === this.movie.Title
    );
    //if item exists in local storage, remove item, increment quantity
    if (movieIndex == -1) {
      movies.push(this.movie); // add new content to array
      setLocalStorage('horror', movies);
    }
    movies = []; // init cart array
    if (localStorage.getItem('collection')) {
      //if contents in previous array
      movies = getLocalStorage('collection'); //add old contents to array
    }
    const collectionIndex = movies.findIndex(
      (movie) => movie.Title === this.movie.Title
    );
    //if item exists in local storage, remove item, increment quantity
    if (collectionIndex == -1) {
      movies.push(this.movie); // add new content to array
      setLocalStorage('collection', movies);
    }
    //push to storage
  }
  addToFantasy() {
    let movies = []; // init cart array

    if (localStorage.getItem('fantasy')) {
      //if contents in previous array
      movies = getLocalStorage('fantasy'); //add old contents to array
    }
    const movieIndex = movies.findIndex(
      (movie) => movie.Title === this.movie.Title
    );
    //if item exists in local storage, remove item, increment quantity
    if (movieIndex == -1) {
      movies.push(this.movie); // add new content to array
      setLocalStorage('fantasy', movies);
    }
    movies = []; // init cart array
    if (localStorage.getItem('collection')) {
      //if contents in previous array
      movies = getLocalStorage('collection'); //add old contents to array
    }
    const collectionIndex = movies.findIndex(
      (movie) => movie.Title === this.movie.Title
    );
    //if item exists in local storage, remove item, increment quantity
    if (collectionIndex == -1) {
      movies.push(this.movie); // add new content to array
      setLocalStorage('collection', movies);
    }
    //push to storage
  }
}



function movieTemplate(movie) {
  return `<section class='movie-detail'>
    <h2>${movie.Title}</h2>
    <button id='addToCollection'  data-id='${movie.Title}'>Add to Movie Collection</button>
    <br>
    <br>
    <picture>
        <source media='(min-width: 1200px)' srcset='${movie.Poster}'>
        <img
        class='divider'
        src='${movie.Poster}'
        alt='${movie.Title}'
        />
      </picture>
      <div id='movie-details'>
        <h3>Movie Details</h3>
        <ul>
            <li>Year: ${movie.Year}</li>
            <li>Rating: ${movie.Rated}</li>
            <li>Release Date: ${movie.Released}</li>
            <li>Runtime: ${movie.Runtime}</li>
            <li>Plot: ${movie.Plot}</li>
            <li> ${movie.Ratings[0].Source}: ${movie.Ratings[0].Value}</li>
        </ul>
      </div>
      <div>
      <h3>Playlists</h3>
      <button id='addToAction'  data-id='${movie.Title}'>Add to Action Playlist</button>
      <button id='addToDrama'  data-id='${movie.Title}'>Add to Drama Playlist</button>
      <button id='addToHorror'  data-id='${movie.Title}'>Add to Horror Playlist</button>
      <button id='addToFantasy'  data-id='${movie.Title}'>Add to Fantasy Playlist</button>
    </div>
    </section>`
}
