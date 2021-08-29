
// variables //

const key = "6c791e392079a30ca35365bfb296a27e";

const randomMovie = Math.round(Math.random() * 2000);

// Api's call //

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
  https://api.themoviedb.org/3/movie/top_rated?api_key=6c791e392079a30ca35365bfb296a27e&language=pt-BR&page=1`
 return await fetch(url).then((response) => response.json());



}
