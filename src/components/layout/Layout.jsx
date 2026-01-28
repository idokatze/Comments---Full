import { AppHeader } from './AppHeader'
import { AppFooter } from './AppFooter.jsx'
import { Outlet } from 'react-router-dom'

export function Layout() {
    return (
        <div className="app-grid">
            <AppHeader />

            <main className="page-container">
                <Outlet />
            </main>

            <AppFooter />
        </div>
    )
}
