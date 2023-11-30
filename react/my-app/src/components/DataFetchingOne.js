import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchingOne() {
    // Loading et error
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    // Recuperation des données
    const [post, setPost] = useState({});
    return (
        <div>DataFetchingOne</div>
    )
}

export default DataFetchingOne