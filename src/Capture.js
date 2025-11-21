import "./Capture.css";
import shutter from "./sounds/camera-shutter.mp3";
import Webcam from "react-webcam";
import camera from "./img/assets/camera_icon.svg";
import { useCallback, useRef } from "react";

const Next = () => {
  window.location.href = "/editor";
};

function Capture() {
  const videoConstraints = {
    width: 533,
    height: 400,
    facingMode: "user",
  };

  function Increment() {
    timer++;
    if (timer < 9) {
      time.current.innerHTML = timer + "s";
    } else {
      timer = 10;
      time.current.innerHTML = timer + "s";
    }
  }

  function Decrement() {
    timer--;
    if (timer > 0) {
      time.current.innerHTML = timer + "s";
    } else {
      timer = 0;
      time.current.innerHTML = "&#128711";
    }
  }

  function CapturePhoto() {
    timerValue.current.style.pointerEvents = "none";
    countdownCont.current.style.display = "flex";
    timerValue.current.setAttribute("data-item-value", timer + 1);
    let value = timerValue.current.getAttribute("data-item-value");
    console.log(value);
    countdown.current.className = "ping";
    if (timer == 0) {
      countdown.current.innerHTML = "Capturing...";
    } else {
      countdown.current.innerHTML = "Capturing in...";
    }
    const captureInterval = setInterval(function () {
      value--;
      if (value <= 0) {
        clearInterval(captureInterval);
        countdown.current.className = "";
        countdownCont.current.style.display = "none";
        timerValue.current.style.pointerEvents = "auto";
        captureImage();
      } else {
        countdown.current.innerHTML = value;
      }
    }, 1000);
  }

  function captureImage() {
    // const imageSrc = webcamRef.current.getScreenshot();
    // let base64 = JSON.stringify(imageSrc).slice(1, -1);
    // localStorage.setItem("image", base64);
    counter++;
    let count = counter.toString();
    imageCounter.current.innerHTML = count + "/4";
    sound.play();
    if (counter == 4) {
      timerValue.current.style.display = "none";
      nextButton.current.style.display = "block";
      nextButton.current.style.fontFamily = "Poppins, sans-serif";
    }
  }
  const nextButton = useRef(null);
  const webcamRef = useRef(null);
  const time = useRef(null);
  const countdown = useRef(null);
  const countdownCont = useRef(null);
  const timerValue = useRef(null);
  const incre = useRef(null);
  const decre = useRef(null);
  const sda = useRef(null);
  const imageCounter = useRef(null);
  let counter = 0;
  let timer = 3;
  let sound = new Audio(shutter);

  return (
    <div className="capture-container">
      <div id="capture-content">
        <div id="countdown-timer-container" ref={countdownCont}>
          <div id="countdown-timer" ref={countdown}></div>
        </div>
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
          <div className="timer-wrapper">
            <div className="textbox" ref={time}>
              3s
            </div>
            <div
              className="timer-button"
              id="increment"
              ref={incre}
              onPointerDown={Increment}
            >
              +
            </div>
            <div
              className="timer-button"
              id="decrement"
              ref={decre}
              onClick={Decrement}
            >
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
          <div className="hero-button" onClick={CapturePhoto} ref={timerValue}>
            <img src={camera} />
          </div>
          <div className="hero-button hidden" onClick={Next} ref={nextButton}>
            Next
          </div>
          <div className="textbox" id="image-count" ref={imageCounter}>
            0/4
          </div>
        </div>
      </div>
    </div>
  );
}

export default Capture;
