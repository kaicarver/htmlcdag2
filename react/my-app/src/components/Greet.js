import React from 'react';

function Greet({prenom, age, alias, children})  {
    return <div><h1>Hello {prenom} aka {alias ? alias : "(pas un super heros)" } !</h1>
        <h2>Vous avez {age} ans.</h2>
        <p>{children}</p></div>
}

export default Greet;