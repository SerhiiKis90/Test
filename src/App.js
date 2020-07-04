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
     count:1,
     answer: '',
     allAnswers: [],
    }
  }
  updateData = (value) => {
    this.setState({ answer: value })
 }
 nextQuestion = () => {
  const data = jsonData;
  const myData = Object.keys(data).map(key => {
    return data[key];
  })
if (this.state.count<5) {
  this.setState({list:myData[this.state.count].answers,question:myData[this.state.count].question,count: this.state.count + 1});
  const answer = this.state.answer;
  let ert = this.state.allAnswers;
  ert.push(answer);
  this.setState({allAnswers : ert})
} else if (this.state.count===5){
  const answer = this.state.answer;
  let ert = this.state.allAnswers;
  ert.push(answer);
  this.setState({allAnswers : ert, count: this.state.count +1})
  console.log(this.compare().length * 20)
}
  }
compare = () => {
  const data = jsonData;
  const goodInf = [];

  for(let key in data) {
    goodInf.push(data[key].correct_answers[0])
  }
  let result = [];
  goodInf.forEach((e1)=>this.state.allAnswers.forEach((e2) =>
  {if(e1===e2){
    result.push(e1)
  }}))
  return result
}
addAnswers = () => {
  const answer = this.state.answer;
  let ert = this.state.allAnswers;
  ert.push(answer);
  this.setState({allAnswers : ert})
}
  render(){
    if(this.state.count==6) {
      return (
      <h1>Ваш результат : {this.compare().length * 20}</h1>
      )
    }else {
    return(
      <div>
      <Header/>
      <Item 
      list={this.state.list}
      question={this.state.question}
      count = {this.state.count}
      some={this.data}
      nextQuestion={this.nextQuestion}
      updateData={this.updateData}
      />
      <Button 
      some={this.data}
      nextQuestion={this.nextQuestion}
      count={this.state.count}
      answer = {this.addAnswers}
      />
      </div>
    )
    }
  }
}
export default App;
