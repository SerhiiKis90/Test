import React from 'react';
import './Button.css';

const Btn =({nextQuestion, count, answer}) => {
    
    return(
        <div className='buttonPart'>
            <div className='counter'>
            <p>{count}/5</p>
            </div>
            <div className='nextButton'>
            <button 
            className="btn btn-primary"
            onClick={() => this.setState({ count: this.state.count + 1 }),nextQuestion}
            >Продовжити</button>
            </div>
        </div>
     )
    }


export default Btn;