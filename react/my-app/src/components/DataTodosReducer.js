import React, { useReducer, useEffect } from 'react'
import axios from 'axios'
import './DataTodos.css'

function DataTodosReducer() {

    const initialState = {
        loading: true,
        error: '',
        todos: {}
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'FETCH_SUCCESS':
                return {
                    loading: false,
                    todos: action.payload,
                    error: '',
                }
            case 'FETCH_ERROR':
                return {
                    loading: false,
                    todos: {},
                    error: 'Something went wrong'
                }
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/todos/')
            .then(response => {
                dispatch({
                    type: 'FETCH_SUCCESS',
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: 'FETCH_ERROR'
                })
            })
    }, [])
    return (
        <div>
            DataTodosReducer<br></br>
            {state.loading? 'Loading...' : state.todos.map((todo, index) => {
                return (
                    <div key={index}>
                        <div className={todo.completed? 'done' : 'todo'}>
                            <h2>titre : {todo.title}</h2>
                            <p>userid : {todo.userId}</p>
                            <p>completed : {todo.completed? 'completed!' : 'todo...'}</p>
                        </div>
                        <hr></hr>
                    </div>
                )
            })}
        </div>
    )
}

export default DataTodosReducer