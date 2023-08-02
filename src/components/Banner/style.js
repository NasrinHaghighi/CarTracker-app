import styled from 'styled-components'
import BannerPic from '../../imges/home-banner.png'


export const BannerContainer=styled.section`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
height:700px ;
position: relative;


`
export const Text=styled.div`
padding: 80px 150px 80px 200px;
direction: rtl;

`
export const Title=styled.h2`
font-size: 1.875rem;
    line-height: 2.375rem;
    letter-spacing: 1px;
    margin-bottom: 1.875rem;




`
export const SubTit=styled.h6`
font-size: 18px;
line-height: 1.8;
    font-weight: 400;
    margin-bottom: 15px;

`
export const Pic=styled.div`
clip-path: polygon(100% 0, 100% 100%, 82% 100%, 0 100%, 26% 0);
 background-size: cover;
background:url(${BannerPic}); 
background-repeat: no-repeat;
 background-size: 100% 100%;
 position: relative;
 
`