import MovieData from './movieData.mjs';
import movieListing from './movieList.mjs';
import { qs, getParams } from './utils.mjs';

const genre = getParams('genre');

// show the list of movies
var movies = new MovieData(genre);
var listElement = qs('.product-list');
var titleElement = qs('.title');
var title = genre.toString();
title = title[0].toUpperCase() + title.slice(1);
titleElement.textContent = title;

var list = new movieListing(genre, movies, listElement);
list.init();
