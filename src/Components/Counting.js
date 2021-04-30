import React, { useState } from 'react';

function expensiveInitialState(){
    //.. some expensive computaions
    return 10;
  }

function Counting() {
    const [count, setCount] = useState(() => expensiveInitialState()); //* you can pass in an arrow func that returns the init value as an arg, the why you may wanna do dis is if you have a computation that's really expensive, and that way it is only called for the first time and not on evry single time the component renders, so thats good to note you can only have it run on the initial value
    const [{ count1, count2}, setCountS] = useState ({ count1: 10, count2: 20});
  
    return (
      
        <div >
            <h1>
              Start Counting
            </h1>
            <div>
              {/* <button className="btn-1" onClick = {() => setCountS(count + 1)}> plus </button>  */}
              {/* <button className="btn-3" onClick = {() => setCountS(0)}> reset </button> */}
              <div >{count1}</div>
              {/* <button className="btn-1" onClick = {() => setCount(current => current +1)}>plus</button> //* you can pass in an updater func, it takes a single parameter witch is the current state, a good idea to avoid raise condition thing and having two updates happen at the same time. */}
              <input 
                type="text" 
                placeholder="initialize counter" 
                onChange = { (e) => {
                    try {
                      if (isNaN(e.target.value) & e.target.value !== '') throw Error('bad entry: intiger only');
                      if (e.target.value == '' || e.target.value == ' ') setCountS({ count1: 0 });
                      else setCountS({ count1: parseInt(e.target.value) });
                    } catch (error) {
                      e.target.value = '';
                      e.target.placeholder = "integer only";
                    }
                    }
                }>


              </input>


              <button className="btn-1" onClick = {() => setCountS(current => ({ count1: current.count1 + 1, count2: current.count2}))}>plus</button> 


              <button className="btn-2" onClick = {() => setCountS({ count1: count1 - 1})}>minus</button>


              <button className="btn-3" onClick = {() => setCountS(current => ({ ...current, count1: 0}))}>reset</button>
              
               {/** to merge our obj we add the ...current obj spread so then count1 is overriden and count2 is preserved */}
            </div>
            
        </div>
      
    );
  }
  
  export default Counting;