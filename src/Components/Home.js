import {useForm} from '../Hooks/useForm'; 
import {useState, useEffect} from 'react'
import { useStore, withStore} from 'react-context-hook';


function Home() {
const [values, handleChange] = useForm({email: '', password: ''});
const [loginSuccess, setLoginSuccess] = useState({clicked:false, passed:false});
const [logged, setLogState, deleteLog] = useStore('logged');

var logResult = <div ></div>


const logSuccess = 
      <div className="logSuccess" >
        Welcome back!
      </div>
const logFail = 
< div className="logFail" >
  Email or password wrong.
</div>

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
        onClick={() =>{ 
            setLoginSuccess({clicked: true, passed: (values.email === 'me@mail0com' & values.password === '0000')});
            setLogState((values.email === 'me@mail0com' & values.password === '0000'));
          }
        } 
      />
      {logResult}
        
    </div>

  );
}

export default Home;