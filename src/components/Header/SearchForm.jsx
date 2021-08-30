import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { GlobalFont } from "../UI/variables";

const SearchInput = styled.input`
  text-align: center;
  font-family: ${GlobalFont};
  padding: 0.5rem;
  border-radius: 1rem;
  animation: anime .5s;

  @keyframes anime {
    from {

      transform: translate3d(100px, 0,0);
    }

    to{
      transform: translate3d(0,0,0);
    }


  }


`;

export default () => {

  const history = useHistory()


  function search (e) {
    e.preventDefault();
 

    history.push('/resultado-de-busca')
    const searchContent = e.target[0].value;
        sessionStorage.setItem('searchContent', searchContent)

  }



  return (
    <form className="search" onSubmit={search}>
      <SearchInput placeholder="Digite o nome desejado..." type="text" />
    </form>
  );
};
