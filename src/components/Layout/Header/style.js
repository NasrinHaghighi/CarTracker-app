import styled from 'styled-components'

export const Container=styled.section`
background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
height:200px;
z-index: 4;
position:fixed;
 width:100%;
 color:${props=>props.theme.fontColor};

`
export const Top=styled.div`
height: 70px;
border-bottom: 2px solid red;
padding: 15px 50px;
`
export const Bottom=styled.div`
height: 100px;
padding: 0 50px;
display: flex;
justify-content: space-between;
align-items: center;
`
export const LogoDiv=styled.div`

`
export const Nav=styled.ul`
 list-style-type: none;
 display: flex;
 flex-flow: row-reverse;
`
export const LiItem=styled.li`
font-size: 20px;
margin-left: 50px;
`
export const TopNav=styled.ul`
 list-style-type: none;
 display: flex;
 flex-flow: row-reverse;
 align-items: center;
 justify-content: flex-start;
 font-size: 24px;
 font-weight: 600;
`
export const LoginBtn=styled.li`
font-size: 20px;
margin-left: 50px;
width: 200px;
background-color: ${props=>props.theme.red};
padding: 10px 20px;
text-align: center;
border-radius: 10px;
transition: all .3s ease-in-out;
color: #fff !important;
&:hover {
    background-color: ${props=>props.theme.redHover};
  }
`
export const TopLi=styled.li`
font-size: 20px;
margin-left: 50px;
`


/***Dashborde Header */

export const DashboardHeader=styled.section`
background: ${props=>props.theme.mainBG};
height:170px;
z-index: 4;
position:absolute;
 width:100%;

`
export const TopDashboard=styled.div`
height: 70px;
border-bottom: 2px solid red;
padding: 15px 80px;
display: flex;
justify-content: space-between;

`
export const Info=styled.div`


`
export const ExitBtn=styled.div`
font-size: 20px;
margin-left: 50px;
width: 200px;
background-color: ${props=>props.theme.red};

text-align: center;
border-radius: 10px;
transition: all .3s ease-in-out;
color: #fff !important;
&:hover {
    background-color: ${props=>props.theme.redHover};
  }
`
export const Name=styled.span`

  color: ${props=>props.theme.green};

`
