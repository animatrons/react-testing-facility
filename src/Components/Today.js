import React, { useState } from 'react';

function expensiveInitialState(){
    //.. some expensive computaions
    return 10;
  }

function Today() {
    const [count, setCount] = useState(() => expensiveInitialState()); //* you can pass in an arrow func that returns the init value as an arg, the why you may wanna do dis is if you have a computation that's really expensive, and that way it is only called for the first time and not on evry single time the component renders, so thats good to note you can only have it run on the initial value
    const [{ count1, count2}, setCountS] = useState ({ count1: 10, count2: 20});
    let today = new Date();
    let [month, date, year] = new Date().toLocaleDateString("en-US").split('-');
    let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split('/:| /');

    return (
      
        <div >
            <h1>
              Today is {[month, date, year]  }
            </h1>
            <div>
              local time: {[hour, minute, second]}
            </div>
            
        </div>
      
    );
  }
  
  export default Today;