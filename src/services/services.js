export function ApiPopularMovies () {

    const key = '6c791e392079a30ca35365bfb296a27e'

    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pt-BR`

   return fetch(url) .then (response => response.json());

} 


export function ApiMovie () {

    const randomMovie = Math.round( Math.random() * 2000);

    console.log(randomMovie)

    const key = '6c791e392079a30ca35365bfb296a27e'

    const url = `https://api.themoviedb.org/3/movie/${randomMovie}?api_key=${key}&language=pt-BR`

   return fetch(url) .then (response => response.json());

} 

