import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

function Admin() {
    return (
        <div>Admin
            <nav>
                <Link to="/admin/dashboard">Dashboard</Link>&nbsp;
                <Link to="/admin/gestionpost">Gestion Post</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default Admin