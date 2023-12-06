import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function FetchOneContact() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [contact, setContact] = useState({});
    // Modification des données via le formulaire
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [message, setmessage] = useState('');
    const handlefirstname = event => { setfirstname(event.target.value); };
    const handlelastname = event => { setlastname(event.target.value); };
    const handleemail = event => { setemail(event.target.value); };
    const handlemessage = event => { setmessage(event.target.value); };
    // Récupération des données de l'url
    const params = useParams();
    console.log(params.id)
    useEffect(() => {
        axios.get('http://localhost:5000/formulaire/' + params.id)
            .then(response => {
                setLoading(false);
                setError('');
                setContact(response.data)
                setfirstname(response.data.firstname)
                setlastname(response.data.lastname)
                setemail(response.data.email)
                setmessage(response.data.message)
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
            <p>{loading ? 'Loading' : contact.email}</p>
            <p>contact.message="{loading ? 'Loading' : contact.message}"</p>
            <p>id={params.id}</p>
            <form action={`http://localhost:5000/edit/${params.id}?_method=PUT`} method="post">
                <input type="hidden" name="_method" value="PUT" />
                first name <input type="text" name="firstname" value={firstname} onChange={handlefirstname}/><br />
                last name <input type="text" name="lastname" value={lastname} onChange={handlelastname}/><br />
                Email <input type="email" name="email" value={email} onChange={handleemail}/><br />
                Message
                <textarea name="message" id="" cols="30" rows="10" value={message} onChange={handlemessage}/><br />
                <input type="submit" value="Editer ma donnée" /><br />
            </form>
            <form action={`http://localhost:5000/delete/${params.id}?_method=DELETE`} method="post">
                <input type="hidden" name="_method" value="DELETE" />
                <input type="submit" value="Supprimer" /><br />
            </form>

        </div>
    )
}

export default FetchOneContact