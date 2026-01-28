import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RootCmp } from './RootCmp.jsx'
import './assets/styles/main.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <RootCmp />
        </BrowserRouter>
    </StrictMode>
)
