import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="Neumorph">
      <div className="Neumorph-Project">
        <p className="Neumorph-Title">My Neumorph Playground</p>
        <p className="Neumorph-Description">by al-Serembani</p>
      </div>
      <div className="Neumorph-Wrapper">
        <div className="Neumorph-Element Neumorph-Outside">Outside Shadow</div>
        <div className="Neumorph-Element Neumorph-Inside">Inside Shadow</div>
        <div className="Neumorph-Element Neumorph-Outside-Hover">Hover Transition</div>
        <div className="Neumorph-Element Neumorph-Outside-After">Hover Animation</div>
      </div>
    </div>
  );
}

export default App;
