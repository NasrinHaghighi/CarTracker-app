
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
 
}
from 'mdb-react-ui-kit';
import { Wrraper , Logo} from './style';
import LogoImg from '../../imges/logo.svg'
import { Link } from "react-router-dom";

function LoginForm() {
  const [justifyActive, setJustifyActive] = useState('tab1');;
  
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };
  return (
<>
<Wrraper >
  <Logo><img src={LogoImg} style={{width:'300px',height:'150px' }} alt='logo'/></Logo>
    <MDBContainer className="square border border-2 p-5 my-5 d-flex flex-column w-50">

    <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
      <MDBTabsItem>
        <MDBTabsLink className='custom-link' onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
      ورود
        
        </MDBTabsLink>
      </MDBTabsItem>
      <MDBTabsItem>
        <MDBTabsLink className='custom-link' onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
         ثبت نام
        </MDBTabsLink>
      </MDBTabsItem>
    </MDBTabs>

    <MDBTabsContent>

      <MDBTabsPane show={justifyActive === 'tab1'}>

        <div className="text-center mb-3">
          <p > : ورود با  </p>

          <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='facebook-f' size="md"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='twitter' size="md"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='google' size="md"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='github' size="md"/>
            </MDBBtn>
          </div>

          <p className="text-center mt-3"    >یا </p>
        </div>

        <MDBInput className='bootestrapInput' wrapperClass='mb-4'  label='ایمیل' id='form1' type='email'/>
        <MDBInput className='bootestrapInput' wrapperClass='mb-4' label='پسورد' id='form2' type='password'/>

        <div className="d-flex justify-content-center mx-4 mb-4">
          {/* <MDBCheckbox className='remember' name='flexCheck' value='' id='flexCheckDefault' label='مرا به خاطر بسپار' /> */}
          <a href="!#">رمز عبور را فراموش کردم</a>
        </div>
        <Link to='/dashboard'>
        <MDBBtn className="mb-4 w-100" style={{ fontSize: '24px' }}>       
          ورود</MDBBtn></Link>




        <p className="text-center">حساب کاربری ندارید? <a href="#!"  onClick={() => handleJustifyClick('tab2')}> ثبت نام کنید</a></p>

      </MDBTabsPane>

      <MDBTabsPane show={justifyActive === 'tab2'}>

        <div className="text-center mb-3">
          <p>ثبت نام با  </p>

          <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='facebook-f' size="md"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='twitter' size="md"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='google' size="md"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='github' size="md"/>
            </MDBBtn>
          </div>

          <p className="text-center mt-3">یا</p>
        </div>

        <MDBInput className='bootestrapInput' wrapperClass='mb-4' label='نام' id='form1' type='text'/>
        <MDBInput className='bootestrapInput' wrapperClass='mb-4' label='نام کاربری' id='form1' type='text'/>
        <MDBInput className='bootestrapInput' wrapperClass='mb-4' label='ایمیل' id='form1' type='email'/>
        <MDBInput className='bootestrapInput' wrapperClass='mb-4' label='پسورد' id='form1' type='password'/>

        {/* <div className='d-flex justify-content-center mb-4'>
          <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
        </div> */}

        <MDBBtn className="mb-4 w-100 " style={{ fontSize: '24px' }}  onClick={() => handleJustifyClick('tab1')}>ثبت نام</MDBBtn>

      </MDBTabsPane>

    </MDBTabsContent>

  </MDBContainer>
</Wrraper>
  </>
  )
}

export default LoginForm