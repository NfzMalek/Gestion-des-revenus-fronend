import axios from 'axios'
import { Navigate, useNavigate } from "react-router-dom";

import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    password: '',
  });
  //const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };


  const api= axios.create({
    baseURL:'http://localhost:8070',
    headers: {
        "Content-Type": "application/json"
        }
    
    }
)
const redirect=_=>{
  navigate("/malek");
}
const login =()=>{

  let resutl =api.post('/authenticate',{
      username: values.username,
      password: values.password,
      is_staff:true
  }).then(userResponse =>{
      console.log(userResponse)
      //setLoading(true)
      redirect()
      // setTimeout(() => {
         
      // }, 1000);

  }).catch((errorResponse)=>{
      console.log(errorResponse)
  })
}
  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));

    //e.preventDefault()
    login()
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
