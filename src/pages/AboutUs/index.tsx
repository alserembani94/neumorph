import React from 'react';

// Construct types for component props
interface AboutUsProps {
    
}

const AboutUs: React.FC<AboutUsProps> = () => {
    return (
        <React.Fragment>
            <main className="AboutUs-Screen">
                <div className="AboutUs-Wrapper">
                    <h1>About My Neumorph Playground</h1>
                    <div className="AboutUs-Content">
                        <p>
                            Web designs has always been my passion. Writing high precision styling,
                            exploring all possibilities with CSS, PostCSS, and for this page, SCSS,
                            I would love to explore the capabilities for each library. And so, I developed
                            a website for me to play with each of these libraries. And for this website, my
                            take is <code>React</code>, <code>SCSS</code> and other libraries as well.
                        </p>
                        <p>
                            So, for this, I choose neumorph design for this website. For me, neumorph is
                            interesting since it involves playing with shadows to give a soft design, giving
                            a 3D-like look to the containers and buttons, and can also be used to distinguish
                            different usages and perceives towards each different element of the page.
                        </p>
                        <p>
                            But note, <span>that neumorph is a soft design, so it is not that suitable for accessibility
                            reason,</span> thus it is not a really good approach for website that aims for larger audience,
                            while only providing cognitive experience that only has accessibility in slight color shade changes.
                        </p>
                        <p>
                            Nonetheless, neumorph is interesting to explore, for its possibility in design
                            along with other design approaches in modern web design as well. CSS plays an important
                            role in a crisp, beauty design.
                        </p>
                        <p>
                            Disclaimer though, for I am not really well in design. <b>I build this website for myself
                            to sharpen my skills,</b> while being able to showcase my own capability in my journey
                            in being a frontend developer. So, enjoy my neumorph playground!
                        </p>
                        <p className="AboutUs-Warning">
                            For now, it is just for display. Later, I will make it adjustable, so you
                            may play around adjusting your preference and see the result <span role='img' aria-label='emoji'>😄</span>!
                        </p>
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
};

export default AboutUs;