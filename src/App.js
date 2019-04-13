import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1212121, name: 'Vic', age: 33 },
      { id: 4355667, name: 'Ben', age: 31 },
      { id: 8948485, name: 'Max', age: 32 }
    ],

    personIsVisible: true
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 35 },
        { name: 'Maximi', age: 33 },
      ]
    });
  }


  togglePersonHandler = (newName) => {
    const personVisibilitystate = this.state.personIsVisible;
    this.setState({
      personIsVisible: (!personVisibilitystate)
    });
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }
    let person = null;

    if (this.state.personIsVisible) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return (<Person id={person.id} name={person.name} age={person.age} nameChanger={this.nameChangeHandler} />);
          })
          }
        </div>
      );

      style.backgroundColor = 'red';
    }

    return (
        <div className="App">
          <h1>I am Victor</h1>
          <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
          {person}
        </div>
    );
  }
}

export default App;
