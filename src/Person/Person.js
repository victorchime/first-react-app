import React from 'react';
import classes from './Person.css'

const person = (props) => {

    return (
    <div className={classes.Person} onClick={props.personClick}>
        <p>I am {props.name} and I am {props.age} years old </p>
        <p>{props.children} </p>
        <input type='text' onChange={props.nameChanger}/>
    </div>
    );
}

export default person;