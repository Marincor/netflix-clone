import React from 'react';
import styled from 'styled-components';
import { BotaoDefault, Icons, Logo } from '../UI';
import Facebook from '../../assets/img/facebook.svg'
import Instagram from '../../assets/img/instagram.svg'
import Twitter from '../../assets/img/twitter.svg'
import Youtube from '../../assets/img/youtube.svg'
import Netflix from '../../assets/img/NetflixLogo.svg'
import TMDB from '../../assets/img/tmdb.svg'

const FooterContainer = styled.footer `

    width: 100vw;
    height: auto;
    display: flex;
 
   

`

const BoxMedia = styled.div `


padding-top: 2rem;
padding-bottom: 2rem;
width: 10rem;
display: flex;
height: auto;
justify-content: space-between;
align-items: center;
color: grey;

`

const BoxContainer = styled.div `


  
    width: 33.33vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:center ;
 


    @media screen and (max-width:767px) {

        width: 50vw;

        :nth-child(2) {


            display: none;
        }
     
    
}

`


const TitleCode = styled.h2 `

    border: 1px solid gray;
    font-size: 1rem;
    margin-left: -3rem;
    width: 2rem;
    padding: 1rem 2rem;
    color: grey;

`

const Rights = styled.h2 `


    font-size: 0.8rem;
    font-style: italic;
    margin-top: 1rem;
    padding-bottom: 1rem;
color: grey;

`

const LinkFooter = styled.a `

    width: 0rem;
    text-decoration: none;
    color: grey;
    cursor: pointer;

    :hover {

        background-color: gray;
        color: black;
    }
`

const Explanation = styled.p `

    font-size: 0.8rem;
    color: gray;
    width: 80%;
    padding-bottom: 1rem;
    line-height: 2rem;

`

export  const Footer = () => {



    return(

        <FooterContainer>

            <BoxContainer>
                    <BoxMedia>
                    <BotaoDefault><Icons alt='facebook-icon' inverted src={Facebook} /></BotaoDefault> 
                    <BotaoDefault><Icons alt='instagram-icon'inverted src={Instagram}/></BotaoDefault> 
                    <BotaoDefault><Icons alt='twitter-icon'inverted src={Twitter}/></BotaoDefault> 
                    <BotaoDefault><Icons alt='youtube-icon' inverted src={Youtube}/></BotaoDefault> 
                    </BoxMedia>

            <LinkFooter href='#'> <TitleCode> Code</TitleCode></LinkFooter>

            <Rights>© 2021 Netflix, Inc</Rights>
            </BoxContainer>

        <BoxContainer>

                <Logo alt='Netflix-logo'  src={Netflix}/>
                <Logo alt='TMDB-logo' src={TMDB}/>
        </BoxContainer>

          
        <BoxContainer>

            
        <Explanation>Esse site foi feito com o propósito de um estudo prático de técnologias como React Js e styled components. Foi utilizado o banco de dados da <LinkFooter>"TMDB - The Movie Data Base".</LinkFooter> Clone codado por <LinkFooter href='#'>Marincor.</LinkFooter> </Explanation>
        </BoxContainer>
         

        </FooterContainer>

    )
}
