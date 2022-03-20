import React from 'react';
import '../assets/Form.css';
import success from '../assets/success.png';
//for test page
import { Navigate, useNavigate } from "react-router-dom";

const FormSuccess = () => {
  const navigate = useNavigate();
  const redirect=_=>{
    navigate("/");
  }

  setTimeout(() => {
    redirect()
}, 2000);

  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='form-img-2' src={success} alt='success-image' />
    </div>
    
  );
};

export default FormSuccess;
