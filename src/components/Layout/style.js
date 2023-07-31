import styled from 'styled-components'

export const MainContainer =styled.div`

background-color:${props=>props.theme.mainBG} ;
color:#faf9f9;

`
export const InnerContainer =styled.div`
margin: 0 100px;
min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export const Main =styled.div`
 margin-top: 100px;
`