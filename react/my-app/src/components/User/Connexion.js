import React from 'react'

function Connexion() {
  return (
    <form action="http://localhost:5000/api/connexion" method="post">
        <label for="">Username</label>
        <input type="text" name="username"/>
        <label for="">Password</label>
        <input type="password" name="password"/>
        <input type="submit" value="Connexion"/>
    </form>
  )
}

export default Connexion