import React from 'react'
import {MainContainer, InnerContainer, Main} from './style';
import Header from './Header/Header';
import { useLocation } from 'react-router-dom';

function Layout({children}) {
  const location = useLocation()
  const path=location.pathname
  console.log(path)
  return (
    <MainContainer>
    <InnerContainer>
      {path !== '/login' ?  <Header />: '' }
         
    <Main>{children}</Main>
    </InnerContainer>
      </MainContainer>
  )
}

export default Layout