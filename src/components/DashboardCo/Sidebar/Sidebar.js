import React from 'react'
import {SidebarContainer, CarInfo , Title, Code} from './style'



function Sidebar() {
  return (
    <SidebarContainer>
        <CarInfo>
            <Title>مشخصات خودرو :</Title>
            <Code>خودرو BMW </Code>
            <Code><span> شماره پلاک : </span>  12 ی  524   </Code>
            <Code> <span> رنگ :</span>   قرمز    </Code>
        </CarInfo>
        <CarInfo>
        <Title> وضعیت خودرو  :</Title>
        <Code><span> موتور : </span>  روشن  </Code>
        <Code><span> سرعت: </span>  40 km/h  </Code>
        <Code><span> جهت حرکت: </span> به سمت شمال شرق </Code>
        </CarInfo>
    </SidebarContainer>
  )
}

export default Sidebar