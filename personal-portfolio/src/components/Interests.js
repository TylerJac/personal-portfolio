import React from 'react';
import './styles.css';

function Interests() {
    return (
        <div className="container">
            <header>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/interests">Interests</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section className="interests">
                    <h1>Interests</h1>
                    <div className="interest">
                        <h2>Anime</h2>
                        <img src="https://ih1.redbubble.net/image.1190880636.7972/flat,750x,075,f-pad,750x1000,f8f8f8.u4.jpg" alt="Initial D" className="responsive-img" />
                        <p>I enjoy a whole variety of anime, from old to new. From genre to genre I love it all.</p>
                    </div>
                    <div className="interest">
                        <h2>Cars</h2>
                        <img src="https://preview.redd.it/ynyrfqbc03n71.jpg?auto=webp&s=35fe7c69465512068c9085df2da4df5fe97ba408" alt="A yellow coupe" className="responsive-img" />
                        <p>Thanks to mostly anime, I've developed a love for cars and working on them as well. My favorite cars at the moment are a Mazda RX-7 type-R and a 1981 Chevrolet Camaro Z28</p>
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

export default Interests;
