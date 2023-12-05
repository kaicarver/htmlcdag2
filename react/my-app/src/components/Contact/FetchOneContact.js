import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function FetchOneContact() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [contact, setContact] = useState({});
    const params = useParams();
    console.log(params.id)
    useEffect(() => {
        axios.get('http://localhost:5000/formulaire/' + params.id)
            .then(response => {
                setLoading(false);
                setError('');
                setContact(response.data)
            })
            .catch(response => {
                setLoading(false);
                setError(response.message);
                setContact({});
            })
    }, [])
    return (
        <div>FetchOneContact
            <h1>{loading ? 'Loading' : contact.lastname}</h1>
            <h2>{loading ? 'Loading' : contact.firstname}</h2>
            <p>id={params.id}</p>
        </div>
    )
}

export default FetchOneContact