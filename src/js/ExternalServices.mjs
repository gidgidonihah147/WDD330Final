// BYUI/local Login
const baseURL = 'https://www.omdbapi.com/?apikey=12fcf9e2&'
//External Site login
//const baseURL = 'https://wdd330-backend.onrender.com/'

async function convertToJson(res) {
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw { name: 'servicesError', message: data};
  }
}


export default class ExternalServices {
  constructor() {
    // this.category = category;
    // this.path = `../json/${this.category}.json`;
  }
  async init(){
      document.getElementById('movieSearch')
      .addEventListener('click', this.movieSearch.bind(this));
  }
  async getData(Title) {
    const response = await fetch(baseURL + `t=${Title}&plot=full`);
    const data = await convertToJson(response);
    return data.Result;
  }
  async findMovieByTitle(Title) {
    var str = Title.replace(/\s+/g, '+')
    const response = await fetch(baseURL + `t=$${str}&plot=full`);
    const data = await convertToJson(response);
    return data;
  }

}
