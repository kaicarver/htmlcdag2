import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFilm() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [film, setFilm] = useState({});
    // recuperer le titre du film tapé 
    const [filmTitle, setFilmTitle] = useState('Titanic');
    useEffect(() => {
        // axios.get('https://www.omdbapi.com/?apikey=71e50205&t=' + filmTitle)
        axios.get(`https://www.omdbapi.com/?apikey=71e50205&t=${filmTitle}`)
           .then(response => {
                setLoading(false);
                setError('');
                setFilm(response.data);
            })
           .catch(error => {
                setLoading(false);
                setError('Something went wrong:'+ error.message);
                console.log(error.message);
                setFilm({});
            })
        }) // le refaire
    // }, []) // ne pas le refaire
    const handleFilmTitleChange = (event) => {
        setFilmTitle(event.target.value);
    }
    return (
        <div>
            {filmTitle}
            <form>
                <input type='text' onChange={handleFilmTitleChange} />
            </form>
            <h1>{loading ? 'Loading...' : film.Title }</h1>
            annee : {film.Year}<br/>
            boxoffice : {film.BoxOffice}<br/>
            <img src={loading ? 'Loading...' : film.Poster }></img>
            {error ? error : null }
        </div>
    )
}

export default DataFilm