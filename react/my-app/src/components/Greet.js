import React from 'react';

function Greet(props) {
    console.log(props.prenom);
    return <p><h1>Hello {props.prenom} !</h1> <h2>Vous avez {props.age} ans.</h2></p>
}

export default Greet;