
// variables //

const key = "6c791e392079a30ca35365bfb296a27e";

const randomMovie = Math.round(Math.random() * 2000);

// -------------------------------- Api's call -------------------------------- //




//  - - - - -- Carousel images - - - - - - - //

export async function ApiPopularMovies() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pt-BR`;

  return await fetch(url).then((response) => response.json());
}

export async function ApiMovie() {
  const url = `https://api.themoviedb.org/3/movie/${randomMovie}?api_key=${key}&language=pt-BR`;

  return await fetch(url).then((response) => response.json());
}


export async function ApiMovieVideos() {
  const url = `https://api.themoviedb.org/3/movie/${randomMovie}?api_key=${key}&append_to_response=videos`;

  return await fetch(url).then((response) => response.json());
}

export async function ApiMovieTopRated () {

  const url = `
  https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=pt-BR&page=1`
 return await fetch(url).then((response) => response.json());



}

export async function ApiMovieComingSoon () {

  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=pt-BR&page=2`
 return await fetch(url).then((response) => response.json());



}

export async function ApiTvSeries () {

  const url = `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=pt-BR&page=1`
 return await fetch(url).then((response) => response.json());



}

export async function ApiTvSeriesPage (e) {

  const url = `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=pt-BR&page=${e}`
 return await fetch(url).then((response) => response.json());



} 

export async function ApiMovieComingSoonPage (e) {

  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=pt-BR&page=${e}`
 return await fetch(url).then((response) => response.json());



}

export async function ApiMovieTopRatedPage (e) {

  const url = `
  https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=pt-BR&page=${e}`
 return await fetch(url).then((response) => response.json());



}

//  - - - - -- Pages link in NavBar menu - - - - - - - //

export async function ApiMoviesPage(e) {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pt-BR&page=${e}`;

  return await fetch(url).then((response) => response.json());
}

export async function ApiPopularTrendingPage() {
  const url = `https://api.themoviedb.org/3/trending/all/week?api_key=${key}&language=pt-BR`;

  return await fetch(url).then((response) => response.json());
}




//  - - - - -- Search - - - - - - - //


export async function ApiSearchItens(e, num) {
  const url = `
  https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&query=${e}&page=${num}&include_adult=false`;

  return await fetch(url).then((response) => response.json());
}





 // -- - -- - - -- Render List ---------- //

 
export async function ApiMovieList(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=pt-BR`;

  return await fetch(url).then((response) => response.json());
}

export async function ApiSeriesList(id) {
  const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${key}&language=pt-BR`;

  return await fetch(url).then((response) => response.json());
}
