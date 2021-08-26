import styled from "styled-components";


export const Logo = styled.img `

    width: 111px;
    height: 30px;


`

export const Icons = styled.img`


    width: ${(props)=> props.primary? '14px': '20px'};
    height: ${(props)=> props.primary? '14px': '20px'};
    margin-bottom: ${(props)=> props.primary? '0.5rem': '0rem'}; ;
    filter: invert(100%);

`



export const ProfileIcon = styled.img`

    width:32px;
    height:32px;


`

export const ItemLinks = styled.a `

    text-decoration: none;
    width:68px;
    height: 18px;
    color: white;
    margin-right: 1rem;

`

export const BotaoDefault =  styled.button `


    background-color: transparent;
    width:auto ;
    height: auto;
    border: none;
    cursor: pointer;


`