import React from 'react';
import './App.css';
import heart from './heart.png';
import flower from './flower.png';
import song from './song.mp3';

function App() {
  return (
    <div className="App">
      <audio autoPlay loop>
        <source src={song} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <div className="container">
        <h1>To Muskaan 💖</h1>
      <p className="message">
  In a world full of chaos, you are my calm.<br/>
  Your smile lights up my day, your presence gives meaning to every moment.<br/>
  Thank you for being my sunshine, my strength, and my everything.<br/><br/>
  Every heartbeat of mine echoes your name.<br/>
  You make ordinary moments feel magical just by being in them.<br/>
  I don't need a perfect world—just one where you're by my side.<br/>
  Your laughter is my favorite song, your eyes my favorite view.<br/><br/>
  With every breath I take, I love you more than the last.<br/>
  You're not just a part of my life—you are my life.<br/>
</p>
        {/* <img src={heart} alt="Heart" className="image heart" />
        <img src={flower} alt="Flower" className="image flower" /> */}
        <p className="from">Forever yours, <strong>Aryan</strong></p>
      </div>
    </div>
  );
}

export default App;
