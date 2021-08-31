import styled from "styled-components";

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
`;