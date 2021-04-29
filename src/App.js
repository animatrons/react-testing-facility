import React, { useState, Suspense } from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Counting from './Components/Counting';
import Emptiness from './Components/Emptiness';
import Feats from './Components/Feats';

const defaultGlobalState = {
  logStatus: false,
};
const globalStateContext = React.createContext(defaultGlobalState);
const dispatchStateContext = React.createContext(undefined);

const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer (
    (state, newValue) => ({ ...state, ...newValue }),
    defaultGlobalState
  );
  return (
    <globalStateContext.Provider value = {state}>
      <dispatchStateContext.Provider value = {dispatch}>
        {children}
      </dispatchStateContext.Provider>
    </globalStateContext.Provider>
  )
}

const useGlobalState = () => [
  React.useContext(globalStateContext),
  React.useContext(dispatchStateContext)
];

const App = () => {
  const [lswitch, setLSwitch] = useState(1);
  const LSwitch = React.lazy(() => import('./Components/LinkSwitch'));
  console.log(App);
  return (
    <Router>
      <GlobalStateProvider>
        <div className="App">
         <header className="header">
           {/* {lnk1}
           {lnk2}
           {lnk3} */}
           <span id="lnk1" className="spnLnk">
             <Link className="lnk" onClick={() => setLSwitch(1)} to='/'>Home</Link>
           </span>
           <span id="lnk2" className="spnLnk">
             <Link className="lnk" onClick={() => setLSwitch(2)} to='/feats'>Features</Link>
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
         <Route path='/feats'>
           <Feats></Feats>
         </Route>
         <Route path='/emptiness'>
           <Emptiness></Emptiness>
         </Route>
         <Suspense fallback = {<div> loading... </div>}>
           <LSwitch  slnk = {lswitch}></LSwitch>
         </Suspense>
        </div>
      </GlobalStateProvider>
    </Router>
  );
}

export default App;
