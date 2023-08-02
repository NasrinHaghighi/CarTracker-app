import React from 'react'
import { Container,Top, Bottom,LogoDiv, Nav , LiItem,TopNav ,LoginBtn, TopLi,DashboardHeader, Info, TopDashboard, ExitBtn, Name} from './style'
import Logo from '../../../imges/logo.svg'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


function Header() {
  const path=useLocation()
  const pathname=path.pathname

  return (
    <>
    {
      pathname=== '/dashboard' ?
      <DashboardHeader>
      <TopDashboard>
      <ExitBtn>خروج</ExitBtn>
        <Info>
         <h3>   آقای     <Name> علی محمدی </Name> خوش آمدید</h3>
        </Info>
        
      </TopDashboard>
      <Bottom>
<LogoDiv><img src={Logo} width={100} height={100} alt='logo'/></LogoDiv>
<Nav>
    <LiItem>خانه</LiItem>
   <LiItem>محصولات</LiItem>
   <LiItem>ارتباط با ما</LiItem>
   <LiItem>درباره ما</LiItem>
</Nav>
  </Bottom>
    </DashboardHeader> 
    :
   
    <Container>

  <Top>
<TopNav>
<Link to='/login'><LoginBtn >ثبت نام / ورود</LoginBtn></Link>
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
     }
    </>
  )
}

export default Header