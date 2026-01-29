import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout.jsx'
import { Comments } from './pages/Comments.jsx'
import { About } from './pages/About.jsx'

export function RootCmp() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Comments />} />
                <Route path="/about" element={<About />} />
            </Route>
        </Routes>
    )
}
