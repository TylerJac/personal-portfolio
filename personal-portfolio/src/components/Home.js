import React from 'react';
import './styles.css';

function Home() {
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
                <section className="about">
                    <h1>About Me</h1>
                    <p>Hello, my name is Tyler. I really enjoy coding, I have experience in Python and Java.
                        I really enjoy anime and playing video games. To name a few there's JoJo's Bizarre Adventure, Overlord, and Mashle.
                        I hope to become a back-end developer with full stack capabilities.</p>
                </section>
                <img src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/03/mashle.jpg" alt="Mash and his friends" className="responsive-img" />
            </main>
            <footer>
                <a href="/contact">Contact me</a>
                <p>&copy; 2024 Tyler Jackson</p>
            </footer>
        </div>
    );
}

export default Home;
