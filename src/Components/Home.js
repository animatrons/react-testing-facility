import {useForm} from '../Hooks/useForm'; 
import {useState} from 'react'
import { useStore} from 'react-context-hook';


function Home() {
const [values, handleChange] = useForm({email: '', password: ''});
const [loginSuccess, setLoginSuccess] = useState({clicked:false, passed:false});
const [logged, setLogState, deleteLog] = useStore('logged');

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
        onClick={() =>{ 
            setLoginSuccess({clicked: true, passed: (values.email === 'me@mail.com' & values.password === '0000')});
            setLogState((values.email === 'me@mail.com' & values.password === '0000'));
          }
        } 
      />

      {logResult}
        
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
    </div>
  );
}

export default Home;