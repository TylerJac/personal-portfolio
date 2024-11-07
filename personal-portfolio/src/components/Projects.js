import React from 'react';
import './styles.css';

function Projects() {
    return (
        <div className="container">
            <header>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/Projects">Projects</a></li>
                        <li><a href="/interests">Interests</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section className="projects">
                    <h1>Projects</h1>
                    <div className="project">
                        <h2>Favorite Recipe</h2>
                        <img src="/cream.png" alt="favorite recipe home page" className="responsive-img" />
                        <p>This was my favorite recipe project...</p>
                        <a href="https://github.com/TylerJac/Favorite_recipe" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    </div>
                    <div className="project">
                        <h2>Currency Converter</h2>
                        <img src="/CurrencyConverter.png" alt="Currency Converter page" className="responsive-img" />
                        <p>This project was me creating a converter for different currency.</p>
                        <a href="https://github.com/TylerJac/Currency-Converter" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                        <a href="https://main.d2zci9p2ack2ey.amplifyapp.com" target="_blank" rel="noopener noreferrer">AWS Link</a>
                    </div>
                    <div className="project">
                        <h2>Pokemon Project</h2>
                        <img src="/poke.png" alt="Flask Pokemon Database" className="responsive-img" />
                        <p>This was a collaborative Flask project...</p>
                        <a href="https://github.com/TylerJac/PokemonProject" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    </div>
                </section>
            </main>
            <footer>
                <a href="/contact">Contact me</a>
                <p>&copy; 2024 Tyler Jackson</p>
            </footer>
        </div>
    );
}

export default Projects;
