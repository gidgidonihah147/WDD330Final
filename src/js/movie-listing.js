import MovieData from "./movieData.mjs";
import movieListing from "./movieList.mjs";
import { qs, getParams } from "./utils.mjs";

const genre = getParams("genre");

// show the list of movies
var movies = new MovieData(genre);
console.log(movies);
var listElement = qs(".product-list");
console.log(listElement);
var titleElement = qs(".title");
console.log(titleElement);
var title = genre.toString();
title = title[0].toUpperCase() + title.slice(1);
titleElement.textContent = title;

var list = new movieListing(genre, movies, listElement);
list.init();
