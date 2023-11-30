import React from 'react'
import './person.css'

function Person({person, textcolor}) {
    var special = person.name === 'Diana' ? 'diana' : ''
    const heading = person.name === 'Diana' ? {} : {color: textcolor}
    return (
        <div>
            textcolor : {textcolor}
            <h2 className={special} style={heading}>
                Je suis {person.name} j'ai {person.age} ans je connais {person.skill} !
            </h2>
        </div>
    )
}

export default Person