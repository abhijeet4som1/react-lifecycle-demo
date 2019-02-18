import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as abc from './Header';

class App extends Component {
  constructor(props){
    super(props);
    console.log("constructor");
    this.state = {
      counter: 0
    };
  }

  componentWillMount(){
    console.log("componentWillMount");
  }

  componentDidMount(){
    console.log("componentDidMount");
    this.increment();
  }

  increment = () => {
      this.setState({counter: this.state.counter + 1});
      setTimeout(this.increment, 100);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", prevState, this.state);
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate");
    return nextState.counter < 5 || nextState.counter > 50;
  }


  render() {
    console.log("render");
    return (
      <div className="App">
          <abc.Header name="Abhi" lname="asdf"/>
         {this.state.counter}
         <abc.Footer/>
      </div>
    );
  }
}

export default App;
