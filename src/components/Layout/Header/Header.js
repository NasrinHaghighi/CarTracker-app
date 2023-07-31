import React from 'react'
import { Container,Top, Bottom,LogoDiv, Nav , LiItem,TopNav ,LoginBtn, TopLi} from './style'
import Logo from '../../../imges/logo.svg'


function Header() {
  return (
    <Container>

  <Top>
<TopNav>
    <LoginBtn>ثبت نام / ورود</LoginBtn>
    <TopLi>داشبورد</TopLi>
</TopNav>
  </Top>
  <Bottom>
<LogoDiv><img src={Logo} width={100} height={100} alt='logo'/></LogoDiv>
<Nav>
    <LiItem>خانه</LiItem>
   <LiItem>محصولات</LiItem>
   <LiItem>ارتباط با ما</LiItem>
   <LiItem>درباره ما</LiItem>
</Nav>
  </Bottom>
    </Container>
  )
}

export default Header