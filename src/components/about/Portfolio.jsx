import SpotifyImage from '../../assets/images/spotify-green.svg'

export function PortfolioSection() {
    const projects = [
        {
            title: 'Oopsify',
            description:
                'A Fullstack Spotify replica app utilizing modern frameworks and tools such as a React front end and MongoDb backend ',
            image: SpotifyImage,
            link: 'https://oopsify.onrender.com/',
        },

        // Add more projects here
    ]

    return (
        <div className="portfolio-row">
            <div className="portfolio-container">
                <h2>Portfolio</h2>
                <section className="portfolio-grid">
                    {projects.map((project, index) => (
                        <div className="portfolio-item" key={index}>
                            <img src={project.image} alt={project.title} />
                            <div className="portfolio-overlay">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Site
                                </a>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    )
}
