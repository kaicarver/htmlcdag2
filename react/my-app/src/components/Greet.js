import React from 'react';

function Greet(props) {
    console.log(props.prenom);
    return <h1>Hello {props.prenom} !</h1>
}

export default Greet;