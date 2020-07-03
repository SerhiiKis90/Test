import {Component} from 'react';
import React from 'react';

const Item = ({list, question}) => {

const listItems = list.map((i) => 
	<label>
		<input type="radio" value="option1"  />
			{i}
	</label>)
	return(
		<div>
            <h2>{question}</h2>
			
				{listItems}
				
			
		</div>
		);
}
export default Item;