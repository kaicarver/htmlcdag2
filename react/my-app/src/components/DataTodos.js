import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './DataTodos.css'

function DataTodos() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/todos/')
            .then(response => {
                setLoading(false)
                setError('')
                setTodos(response.data)
            })
            .catch(error => {
                setLoading(false)
                setError('Something went wrong:' + error.message)
                setTodos({})
            });
        return (
            <div>
                {loading ? '<div>Loading...</div>' : todos.map((todo, index) => {
                    return (
                        <div key={index}>
                            <div className={todo.completed ? 'done' : 'todo'}>
                                <h2>titre : {todo.title}</h2>
                                <p>userid : {todo.userId}</p>
                                <p>completed : {todo.completed ? 'completed!' : 'todo...'}</p>
                            </div>
                            <hr></hr>
                        </div>
                    )
                })}
            </div>
        );
    });
}

export default DataTodos