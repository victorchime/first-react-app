import React, { Component } from 'react';
import classes from './App.css';
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

  deleteHandler = (index) => {

    const personsCopy = [...this.state.persons]
    personsCopy.splice(index, 1);
    this.setState({
      persons: personsCopy
    })

  }

  render() {

    let person = null;
    let buttonClass = null;

    if (this.state.personIsVisible) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return (<Person key={person.id} name={person.name} age={person.age} 
              nameChanger={this.nameChangeHandler} onClick={this.deleteHandler} personClick={() => this.deleteHandler(index)}/>);
          })
          }
        </div>
      );

      buttonClass = classes.Red
    }

    const assignedClasses = [];

    if(this.state.persons.length <= 2){
        assignedClasses.push(classes.red)
    }
    if(this.state.persons.length <= 1){
        assignedClasses.push(classes.bold)
    }
    
    return (
        <div className={classes.App}>
          <h1>I am Victor</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button className={buttonClass} onClick={this.togglePersonHandler}>Toggle Persons</button>
          {person}
        </div>
    );
  }
}

export default App;

