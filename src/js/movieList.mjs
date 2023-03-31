import { getLocalStorage, renderListWithTemplate, alertMessage } from './utils.mjs';

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error('Bad Response');
  }
}
function sortByProperty(property){  
  return function(a,b){  
     if(a[property] > b[property])  
        return 1;  
     else if(a[property] < b[property])  
        return -1;  
 
     return 0;  
  }  
}

function movieCardTemplate(movie) {
    return `<li class='movie-card'><a href='/movie_pages/index.html?movie=${movie.Title}'><img
    src='${movie.Poster}'
    alt='Image of ${movie.Title}'
    <h3 class='card__director'>${movie.Director}</h3><h2 class='movie__name'>${movie.Title}</h2><p >${movie.Year}</p></a></li>
    
    `;
    
  }
  var sort = 'Title';


export default class MovieListing {
    constructor(genre, dataSource, listElement) {
      // We passed in this information to make our class as reusable as possible.
      // Being able to define these things when we use the class will make it very flexible
      this.genre = genre;
      this.dataSource = dataSource;
      this.listElement = listElement;
      this.path = `../public/json/${this.genre}.json`;
    }
    getData() {
      return fetch(this.path)
        .then(convertToJson)
        .then((data) => data.sort(sortByProperty(sort)));
    }
    async init() {
      // our dataSource will return a Promise...so we can use await to resolve it.
      const list = getLocalStorage(this.genre);
      const localJSON = await this.getData();
      this.renderLocalJson(list,localJSON);
    }
    
    renderLocalJson(list,LocalJSON){
      if (list == null){
        alertMessage('There is no local storage - rendering from localJson');
        LocalJSON.sort(sortByProperty(sort));
        renderListWithTemplate(movieCardTemplate, this.listElement, LocalJSON);
      }
      else{
        alertMessage('Rendered from your browsers localstorage. Delete your localStorage to view the sample movies from localJson')
        list.sort(sortByProperty(sort));
        renderListWithTemplate(movieCardTemplate, this.listElement, list)
      }
    }
}