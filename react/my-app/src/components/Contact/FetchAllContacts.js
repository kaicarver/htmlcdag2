import React, { useReducer, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

import { RedButton, GreenButton, BlueButton, PurpleButton } from '../Button.style';

function FetchAllContacts() {
    const initialState = {
        loading: true,
        error: '',
        contacts: {}
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'FETCH_SUCCESS':
                return {
                    loading: false,
                    contacts: action.payload,
                    error: '',
                }
            case 'FETCH_ERROR':
                return {
                    loading: false,
                    contacts: {},
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
    }, []);
    return (
        <div>
            FetchAllContacts<br></br>
            {state.loading ? 'Loading...' : state.contacts.map((contact, index) => {
                return (
                    <div key={index}>
                        <div className={contact.completed ? 'done' : 'contact'}>
                        <Link to={'/contact/' + contact._id}>
                        <h2>{contact.firstname} {contact.lastname}</h2>
                            <p>userid : {contact._id}</p>
                            <p>email : {contact.email}</p>
                            </Link>
                        </div>
                        <RedButton>Foo</RedButton>
                        <GreenButton>Foo</GreenButton>
                        <BlueButton>Bar</BlueButton>
                        <PurpleButton>Baz</PurpleButton>
                        <hr></hr>
                    </div>
                )
            })}
        </div>
    )
}

export default FetchAllContacts