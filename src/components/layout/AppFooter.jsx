import { GmailIcon, GitHubIcon, LinkedInIcon } from './SocialIcons.jsx'

export function AppFooter() {
    return (
        <footer className="app-footer">
            <p>© 2026 Baby Goat Tech</p>
            <p>Built by: Ido Katzenellenbogen</p>
            <nav className="footer-links">
                <a href="mailto:you@example.com">
                    <GmailIcon size={24} />
                </a>
                <a href="https://github.com/idokatze" target="_blank">
                    <GitHubIcon size={24} />
                </a>
                <a href="https://linkedin.com/in/idokatze" target="_blank">
                    <LinkedInIcon size={24} />
                </a>
            </nav>
        </footer>
    )
}
