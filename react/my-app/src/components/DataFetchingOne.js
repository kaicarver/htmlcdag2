import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchingOne() {
    // Loading et error
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    // Recuperation des données
    const [post, setPost] = useState({});
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                setLoading(false);
                setError('');
                setPost(response.data);
            })
            .catch(error => {
                setLoading(false);
                setError('Something went wrong!');
                setPost({});
            })
    }, [])
    return (
        <div>
            {loading ? 'Loading...' : post.title }
            {error ? error : null }
        </div>
    )
}

export default DataFetchingOne