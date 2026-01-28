import { useState, useRef, useEffect } from 'react'
import { ContactButtons } from './ContactButtons.jsx'

export function ContactModal({ onClose }) {
    const [result, setResult] = useState('')
    const timeoutRef = useRef(null) // holds timeout ID across renders

    const onSubmit = async (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        formData.append('access_key', '582fdf16-d493-4e4a-82a4-fa079e9a0a27')

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            })

            const data = await response.json()
            const success = data.success

            setResult(
                success
                    ? 'Message sent successfully!'
                    : 'Error sending message',
            )

            if (success) {
                timeoutRef.current = setTimeout(onClose, 3000)
            }
        } catch (error) {
            console.error(error)
            setResult('Network error. Please try again.')
        }

        if (
            event.target &&
            event.target.reset &&
            result === 'Message sent successfully!'
        ) {
            event.target.reset()
        }
    }

    const handleClose = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        onClose()
    }

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === 'Escape') handleClose()
        }

        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [])

    return (
        <div className="modal-overlay" onClick={handleClose}>
            <div className="modal-container">
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <button className="close-btn" onClick={handleClose}>
                        ×
                    </button>
                    <h2>Contact Me</h2>

                    <form onSubmit={onSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            autoComplete="name"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            autoComplete="email"
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            autoComplete="tel"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            required
                        ></textarea>
                        <button type="submit">Send</button>
                    </form>

                    {result && <p className="form-result">{result}</p>}

                    <p>--- Or ---</p>
                    <ContactButtons />
                </div>
            </div>
        </div>
    )
}
