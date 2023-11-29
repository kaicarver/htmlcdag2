import React from 'react'

function NameList() {
    const names = ['Tom', 'Max', 'Ké'];
    return (
        <div>
            { names.map((name, index) => <h2>map {index}: {name}</h2>)}
        </div>
    )
}

export default NameList