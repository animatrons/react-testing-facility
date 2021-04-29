import {useForm} from '../Hooks/useForm'; 
import React, {useState, useEffect} from 'react'

// let globalLogStatus = new

function Home() {
const [values, handleChange] = useForm({email: '', password: ''});
const [loginSuccess, setLoginSuccess] = useState({clicked:false, passed:false});
// const [state, dispatch] = useGlobalState();
var logResult = <div ></div>

// useEffect(() => {
//   if(loginSuccess) {
//     logResult = 
//       <div className="logSuccess" >
//         Welcome back!
//       </div>
//   }
//   else {
//     logResult = 
//       <div className="logFail" >
//         Email or password wrong.
//       </div>
//   }
// }
// , [loginSuccess])
// if (loginSuccess) {
//   logResult = 
//     <div className="logSuccess"> 
//           email: {values.email}, 
//           password: {values.password}
//           passed?: {(values.email === 'me@mail0com' & values.password === '0000')}
//     </div>
// }
if (loginSuccess.clicked & loginSuccess.passed) {
  document.querySelector('.grid-form').style.display = 'none';
  logResult = 
      <div className="logSuccess" >
        Welcome back!
      </div>
}
else if (loginSuccess.clicked & !loginSuccess.passed) {
  
  logResult = 
      <div className="logFail" >
        Email or password wrong.
      </div>
}


  return (

    <div className="content">
      <h1>
        React testing facility
            </h1>
      <div className="grid-form">
        <label for="email">
          Email:
              </label>
        <input 
          placeholder="e: me@mail.com, pass: 0000"
          type="text" 
          id="email"
          name="email"
          value={values.email}
          onChange = {handleChange}
        ></input>
        <label for="pass">
          Password: 
        </label> 
        <input 
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
        onClick={() => {
          setLoginSuccess({clicked: true, passed: (values.email === 'me@mail.com' & values.password === '0000')});

        } } 
      />
     
      {logResult}

    </div>

  );
}


export default Home;