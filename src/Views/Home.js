import {useForm} from '../Hooks/useForm'; 
import React, { useState, Suspense, useRef, useEffect } from 'react';
import { useStore} from 'react-context-hook';


function Home() {
const [values, handleChange] = useForm({email: '', password: ''});
const [loginSuccess, setLoginSuccess] = useState({clicked:false, passed:false});
const [logged, setLogState, deleteLog] = useStore('logged');
const TabSwitch = React.lazy(() => import('../Components/SubComponents/tabSwitch'));

const inptEmail = useRef();

useEffect(() => {
  if (!logged) inptEmail.current.focus();
},[logged])

var logResult = <div ></div>

if (loginSuccess.clicked & !loginSuccess.passed) {
  logResult = 
      <div className="logFail" >
        Email or password wrong. {logged}
      </div>
}

  if (!logged) 
  return (

    <div className="content">
      <h1>
        React testing facility<br/>
        <span>Please identify yourself</span>
      </h1>
      <div className="grid-form-2">

        <label htmlFor="email">
          Email:
        </label>
        <input 
          placeholder="input: me@mail.com"
          type="text" 
          id="email"
          name="email"
          value={values.email}
          onChange = {handleChange}
          ref={inptEmail}
        ></input>

        <label htmlFor="pass">
          Password: 
        </label> 
        <input 
          placeholder="input: 0000"
          type="password" 
          id="pass"
          name="password"
          value={values.password}
          onChange = {handleChange}
        >
        </input>

      </div>
      
      <input 
        type="submit" 
        value="Log In" 
        onClick={() =>{ 
            setLoginSuccess({clicked: true, passed: (values.email === 'me@mail.com' & values.password === '0000')});
            setLogState((values.email === 'me@mail.com' & values.password === '0000'));
          }
        } 
      />

      {logResult}
      <Suspense fallback = {<div> loading... </div>}>
        <TabSwitch  slnk = {1}></TabSwitch>
      </Suspense>
        
    </div>
  );

  return (
    <div className="content">
      <h1>
        React testing facility
      </h1>

      <div className="grid-form-1">
        <div className="logSuccess" >
          Welcome back!  
        </div>
      </div>
      
      <input 
        type="submit" 
        value="Log Out" 
        onClick={() =>{ 
            setLogState(false);
            }
          } 
      />
      <Suspense fallback = {<div> loading... </div>}>
        <TabSwitch  slnk = {1}></TabSwitch>
      </Suspense>
    </div>
  );
}

export default Home;