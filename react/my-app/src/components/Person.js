import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>
                Je suis {person.name} j'ai {person.age} ans je connais {person.skill} !
            </h2>
        </div>
    )
}

export default Person