import React, { useEffect, useState } from 'react';
import { useChange } from '../Hooks/useChange'

function expensiveInitialState() {
  //.. some expensive computaions
  return 10;
}

function This() {
  const [count, setCount] = useState(() => expensiveInitialState()); //* you can pass in an arrow func that returns the init value as an arg, the why you may wanna do dis is if you have a computation that's really expensive, and that way it is only called for the first time and not on evry single time the component renders, so thats good to note you can only have it run on the initial value
  const [{ count1, count2 }, setCountS] = useState({ count1: 10, count2: 20 });
  const [clicked, handleClicked] = useChange({sq1: false, sq2: false, sq3: false, sq4: false});
  var randColor = () => {return Math.random() * 250};

  useEffect(()=>{
    console.log(clicked);
  }, [clicked])

  return (

    <div className="this">
      <h1>
        This????
      </h1>
      <div className="grid-4">
        <div className="sq" 
             name="sq1" 
             id="sq1" 
             onClick = {handleClicked} 
             style = {clicked.sq1 ? {backgroundColor : `rgb(${randColor()},${randColor()},${randColor()})`}:{backgroundColor: "rgba(0,0,0,0)"}}>
          Square 1
        </div>
        <div className="sq" 
             name="sq2" 
             id="sq2" 
             onClick = {handleClicked} 
             style = {clicked.sq2 ? {backgroundColor : `rgb(${randColor()},${randColor()},${randColor()})`}:{backgroundColor: "rgba(0,0,0,0)"}}>
          Square 2
        </div>
        <div className="sq" 
             name="sq3" 
             id="sq3" 
             onClick = {handleClicked} 
             style = {clicked.sq3 ? {backgroundColor : `rgb(${randColor()},${randColor()},${randColor()})`}:{backgroundColor: "rgba(0,0,0,0)"}}>
          Square 3
        </div>
        <div className="sq" 
             name="sq4" 
             id="sq4" 
             onClick = {handleClicked} 
             style = {clicked.sq4 ? {backgroundColor : `rgb(${randColor()},${randColor()},${randColor()})`}:{backgroundColor: "rgba(0,0,0,0)"}}>
          Square 4
        </div>
      </div>

    </div>

  );
}

export default This;