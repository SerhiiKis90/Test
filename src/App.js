import React from 'react';
import { Component } from 'react';
import './App.css';
import Item from './Item/Item';
import Header from './Header/Header';
import Btn from './Button/Button';
import Result from './Result/Result';
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
     data: ''
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
  this.setState({allAnswers : ert,answer:''})
} else if (this.state.count===5){
  const answer = this.state.answer;
  let ert = this.state.allAnswers;
  ert.push(answer);
  this.setState({allAnswers : ert, count: this.state.count +1})
}
  }

  onReset = () => {
    this.setState({
      list: jsonData.question_1.answers,
      question: jsonData.question_1.question,
      count:1,
      answer: '',
      allAnswers: [],
      data: ''
    })
  }


  compare = () => {
    const data = jsonData;
  const goodInf = [];
  for(let key in data) {
    goodInf.push(data[key].correct_answers[0])
  }
let result = this.state.allAnswers.map(function(item, i){
  return item === goodInf[i];
});
  let correctAnswers = 0;
  for (let i=0;i<result.length;i++){
    if(result[i]){correctAnswers++}
  }
 return(correctAnswers);
  }


addAnswers = () => {
  const answer = this.state.answer;
  let ert = this.state.allAnswers;
  ert.push(answer)
  this.setState({allAnswers : ert})
}
  render(){
    if(this.state.count===6) {
      return (
       <Result
       count = {this.state.count}
       compare={this.compare}
       onReset = {this.onReset}
       newCompare={this.newCompare}
       />
      )
    }else {
    return(
      <div className='app'>
      <Header/>
      <Item 
      list={this.state.list}
      question={this.state.question}
      count = {this.state.count}
      some={this.data}
      nextQuestion={this.nextQuestion}
      updateData={this.updateData}
      />
      <Btn
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
