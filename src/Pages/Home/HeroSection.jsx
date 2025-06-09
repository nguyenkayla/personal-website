export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                <p className="section--title">Hello, I'm Kayla!</p>
                <h2 className="hero--section--title">
                <span className="hero--section-title--color">Software</span>{" "}
                <br />
                Developer
                </h2>
                        <p className="hero--section-description">
                            I am a current senior at the University of Massachusetts Amherst majoring in Computer Science (2026). I am passionate about expanding my knowledge in CS, expecially in front-end development.
                            
                        </p>
                        <p className="hero--section-description">
                            In my free time, you'll most likely see me either crocheting or ice skating!
                        </p>
                </div>
                <a href="mailto:thiknguyen@umass.edu">
                <button className="btn btn-primary">Let's Talk!</button>
                </a>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero.png" alt="Hero Selection"></img>
            </div>
        </section>
    );
}

