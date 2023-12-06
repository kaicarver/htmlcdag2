import axios from 'axios';
import React, {useState, useEffect} from 'react'

function UserPage() {
    const [jwt, setJWT] = useState({});
    useEffect(() => {
        axios.get('http://localhost:5000/getJWT', {withCredentials: true})
    .then(response => {
        setJWT(response.data)
        console.log(response.data)
    })
    .catch(err => {
        setJWT('')
    })}, [])
    return (
        <div>
        UserPage

        </div>
    )
}

export default UserPage