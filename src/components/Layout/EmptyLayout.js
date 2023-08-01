import React from 'react'
import {MainContainer, InnerContainer, Main} from './style';
import Header from './Header/Header';

function EmptyLayout({children}) {
  return (
    <MainContainer>
    <InnerContainer>
     
       <Main>{children}</Main>
    </InnerContainer>
      </MainContainer>
  )
}

export default EmptyLayout