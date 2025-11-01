import './App.css';
import hero from './img/hero.jpg';
import camera from './img/assets/camera_icon.svg';

function App() {
  return (
    <div className='container'>
      <div className="App">
        <span id='hero-title' >Flashy.Pixl</span>
        <span id='hero-label'>Instant Fun.<br />Timeless<br />Snaps.</span>
        <p id='app-label-1'>photobooth made by jamesphiliph</p>
        <div className='button hero-button'><img src={camera} alt="" srcset=""/></div>
        <p id='app-label-2'>Handcrafted pixels for my favorite person, angela.</p>
        <img id='hero-image' src = {hero}/>
        <div id="footer">
          <a id="about" className='link' href='#'>about</a>
          <a id="madeby" className='link' href='https://github.com/ptatasu'>made by jamesphiliph</a>
          <p className='version'>Version 1.00.00</p>
        </div>
      </div>
    </div>
  );
}

export default App;
