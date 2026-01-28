import heroImg from '../../assets/images/hero-ido.jpg'
import heroImgSm from '../../assets/images/hero-ido-sm.jpg'

export function HeroSection({ onOpen }) {
    return (
        <div className="hero-row">
            <div className="hero-container">
                <section className="hero-grid">
                    <div className="hero-info">
                        <h1>Ido Katzenellenbogen</h1>
                        <p>Junior Fullstack Developer</p>
                        <section className="actions">
                            <button
                                className="contact-btn"
                                onClick={onOpen}
                            >
                                Contact Me
                            </button>
                            <a
                                href="/Ido_Katzenellenbogen_CV.pdf"
                                download
                                className="download-cv-btn"
                            >
                                Download CV
                            </a>
                        </section>
                    </div>
                    <div className="hero-img">
                        <img
                            src={heroImg}
                            srcSet={`${heroImgSm} 700w, ${heroImg} 1400w`}
                            sizes="(max-width: 768px) 700px, 1400px"
                            alt="Ido"
                        />
                    </div>
                </section>
            </div>
        </div>
    )
}
