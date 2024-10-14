import './style.css';

// HTML elements
const webcamButton = document.getElementById('webcamButton');
const audioOutput = document.getElementById('audioOutput');

// 1. Setup media sources
webcamButton.onclick = async () => {
  const localStream = await navigator.mediaDevices.getUserMedia({
    audio: {
      echoCancellation: true,
      noiseSuppression: true,
      autoGainControl: true,
    },
  });

  // Create an audio element to play the stream
  const audio = new Audio();
  audio.srcObject = localStream;
  audio.play();

  // Optionally, you can log audio tracks for debugging
  console.log(localStream.getAudioTracks());
};
