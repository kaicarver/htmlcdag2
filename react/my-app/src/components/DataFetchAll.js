import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './mystyle.css'

function DataFetchAll() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    // const [contacts, setContacts] = useState({});
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        // axios.get('http://localhost:5000')
        axios.get('http://jsonplaceholder.typicode.com/todos/')
        .then(response => {
            setLoading(false)
            setError('')
            setTodos(response.data)
        })
        .catch(error => {
            setLoading(false)
            setError('Something went wrong:' + error.message)
            console.log(error.message)
            setTodos({})
        });
    }, []); // ne pas le refaire 
    return todos.map(contact => {
         return (
            <div>
              <div className={contact.completed ? 'done' : 'todo'}>
                <h2>titre : {contact.title}</h2>
                <h2>userid : {contact.userId}</h2>
                <p>{contact.completed ? 'completed!' : 'todo...'}</p>
              </div>
              <hr></hr>
            </div>
        )
    })
}


export default DataFetchAll