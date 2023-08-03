import React, { useState, useEffect } from 'react'
import { Container,Top, Bottom,LogoDiv, Nav , LiItem,TopNav ,LoginBtn, TopLi,DashboardHeader, Info, TopDashboard, ExitBtn, Name} from './style'
import Logo from '../../../imges/logo.svg'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


function Header() {
  /**set change background color by scroll */
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 200;

      if (scrollY > threshold) {
        setScrolled(true); 
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
console.log(scrolled)

  /**listen to location to render different header */
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
<LogoDiv><img src={Logo} width={300} height={100} alt='logo'/></LogoDiv>
<Nav>
    <LiItem>خانه</LiItem>
   <LiItem>محصولات</LiItem>
   <LiItem>ارتباط با ما</LiItem>
   <LiItem>درباره ما</LiItem>
</Nav>
  </Bottom>
    </DashboardHeader> 
    :
   
    <Container scrolled={scrolled}>

  <Top>
<TopNav>
<LoginBtn > <Link to='/login'>  ثبت نام / ورود   </Link></LoginBtn>
<TopLi>داشبورد</TopLi>
</TopNav>
  </Top>
  <Bottom>
<LogoDiv><img src={Logo} width={300} height={100} alt='logo'/></LogoDiv>
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