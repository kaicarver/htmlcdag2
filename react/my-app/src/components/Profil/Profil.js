import React from 'react'
import { useParams } from'react-router-dom'

function Profil() {
    const { id } = useParams()
    const params = useParams()
    console.log(params)
  return (
    <div>Profil {id}</div>
  )
}

export default Profil