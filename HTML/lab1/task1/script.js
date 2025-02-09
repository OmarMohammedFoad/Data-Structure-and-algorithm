let video = document.getElementsByTagName("video")[0];
let divVideoDuration = document.querySelector('.videoDuration');
let videoDuration = document.createElement('input');
let speed = document.getElementById("speed");
let slider = document.getElementById('videoSlider');
let timeDurationShow = document.getElementById('time_duration');
let volume = document.getElementById("volume");
let currentIndex = 0;
let videosList = [
  "https://www.w3schools.com/jsref/movie.mp4",
  "https://cdn.xgqfrms.xyz/HTML5/video/controlslist.mp4",
  "14035-254146872_small.mp4",
];







function play() {
  video.play();
}





function stop() {
  video.pause();
}

function speedBackward(value = speed.min) {
  video.playbackRate = value;
  updateSpeed(value);
}

function speedForward(value = speed.max) {
  video.playbackRate = value;
  updateSpeed(value);
}

function mute() {
  video.muted = !video.muted;
  video.muted ? updateVolume(0) : updateVolume(1);
}
// video.muted= true;

function normal() {
  updateSpeed(1);
}

function updateSpeed(value) {
  const numValue = Number(value);
  video.playbackRate = numValue;
  speed.value = numValue;
  speedValue.textContent = `${numValue}x`;
}

function updateVolume(value) {
  const numValue = Number(value);

  video.volume = numValue;
  volume.value = numValue;
  volumeValue.textContent = `${numValue}x`;
}

speed.addEventListener("input", () => {
  if (speed.value) {
    updateSpeed(speed.value);
  }
});

volume.addEventListener("input", () => {
  if (volume.value) {
    updateVolume(volume.value);
  }
});

function next() {
  currentIndex = (currentIndex + 1) % videosList.length;
  loadVideo(videosList[currentIndex]);
}

function prev() {
  currentIndex = (currentIndex - 1 + videosList.length) % videosList.length;
  loadVideo(videosList[currentIndex]);
}

function loadVideo(src) {
  video.src = src;
  video.load();
  video.play();
}


function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }

  video.addEventListener('timeupdate', function() {
    
    timeDurationShow.innerHTML = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
    slider.value = video.currentTime;

  });

  slider.addEventListener('input', function() {
    video.currentTime = slider.value;
  });
