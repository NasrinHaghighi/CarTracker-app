import React from 'react'
import {MainContainer, InnerContainer, Main} from './style';
import Header from './Header/Header';


function Layout({children}) {
  return (
    <MainContainer>
    <InnerContainer>
         <Header /> 
    <Main>{children}</Main>
    </InnerContainer>
      </MainContainer>
  )
}

export default Layout