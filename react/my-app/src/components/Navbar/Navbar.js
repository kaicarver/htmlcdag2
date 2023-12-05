import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <Link to="/">Accueil</Link>&nbsp;
            <Link to="/services">Services</Link>&nbsp;
            <Link to="/admin">Admin</Link>&nbsp;
            <Link to="/profil/max">Profil de max</Link>&nbsp;
            <Link to="/contact/">Contacts</Link>&nbsp;
            <Link to="/contact/655f6809168f83f808f55562">Contact X</Link>&nbsp;
            <Link to="/inconnu">Inconnu</Link>&nbsp;
            <a href="/inconnu">Inconnu 2</a>
        </nav>)
}

export default Navbar