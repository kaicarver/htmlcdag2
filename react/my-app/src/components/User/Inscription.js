import React from 'react'

function Inscription() {
  return (
    <form action="http://localhost:5000/api/inscription" method="post">
        <label for="">Username</label>
        <input type="text" name="username"/>
        <br/>
        <label for="">email</label>
        <input type="email" name="email"/>
        <br/>
        <label for="">password</label>
        <input type="password" name="password"/>
        <br/>
        <input type="radio" name="admin" value="true" id="admin"/>
        <label for="admin">Administrateur</label>
        <input type="radio" name="admin" value="false" id="user"/>
        <label for="user">Utilisateur</label>
        <br/>
        <input type="submit" value="Nouveau Utilisateur"/>
    </form>
  )
}

export default Inscription