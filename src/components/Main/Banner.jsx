import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BotaoDefault, Icons } from "../UI/variables";
import Play from '../../assets/img/play.svg'
import { ApiMovie } from "../../services/services";




const Banner = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.3);
  align-items: center;
  background-image: ${props => `url(${props.poster})`};
  background-position: center;
  background-size: cover;
  background-blend-mode: color;
  overflow: hidden;
`;


const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 636px;
  height: 392px;
  text-align: left;
  margin-left: 4rem;


  .div_btn {

    margin-top: 1rem;
  }
`;

const MovieTitleBanner = styled.h2`
  font-size: 4rem;
  color: white;
  font-weight: bold;
  margin-top: 2rem;
`;
const MovieInfo = styled.h3`
  font-size: 1.4rem;
  color: white;
  font-weight: bold;
  margin: 2rem 0rem;
`;

const MovieMetadescription = styled.p`
  font-size: 1rem;
  color: white;
  width: 80%;
  line-height: 1.4rem;
`;

export default () => {

    const [movieTitle, setMovieTitle] = useState('');
    const [movieInfo, setMovieInfo] = useState('');
    const [movieMetaDescription, setMovieMetaDescription] = useState('');
    const [posterMovie, setPosteRMovie] = useState('')
  


    useEffect(()=>{


        ApiMovie().then(data => {

           
         

            console.log(data)
            
            console.log(data.status_message)

            if(data.status_message === 'The resource you requested could not be found.') {

                console.log('error - ' + data.status_messag)

                setMovieTitle('Memento');
                setMovieInfo('Algumas memórias são melhor esquecidas.')
                setMovieMetaDescription('Leonard está caçando o homem que estuprou e matou sua esposa. Ele tem dificuldades em encontrar o assassino pois sofre de uma forma intratável de perda de memória. Mesmo que ele possa lembrar detalhes da vida antes do acidente, Leonard não consegue lembrar o que aconteceu quinze minutos atrás, onde está indo ou a razão.')
                setPosteRMovie(`https://www.themoviedb.org/t/p/original/q2CtXYjp9IlnfBcPktNkBPsuAEO.jpg`)


            } else {

                setMovieTitle(data.original_title);
                setMovieInfo(data.tagline)
                setMovieMetaDescription(data.overview)
                setPosteRMovie(`https://www.themoviedb.org/t/p/original${data.backdrop_path}`)

            }
         

        })

        


    }, [])



  return (
    <Banner poster={posterMovie}>
      <BoxContent>
        <MovieTitleBanner>{movieTitle}</MovieTitleBanner>
        <MovieInfo>{movieInfo}</MovieInfo>
        <MovieMetadescription>
        {movieMetaDescription}
        </MovieMetadescription>
        <div className='div_btn'>
            <BotaoDefault inverted> <Icons  src={Play} alt='play-icon'/> Play</BotaoDefault>
        </div>
      </BoxContent>
    </Banner>
  );
};
