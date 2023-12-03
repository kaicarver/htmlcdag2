import React, { useState, useEffect } from 'react'
import axios from 'axios'


function DataFetchingOne() {
    // Loading et error
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    // Recuperation des données
    const [post, setPost] = useState({});
    // const url = process.env.DATABASE_URL;
    useEffect(() => {
        axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=71e50205')
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
            <h1>{loading ? 'Loading...' : post.Title }</h1>
            annee : {post.Year}<br/>
            boxoffice : {post.BoxOffice}<br/>
            <img src={loading ? 'Loading...' : post.Poster }></img>
            {error ? error : null }
        </div>
    )
}

export default DataFetchingOne