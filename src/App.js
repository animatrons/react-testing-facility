import React from 'react';
import { withStore, useStore } from 'react-context-hook';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './Views/Home';
import Emptiness from './Views/Emptiness';
import Features from './Views/Features';

const logState = {logged: false}; //* global state variable for login status
const featAccessState = {firstTime: false};


const App = () => {
  const [firstTime, setFirstTime, deleteFirstTime] = useStore('firstTime');

  return (
    <Router>
      <div className="App">

        <header className="header">          
          <span id="lnk1" className="spnLnk">
            <Link className="lnk" to='/' onClick = {() => setFirstTime(false)}>Home</Link>
          </span>
          <span id="lnk2" className="spnLnk">
            <Link className="lnk" to='/features' onClick = {() => setFirstTime(true)}>Features</Link>
          </span>
          <span id="lnk3" className="spnLnk">
            <Link className="lnk" to='/emptiness' onClick = {() => setFirstTime(false)}>Emptiness</Link>
          </span>
        </header>

        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/features'>
          <Features/>
        </Route>
        <Route path='/emptiness'>
          <Emptiness/>
        </Route>
        
      </div>
    </Router>
  );
}

export default withStore(App, logState, featAccessState);
// export default App;
