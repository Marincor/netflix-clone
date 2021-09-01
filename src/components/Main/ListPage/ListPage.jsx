import React from "react";
import { BoxContent } from "../../UI/variables";
import { ListContext } from "../../../contexts/UserListContext";
import { BoxLine, TitleSection } from "../../UI";
import MoviesItems from "./MoviesItems";
import { Link } from "react-router-dom";

const ListPage = () => {
  const { moviesId } = React.useContext(ListContext);
  // welcome //
  let listMessage = "Essa é a sua lista de filmes:";

  if (moviesId.arr.length === 0) {
    listMessage =
      "Sua lista de filmes está vazia... Adicione algum filme a ela clicando no botão + localizado nos cards!";
  }

  return (
    <BoxContent paddingTop={"10rem"} primaryColor={"black"}>
      <BoxLine>
      <Link to='/lista/2' className='btn__link'><TitleSection> ir para a lista de séries  ➨ </TitleSection></Link>  
      </BoxLine>

      <BoxLine>
        <TitleSection>{listMessage}</TitleSection>
      </BoxLine>

      <MoviesItems />
    </BoxContent>
  );
};

export default ListPage;
