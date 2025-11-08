import "./Capture.css";
import Webcam from "react-webcam";
import camera from "./img/assets/camera_icon.svg";
import { useCallback, useRef } from "react";

function Capture() {
  const videoConstraints = {
    width: 533,
    height: 400,
    facingMode: "user",
  };

  function CapturePhoto() {
    const imageSrc = webcamRef.current.getScreenshot();
    let base64 = JSON.stringify(imageSrc).slice(1, -1);
    sda.current.src = base64;
  }

  const webcamRef = useRef(null);
  const sda = useRef(null);

  return (
    <div className="capture-container">
      <div id="capture-content">
        <div id="webcam">
          <Webcam
            audio={false}
            ref={webcamRef}
            mirrored={true}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        </div>
        <div id="timer">
          <p id="label">Timer</p>
          <div class="timer-wrapper">
            <div className="textbox">3s</div>
            <div class="timer-button" id="increment">
              +
            </div>
            <div class="timer-button" id="decrement">
              -
            </div>
          </div>
        </div>
        <div id="bottom-label">
          <p id="bottom-label-title">Flashy.Pixl</p>
          <p id="bottom-label-subtext">let us capture this moment</p>
        </div>
        <div id="capture-button">
          <p id="label">Capture</p>
          <div className="hero-button" onClick={CapturePhoto}>
            <img src={camera} />
          </div>
          <div className="textbox" id="image-count">
            0/4
          </div>
        </div>
        <img src={camera} ref={sda} /> {/*placeholder to see the image*/}
      </div>
    </div>
  );
}

export default Capture;
