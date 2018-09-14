import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from '../src/Greeting/Greeting';
import Fruit from '../src/Fruit/Fruit';
import Food from '../src/Food/Food';

class App extends Component {
  state = {
    counter: 0,
    clickedCount: 0
  }

  itemClicked = () => {
    var newCount = this.state.clickedCount + 1;
    this.setState({clickedCount: newCount});
    console.log('Clicked!');
  }

  clickHandler = () => {
    var newCount =  this.state.counter + 1;
    this.setState({counter: newCount});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Greeting />
        <Fruit name='lemon' cost='$2' clicked={this.itemClicked} />
        <Fruit name='mango' cost="$3" clicked={this.itemClicked} />
        <Fruit name='banana' cost='$4' clicked={this.itemClicked} />
        <Food name='meat' cost='$7' />
        <button onClick={this.clickHandler}>Click me!</button>
        <p>{this.state.counter}</p>
        <p>Fruits clicked: {this.state.clickedCount}</p>
      </div>
    );
  }
}

export default App;
