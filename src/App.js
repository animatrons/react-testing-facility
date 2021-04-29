import React, { useState, Suspense } from 'react';
import { useStore, withStore} from 'react-context-hook';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Counting from './Components/Counting';
import Emptiness from './Components/Emptiness';
import Features from './Components/Features';

const logState = {logged: false};

const App = () => {
  const [lswitch, setLSwitch] = useState(1);
  const LSwitch = React.lazy(() => import('./Components/LinkSwitch'));
  console.log(App);
  return (
    <Router>
      <div className="App">
        <header className="header">
          {/* {lnk1}
          {lnk2}
          {lnk3} */}
          <span id="lnk1" className="spnLnk">
            <Link className="lnk" onClick={() => setLSwitch(1)} to='/'>Home</Link>
          </span>
          <span id="lnk2" className="spnLnk">
            <Link className="lnk" onClick={() => setLSwitch(2)} to='/features'>features</Link>
          </span>
          <span id="lnk3" className="spnLnk">
            <Link className="lnk" onClick={() => setLSwitch(3)} to='/emptiness'>Emptiness</Link>
          </span>
          {/* <span id="lnk4" className="spnLnk">
            <Link className="lnk" onClick={() => setLSwitch(4)} to='/emptiness'>Emptiness</Link>
          </span>
          <span id="lnk5" className="spnLnk">
            <Link className="lnk" onClick={() => setLSwitch(5)} to='/emptiness'>Emptiness</Link>
          </span> */}
        </header>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/features'>
          <Features></Features>
        </Route>
        <Route path='/emptiness'>
          <Emptiness></Emptiness>
        </Route>
        <Suspense fallback = {<div> loading... </div>}>
          <LSwitch  slnk = {lswitch}></LSwitch>
        </Suspense>
      </div>
    </Router>
  );
}

export default withStore(App, logState);
