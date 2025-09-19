// App.js - Main component
function App() {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}

// Navbar.js - Navigation bar component
function Navbar() {
    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <div className="navbar-logo">My Portfolio</div>
                <ul className="navbar-menu">
                    <li className="navbar-item"><a href="#home" className="navbar-link">Home</a></li>
                    <li className="navbar-item"><a href="#projects" className="navbar-link">Projects</a></li>
                    <li className="navbar-item"><a href="#about" className="navbar-link">About</a></li>
                    <li className="navbar-item"><a href="#contact" className="navbar-link">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

// Hero.js - Home/hero section component
function Hero() {
    return (
        <section className="hero" id="home">
            <div className="container">
                <h1 className="hero-title">Welcome to My Portfolio</h1>
                <p className="hero-subtitle">I'm a Web Developer passionate about creating beautiful and functional websites</p>
                <a href="#projects" className="btn">View My Work</a>
            </div>
        </section>
    );
}

// Projects.js - Project showcase component
function Projects() {
    // Project data
    const projects = [
        {
            id: 1,
            title: 'Project One',
            description: 'A responsive website built with React and CSS',
            image: 'https://via.placeholder.com/300',
            link: '#'
        },
        {
            id: 2,
            title: 'Project Two',
            description: 'An e-commerce platform with shopping cart functionality',
            image: 'https://via.placeholder.com/300',
            link: '#'
        },
        {
            id: 3,
            title: 'Project Three',
            description: 'A weather application using a third-party API',
            image: 'https://via.placeholder.com/300',
            link: '#'
        }
    ];

    return (
        <section className="projects" id="projects">
            <div className="container">
                <h2 className="section-title">My Projects</h2>
                <div className="projects-grid">
                    {projects.map(project => (
                        <div className="project-card" key={project.id}>
                            <img src={project.image} alt={project.title} className="project-img" />
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <a href={project.link} className="project-link">View Project</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// About.js - About me component
function About() {
    // Skills data
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Git', 'Responsive Design'];

    return (
        <section className="about" id="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <img src="https://via.placeholder.com/300" alt="Profile" className="about-img" />
                    <div className="about-text">
                        <h3 className="about-title">Who I Am</h3>
                        <p className="about-description">
                            I'm a passionate web developer with a strong foundation in front-end and back-end technologies.
                            I enjoy creating responsive and user-friendly websites that provide great user experiences.
                            With attention to detail and a problem-solving mindset, I strive to write clean and efficient code.
                        </p>
                        <div className="skills">
                            {skills.map((skill, index) => (
                                <span className="skill-tag" key={index}>{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Contact.js - Contact information component
function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <h2 className="section-title">Contact Me</h2>
                <div className="contact-content">
                    <ul className="contact-list">
                        <li className="contact-item">
                            <span className="contact-icon">📧</span>
                            <a href="mailto:your.email@example.com" className="contact-link">your.email@example.com</a>
                        </li>
                        <li className="contact-item">
                            <span className="contact-icon">🔗</span>
                            <a href="https://github.com/yourusername" target="_blank" className="contact-link">github.com/yourusername</a>
                        </li>
                        <li className="contact-item">
                            <span className="contact-icon">🔗</span>
                            <a href="https://linkedin.com/in/yourusername" target="_blank" className="contact-link">linkedin.com/in/yourusername</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

// Footer.js - Footer component
function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p className="footer-text">© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
                <div className="social-links">
                    <a href="#" className="social-link">📱</a>
                    <a href="#" className="social-link">📱</a>
                    <a href="#" className="social-link">📱</a>
                </div>
            </div>
        </footer>
    );
}