import {Component} from 'react';
import React from 'react';


const Button =({some, nextQuestion, counter}) => {
    return(
        <div>
            <p>{counter}/5</p>
            <button onClick={nextQuestion}>Продовжити</button>
        </div>
     )
    }


export default Button;