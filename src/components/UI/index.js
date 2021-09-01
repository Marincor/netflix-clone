import styled from "styled-components";
import { GlobalFont } from "./variables";

export const Logo = styled.img`
  width: 111px;
  height: 30px;
`;

export const Icons = styled.img`
  width: ${(props) => (props.primary ? "14px" : "20px")};
  height: ${(props) => (props.primary ? "14px" : "20px")};
  margin-bottom: ${(props) => (props.primary ? "0.5rem" : "0rem")};
  filter: ${(props) => (props.inverted ? "invert(100%)" : "none")}; ;
`;

export const ProfileIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const ItemLinks = styled.p`
  text-decoration: none;
  width: 68px;
  height: 18px;
  color: white;
  margin-right: 1rem;
`;

export const BotaoDefault = styled.button`
  background-color: ${(props) => (props.inverted ? "white" : "transparent")};
  width: ${(props) => (props.inverted ? "175px" : "auto")};
  height: ${(props) => (props.inverted ? "62px" : "auto")};
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const Box = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  color: black;
  z-index: 3000;
  position: fixed;
 
`;

export const BoxLine = styled.div `

  background-color: black;
  padding: 1rem;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: auto;

`

export const TitleSection = styled.h2 `

  word-spacing: -0.2rem;
  font-size: 1rem;
  font-family: ${GlobalFont};


`

export const BotaoList = styled.button `

  background-color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 20rem;
  padding: 1rem;
  
  :hover {

    background-color: black;

  }

  :active {

      padding: 2rem;

  }

`

export const BoxModalCard = styled.div `

 
    background-color: transparent;
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
      color:black;
    
 
`

export const ModalTitle = styled.h2 `

    padding: 1rem;
    color: transparent;
    font-size: 1.5rem;
    font-weight: bold;
    

` 
export const ModalInfo = styled.p `

    font-size: 0.8rem;
    color: transparent;
    margin: 1rem 0rem;
    font-style: italic;

`

export const ModalMetaDescription = styled.p `

    
    overflow: auto;
    font-size: 0.8rem;
    padding: 1rem;
    margin-bottom: 1rem;
    line-height: 1rem;
    height: 100%;
    color: transparent;


`