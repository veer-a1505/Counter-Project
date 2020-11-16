import React, { useState }from 'react';

import './App.css'




const App = () => {
    let initialCount  = 0;
    let [Count, setCount] = useState(initialCount)

    const handleIncrement = () => {
        setCount(Count + 1) 
    }
    const handleDecrement = () => {
        Count >= 1 ? setCount(Count - 1) : alert("Oops! Your'e trying to lessening"); 
        Count !== 0 ? document.getElementById('value').style.color = 'red' : document.getElementById('value').style.color = 'black';
    }
    const handleReset = () => {
        setCount(initialCount)
        
    }

    return(
        <div className='container_new'>
            <h1>Counter</h1>
            <span id='value' style={{color : Count === 0 ? 'black' : 'green'}}>{Count}</span>
            <div>
                <button className="btn decrease"  onClick={handleDecrement} >decrease</button>
                <button className="btn reset" style={{color: 'black'}} onClick={() => handleReset()}>reset</button>
                <button className="btn increase"  onClick={() => handleIncrement()}>increase</button>
            </div>
        </div>

    )

}

export default App;