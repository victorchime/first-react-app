import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Vic', age: 33},
      {name: 'Max', age: 32}
    ]
  }

  nameChangeHandler = (event) => {
    this.setState( {
    persons: [
      {name: event.target.value, age: 35},
      {name: 'Maximi', age: 33},
    ]
  });
}

switchNameHandler = (newName) => {
  this.setState( {
  persons: [
    {name: this.state.persons[0].name, age: 35},
    {name: newName, age: 33},
  ]
});
}

  render() {
    return (
      <div className="App">
      <h1>I am Victor</h1>
      <button onClick={this.switchNameHandler.bind(this, 'Maximum')}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} nameChanger={this.nameChangeHandler}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      </div>
    );
  }
}

export default App;
