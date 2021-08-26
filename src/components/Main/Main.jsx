import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';

const ContainerMain = styled.main `

    display: flex;
    height: auto;

`

export function Main () {



    return(

        <ContainerMain>
            <Banner/>

        </ContainerMain>
        
    )

}