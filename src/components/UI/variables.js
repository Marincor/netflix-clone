import React from "react";
import styled from "styled-components";
import Netflix from "../../assets/img/NetflixLogo.svg";

export const GlobalFont = `'Netflix Sans', sans-serif;`

export const BoxSlider = styled.div`
  position: relative;
  padding-left: 2rem;
  display: flex;
  align-items: flex-start;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  background-color: black;
  font-family: ${GlobalFont};

  .slider {
    background-color: black;
    padding: 2rem;
    margin-right: 2rem;
  }
`;


export const BoxCards = styled.div`


  margin-top: 2rem;
  width: 285px;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 1rem;
  background-position: bottom;
  background-image: ${(props) =>
    props.poster ? `url(${props.poster})` : `url(${Netflix})`};
  cursor: pointer;
  display: flex;
  background-color: #adadc0;
  display: flex;
  align-items: flex-end;

 


`;


export const CardSession = styled.h2`
  font-size: 2rem;
  margin-top: 2rem;
  padding: 1rem;
  word-spacing: -0.5rem;
`;


export const BoxLottie= styled.div `

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    width: 100vw;

`