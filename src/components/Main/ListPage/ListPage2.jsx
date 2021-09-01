import React from "react";
import {  BoxContent } from "../../UI/variables";
import { ListContext } from "../../../contexts/UserListContext";
import {  BoxLine, TitleSection } from "../../UI";
import SeriesItems from "./SeriesItems";
import { Link } from "react-router-dom";






const ListPageDois =  () => {


  const { seriesId } = React.useContext(ListContext);
 // welcome //
 let listMessage = 'Essa é a sua lista de séries:'

 if ( seriesId.arr.length === 0  ) {


   listMessage = "Sua lista de séries está vazia... Adicione alguma série a ela clicando no botão + localizado nos cards!"
 }

 
  return (
    <BoxContent paddingTop={"10rem"} primaryColor={"black"}>

<BoxLine>
      <Link to='/lista/1' className='btn__link'><TitleSection> ⮌ voltar para a lista de filmes  </TitleSection></Link>  
      </BoxLine>

            <BoxLine>
                <TitleSection>{listMessage}</TitleSection>
            </BoxLine>
        
       
        
           <SeriesItems/> 
         
         
    </BoxContent>
  );
};


export default ListPageDois;