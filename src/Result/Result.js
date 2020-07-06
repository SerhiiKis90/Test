import React, {Component} from 'react';
import './Result.css';

class Result extends Component {
 
    render(){
        return(
           <div className='result'>
            <h1>Ваш результат : {this.props.compare() * 20}  %</h1>
            <button 
            className="btn btn-secondary"
            onClick={this.props.onReset}
            >Спробувати ще раз</button>
            </div> 
        )
    }
}


export default Result;