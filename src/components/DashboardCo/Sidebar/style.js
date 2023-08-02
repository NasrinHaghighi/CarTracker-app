import styled from 'styled-components'


export const SidebarContainer=styled.section`
border-radius: 10px;
border: 2px solid ${props=>props.theme.borderColor};
padding: 10px;
direction: rtl;
background-color:#f0f0f0;
box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1)
//background-image: linear-gradient(-90deg, #5078f2 0%, #efe9f4 74%);

`
export const CarInfo=styled.div`
border-bottom: 3px solid ${props=>props.theme.borderColor};
padding: 10px;
`
export const Title=styled.h4`
margin-bottom:15px;
color: ${props=>props.theme.mainBG};


`
export const Code=styled.h5`

`