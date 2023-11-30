import React from 'react'
import './person.css'

function Person({person}) {
    var special = person.name === 'Diana' ? 'diana' : ''
    return (
        <div>
            <h2 className={special}>
                Je suis {person.name} j'ai {person.age} ans je connais {person.skill} !
            </h2>
        </div>
    )
}

export default Person