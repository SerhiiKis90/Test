
import React, { Component } from 'react';
import './Item.css';



class Item extends Component{
	constructor(props) {
		super(props)
		this.state = {
			answer:[],
		}
		
		this.addAnswer = this.addAnswer.bind(this);
	  }
	  addAnswer(event) {
		  
		this.props.updateData(event.target.value)
	  }  
	render(){
		const listItems = this.props.list.map((i) => 
		
			<div key={i}>
				<label><input type="radio" id="male" name="gender" onChange={this.addAnswer} value={i} key={this.props.count}/>{i}</label>
			</div>	
		)
		return(
			<div className='item'> 
			<h3>Запитання №{this.props.count}</h3>
            <h2 >{this.props.question}</h2>
			<form>
				{listItems}
			</form>		
		</div>
		);
	}
} 
export default Item;