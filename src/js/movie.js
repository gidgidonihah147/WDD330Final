import { getParams } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import MovieDetails from "./movieDetails.mjs";
//const fs = require('fs');

const dataSource = new ExternalServices();
const movieTitle = getParams("movie");
const movie = new MovieDetails(dataSource, movieTitle);
movie.init();
