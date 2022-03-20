import React, { useState } from 'react';
import '../assets/Form.css';
import FormSignin from './FormSignin';
//import FormSuccess from './FormSuccess';
import logo from '../assets/logo.svg';

import { Navigate ,useNavigate} from 'react-router-dom'; 
const FormSin = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
    const name='';
    const navigate = useNavigate();
    const redirect=_=>{
      navigate("/error");
    }
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'></span>
        <div className='form-content-left'>
          <img className='form-img' src={logo} alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormSignin submitForm={submitForm}  username={name}/>
        ) : (
          redirect()
        )}
      </div>
    </>
  );
};

export default FormSin;
