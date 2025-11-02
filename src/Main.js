import './Main.css'
import React, { useRef } from 'react';
import hero from './img/assets/hero.jpg';
import camera from './img/assets/camera_icon.svg';
import logo from './img/assets/logo.png'


function Main() {
    const loadingRef = useRef(null);
    const interval = setInterval(splashScreen, 1500);
    function splashScreen() {
        loadingRef.current.className= 'done-loading';
        clearInterval(interval);
    }
    const start = () => {
      window.location.href = "/capture";
    }

  return (
    <div className='main-container'>
      <div id='loading' ref={loadingRef} >
        <img id='logo' className='blink-1' src={logo} draggable='false' />
      </div>
      <div className="App">
        <span id='hero-title' >Flashy.Pixl</span>
        <span id='hero-label'>Instant Fun.<br />Timeless<br />Snaps.</span>
        <p id='app-label-1'>photobooth made by jamesphiliph</p>
        <div className='button hero-button' onClick={start}><img src={camera}/></div>
        <p id='app-label-2'>Handcrafted pixels for my favorite person, angela.</p>
        <img id='hero-image' src = {hero}/>
        <div id="footer">
          <a id="about" className='link' href='#'>about</a>
          <a id="madeby" className='link' href='https://github.com/ptatasu'>made by jamesphiliph</a>
          <p className='version'>Version 1.00.1</p>
        </div>
      </div>
    </div>
  )
}

export default Main;
