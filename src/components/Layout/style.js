import styled from 'styled-components'

export const MainContainer =styled.div`

background-color:${props=>props.theme.mainBG} ;
color:#000;
width: 100wh;

`
export const InnerContainer =styled.div`


min-height: 100vh;
position: relative;
display: flex;
flex-direction: column;
background-color:${props=>props.theme.lightBg} ; ;
`

export const Main =styled.div`

`