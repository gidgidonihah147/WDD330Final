import { renderListWithTemplate } from './utils.mjs';

function movieCardTemplate(movie) {
    return `<li class="movie-card"><a href="/movie_pages/index.html?movie=${movie.Id}"><img
    src="${movie.Image}"
    alt="Image of ${movie.Title}"
    <h3 class="card__director">${movie.Source}</h3><h2 class="movie__name">${movie.Title}</h2><p class="movie-worldwide__price">${movie.Release}</p></a></li>
    
    `;
    
  }

export default class MovieListing {
    constructor(genre, dataSource, listElement) {
      // We passed in this information to make our class as reusable as possible.
      // Being able to define these things when we use the class will make it very flexible
      this.genre = genre;
      this.dataSource = dataSource;
      this.listElement = listElement;
    }
    async init() {
      // our dataSource will return a Promise...so we can use await to resolve it.
      const list = await this.dataSource.getData(this.genre);
      this.renderList(list);
 
    }
    renderList(list) {
        renderListWithTemplate(movieCardTemplate, this.listElement, list);
    }
}


