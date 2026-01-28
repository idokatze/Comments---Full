import { Routes, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import { About } from '../../pages/About.jsx'
import Logo from '../Logo.jsx'

export function AppHeader() {
    return (
        <div className="app-header">
            <Logo size={100} color="var(--color-b3)"/>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </div>
    )
}
