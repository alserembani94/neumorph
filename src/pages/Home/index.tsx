import React from 'react';

const HomeScreen = () => {
    return (
        <React.Fragment>
            <main className="Home">
                <div className="Home-Project">
                    <p className="Home-Title">My Home Playground</p>
                    <p className="Home-Description">by al-Serembani</p>
                </div>
                <div className="Neumorph-Wrapper">
                    <div className="Neumorph-Element Neumorph-Outside">Outside Shadow</div>
                    <div className="Neumorph-Element Neumorph-Inside">Inside Shadow</div>
                    <div className="Neumorph-Element Neumorph-Outside-Hover">Hover</div>
                    <div className="Neumorph-Element Neumorph-Outside-After">Hover Animation</div>
                </div>
            </main>
        </React.Fragment>
    );
};

export default HomeScreen;