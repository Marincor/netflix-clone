import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { SearchContext } from "../../contexts/SearchContext";
import { GlobalFont } from "../UI/variables";

const SearchInput = styled.input`
  text-align: center;
  font-family: ${GlobalFont};
  padding: 0.5rem;
  border-radius: 1rem;
  animation: anime 0.5s;
  width: 50%;

  margin-left: 15rem;
  @keyframes anime {
    from {
      transform: translate3d(100px, 0, 0);
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }

  @media screen and (max-width:767px) {
    
    margin-left: 1rem;
    width: 6rem;
    padding: 1rem 1rem;
    
    
}


`;

const SearchForm = () => {
  const history = useHistory();
  const { searchInput, setSearchInput } = React.useContext(SearchContext);

  function search(e) {
    e.preventDefault();

    history.push("/resultado-de-busca");
    const searchContent = document.querySelector(`[data-input-search]`).value;
    console.log(searchContent);
    setSearchInput({ ...searchInput, content: searchContent });

    document.querySelector(`[data-input-search]`).value = "";

    // hiddenSearchInput //
    const form = e.target;
    form.classList.add("search");
  }

  return (
    <form className="search" data-search onSubmit={search}>
      <SearchInput
        data-input-search
        placeholder="Digite o nome desejado..."
        type="text"
      />
    </form>
  );
};


export default SearchForm