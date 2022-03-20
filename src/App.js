import logo from './logo.svg';
import './App.css';
//import Authentification from './components/login/Authentification';
//import Form from './components/signin/Form';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
//import FormSignin from './components/signin/FormSignin';
import Form from './components/signup/Form';
import FormSin from './components/signin/FormSigIn';
import FormSuccess from './components/signup/FormSuccess';

import ErrorLogin from './components/signin/ErrorLogin';



function App() {
  const data={
    "users": [
      {
        "id": 0,
        "name": "Adam Carter",
        "work": "Unilogic",
        "email": "adam.carter@unilogic.com",
        "dob": "1978",
        "address": "83 Warner Street",
        "city": "Boston",
        "optedin": true
      },
      {
        "id": 1,
        "name": "Leanne Brier",
        "work": "Connic",
        "email": "leanne.brier@connic.org",
        "dob": "1987",
        "address": "9 Coleman Avenue",
        "city": "Toronto",
        "optedin": false
      }
    ],
   
  }
  
  return (
<BrowserRouter>
<div className=''>
  <div className=''>
  </div>
<Routes>
        <Route path="/" exact element={<FormSin />}/>

        <Route path="/Singup" exact element={<Form />}/>
        <Route path="/error" exact element={<ErrorLogin />}/>
       
 
</Routes>
</div>
</BrowserRouter>
  );
}

export default App;
