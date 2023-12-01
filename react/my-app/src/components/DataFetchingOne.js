import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchingOne() {
    // Loading et error
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    // Recuperation des données
    const [post, setPost] = useState({});
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/101')
            .then(response => {
                setLoading(false);
                setError('');
                setPost(response.data);
            })
            .catch(error => {
                setLoading(false);
                setError('Something went wrong: ' + error.message);
                console.log(error.message);
                setPost({});
            })
    }, []) // ne pas le refaire 
    return (
        <div>
            <h1>{loading ? 'Loading...' : post.title }</h1>
            {loading ? 'Loading...' : post.title }<br/>
            user id: {post.userId}
            {error ? error : null }
        </div>
    )
}

export default DataFetchingOne