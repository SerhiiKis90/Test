
import React from 'react';


const Button =({nextQuestion, count, answer}) => {
    return(
        <div>
            <p>{count}/5</p>
            <button 
            onClick={() => this.setState({ count: this.state.count + 1 }), nextQuestion}
            >Продовжити</button>
        </div>
     )
    }


export default Button;