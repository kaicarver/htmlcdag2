import React from 'react'
import Person from './Person';

function NameList() {
    // const names = ['Tom', 'Max', 'Ké'];
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        }
    ];
    let personList = persons.map(person => (
        <Person person={person} textcolor="red"/>  
))
    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList