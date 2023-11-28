import React from 'react';

function Greet(props) {
    console.log(props.prenom);
    return <p><h1>Hello {props.prenom} aka {props.alias ? props.alias : "(pas un super heros)" } !</h1>
        <h2>Vous avez {props.age} ans.</h2>
        <p>{props.children}</p></p>
}

export default Greet;