
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

 
  @media screen and (max-width:767px) {

    width: 100px;
  height: 150px;
    
}


`;

export const BoxCardsItems = styled.div`


  margin-top: 2rem;
  width: 285px;
  height: 420px;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 1rem;
  background-position: bottom;
  background-image: ${(props) =>
    props.poster ? `url(${props.poster})` : `url(${Netflix})`};
  cursor: pointer;
  display: flex;
  background-color: #adadc0;
  flex-direction: column;
  align-items: flex-end;

 
.modal {

  display: flex;
  position: relative;
  background-color: transparent;
  font-family: ${GlobalFont};
  animation: anime .5s;

}

.modal:hover .modal {
  visibility: visible;

  color: black;
}

.modal:hover {
  visibility: visible;
  background-color: lightgray;
  animation: anime .2;
  color: black;
  position: relative;
}






@keyframes anime {

  from {
    transform: translate3d(0,-60px,0);
  }

  to {
    transform: translate3d(0,0,0);
  }

}



@media screen and (max-width:767px) {

  width: 275px;
  height: 410px;
    
}

`;


export const CardSession = styled.h2`
  font-size: 2rem;
  margin-top: 2rem;
  padding: 1rem;
  word-spacing: 1rem;
  width: 80vw;
`;


export const BoxLottie= styled.div `

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    width: ${(props) => props.primary};

`

export const BoxContent = styled.section`
  background-color: ${(props) => props.primaryColor? props.primaryColor : 'white'};
  width: 100%;
  height: auto;
  color: white;
  padding-top: ${(props) => props.paddingTop};
  margin-left:1rem;
  display: flex;
  flex-wrap: wrap;

 
  

`;



export const BoxArrows = styled.div `


    display: flex;
    background-color: transparent;
    flex-direction: row;
    width: auto;
    justify-content: space-between;
    

`