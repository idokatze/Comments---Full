import { HeroSection } from '../components/about/HeroSection.jsx'
import { SummarySection } from '../components/about/Summary.jsx'
import { PortfolioSection } from '../components/about/Portfolio.jsx'
import { ContactModal } from '../components/about/ContactModal.jsx'
import { useState } from 'react'

// About.jsx
export function About() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <main className="about-page">
            {/* Contact Me Modal */}
            {isModalOpen && <ContactModal onClose={closeModal} />}

            {/* Hero */}
            <HeroSection onOpen={openModal} />

            {/* Summary */}
            <SummarySection />

            {/* Portfolio */}
            <PortfolioSection />
        </main>
    )
}
