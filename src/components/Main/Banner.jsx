import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BotaoDefault, BotaoList, Icons } from "../UI/index";
import Play from "../../assets/img/play.svg";
import { ApiMovie, ApiMovieVideos } from "../../services/services";
import { GlobalFont } from "../UI/variables";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import Lottie from "react-lottie-player";
import animationData from "../../assets/lotties/close.json";
import Detail from "../../assets/img/detail.svg";
import { ListContext } from "../../contexts/UserListContext";

const BannerContainer = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  background-image: ${(props) => `url(${props.poster})`};
  background-position: top;
  background-size: cover;
  background-blend-mode: color;
  overflow: hidden;
  font-family: ${GlobalFont};
  align-items: center;
`;

const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 636px;
  height: 100vh;
  text-align: left;
  margin-left: 4rem;
  margin-top: 15%;

  .div_btn {
    margin-top: 1rem;
  }
`;

const MovieTitleBanner = styled.h2`
  font-size: 4rem;
  color: white;
  font-weight: bold;
  margin-top: 2rem;
  width: 100%;
  height: auto;
  max-height: 20%;
  overflow: auto;
`;

const MovieInfo = styled.h3`
  font-size: 1.4rem;
  color: white;
  font-weight: bold;
  margin: 2rem 0rem;
  width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const MovieInfoYear = styled(MovieInfo)`
  font-style: italic;
  margin: 0.1rem;
  font-size: 0.8rem;
`;

const MovieMetadescription = styled.p`
  font-size: 1rem;
  color: white;
  width: 80%;
  height: 20%;
  overflow: auto;
  line-height: 1.5rem;
`;

const BoxTrailer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MovieTrailer = styled.iframe`
  width: 90%;
  height: 90%;
  position: relative;
`;

const BtnTrailer = styled(BotaoDefault)`
  position: relative;
`;

const TitleAdd = styled.p`
  color: white;
`;

const Banner = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieInfo, setMovieInfo] = useState("");
  const [movieMetaDescription, setMovieMetaDescription] = useState("");
  const [posterMovie, setPosteRMovie] = useState("");
  const [movieReleaseYear, setMovieReleaseYear] = useState("");
  const [movieNote, setMovieNote] = useState("");
  const [movieGenre, setMovieGenre] = useState("");
  const [movieId, setMovieId] = useState("");

  const [movieTrailer, setmovieTrailer] = useState("");

  useEffect(() => {
    ApiMovieVideos().then((data) => {
      if (
        data.status_message === "The resource you requested could not be found."
      ) {
        console.log("erro " + data.status_message);
      } else {
        console.log(data.videos.results.length);

        data.videos.results.length > 1
          ? setmovieTrailer(data.videos.results[0].key)
          : console.log("sem video");
      }

      // <iframe width="560" height="315" src="https://www.youtube.com/embed/pz3PMQZFjdc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    });

    ApiMovie().then((data) => {
      if (
        data.status_message === "The resource you requested could not be found."
      ) {
        console.log("error - " + data.status_messag);

        setMovieTitle("Amnésia");
        setMovieReleaseYear("2001");
        setMovieGenre("Thriller");
        setMovieNote("8.4");
        setMovieInfo("Algumas memórias são melhor esquecidas.");
        setMovieMetaDescription(
          "Leonard está caçando o homem que estuprou e matou sua esposa. Ele tem dificuldades em encontrar o assassino pois sofre de uma forma intratável de perda de memória. Mesmo que ele possa lembrar detalhes da vida antes do acidente, Leonard não consegue lembrar o que aconteceu quinze minutos atrás, onde está indo ou a razão."
        );
        setPosteRMovie(
          `https://www.themoviedb.org/t/p/original/q2CtXYjp9IlnfBcPktNkBPsuAEO.jpg`
        );
        setmovieTrailer("sHRiMXd5fos");
        setMovieId(77);
      } else {
        const newDate = (date) => {
          const ArrayDate = date.split("-") || "nothing";

          return ArrayDate[0];
        };

        const releaseDateFormated = newDate(data.release_date);

        setMovieTitle(data.title);
        setMovieReleaseYear(releaseDateFormated);
        setMovieGenre(data.genres[0].name);
        setMovieNote(data.vote_average);
        setMovieInfo(data.tagline);
        setMovieMetaDescription(data.overview);
        setPosteRMovie(
          `https://www.themoviedb.org/t/p/original${data.backdrop_path}`
        );
        setMovieId(data.id);
      }
    });
  }, []);

  // - - -- - state of context list - - - -- //

  const { moviesId, setMoviesId } = React.useContext(ListContext);

  let vetorIdMovies = moviesId.arr || [];

  function HandleList(e) {
    const currentMovie = e.target.id;  
    const idNotRepeated =  moviesId.arr.find(atribute => atribute === currentMovie)

if(idNotRepeated === undefined) {

  vetorIdMovies.push(currentMovie);

  setMoviesId({ ...moviesId, arr: vetorIdMovies });
  localStorage.setItem("userMovieList", JSON.stringify(vetorIdMovies));
}

  
  }

  return (
    <Router>
      <BannerContainer poster={posterMovie}>
        <Switch>
          <Route exact path="/">
            <BoxContent>
              <MovieTitleBanner>{movieTitle}</MovieTitleBanner>
              <MovieInfoYear>
                <Icons src={Detail} />
                Data de lançamento: {movieReleaseYear} | Gênero: {movieGenre} |
                Nota da comunidade: {movieNote}
              </MovieInfoYear>
              <MovieInfo>{movieInfo}</MovieInfo>
              <MovieMetadescription>
                {movieMetaDescription}
              </MovieMetadescription>
              <div className="div_btn">
                <Link className="btn__link" to="/trailer">
                  <BotaoDefault inverted>
                    {" "}
                    <Icons src={Play} alt="play-icon" /> Play
                  </BotaoDefault>
                </Link>
                <BotaoDefault>
                  {" "}
                  <BotaoList id={movieId} onClick={HandleList}>
                    ➕
                  </BotaoList>{" "}
                  <TitleAdd>Adicionar à lista</TitleAdd>
                </BotaoDefault>
              </div>
            </BoxContent>
          </Route>

          <Route path="/trailer">
            <BoxTrailer>
              <Link className="btn__link" to="/">
                <BtnTrailer>
                  <div>
                    <Lottie
                      loop
                      animationData={animationData}
                      play
                      style={{ width: 50, height: 50 }}
                    />
                  </div>
                </BtnTrailer>
              </Link>
              <MovieTrailer
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${movieTrailer}?autoplay=1&mute=1`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></MovieTrailer>
            </BoxTrailer>
          </Route>
        </Switch>
      </BannerContainer>
    </Router>
  );
};

export default Banner;
