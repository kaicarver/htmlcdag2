import React, { useReducer, useEffect } from 'react'
import axios from 'axios'
import './DataTodos.css'

function DataBlogsReducer() {
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
        axios.get('http://localhost:5000/')
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
            DataBlogsReducer:<br></br>
            {state.loading? 'Loading...' : state.todos.map((todo, index) => {
                return (
                    <div key={index}>
                        <div>
                            <h2>titre : {todo.title}</h2>
                            <p>auteur : {todo.firstname} {todo.lastname}, {todo.email}</p>
                            <p>message : {todo.message}</p>
                        </div>
                        <hr></hr>
                    </div>
                )
            })}
        </div>
    )

}

export default DataBlogsReducer