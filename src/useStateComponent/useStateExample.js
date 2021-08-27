import React, {useState} from 'react';
import './useStateExample.css';

function Example(){
   
    const [count, setCount] = useState(0);
    const [isRed, setRed] = useState(false);

    const increment = () => {
        setCount(count+1);
        setRed(!isRed);
    };

    const clearCount = () => {
        setCount(0);
        
    };

    return(
        <div>
            <h1 className={ isRed ? 'red' : 'blue'}>{count}</h1>
            <span class="textAction"><p onClick={clearCount}>Clear Count</p></span>
            <button Class="button button1" onClick={increment}>Increment</button>
            <button Class="button button3" onClick={() => {count===0 ? setCount(0):setCount(count - 1)}}>Decrement</button>
        </div>
    );
}

export default Example;