import React from 'react';
import { Component } from 'react';
import './App.css';
import Item from './Item/Item';
import Header from './Header/Header';
import Button from './Button/Button';
import jsonData from './Data/questions.json';

class App extends Component {
  constructor() {
    super()
    this.state = {
     list: jsonData.question_1.answers,
     question: jsonData.question_1.question,
     counter:1,
    }
  }
 

 

 nextQuestion = () => {
  var keys = Object.keys(jsonData);
  console.log(keys)
  }





 


  render(){

    return(
      <div>
      <Header/>
      <Item 
      list={this.state.list}
      question={this.state.question}
    
      />
      <Button 
      some={this.data}
      nextQuestion={this.nextQuestion}
      counter={this.state.counter}
      
      />
      </div>
    )
  }
 
}

export default App;
