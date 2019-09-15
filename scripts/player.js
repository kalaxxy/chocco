let video;
let durationLevel;
let volumeLevel;
let intervalId;

document.addEventListener('DOMContentLoaded', e => {
  video = document.querySelector('#video');
  video.addEventListener('click', stopVideo);

  let playBtns = document.querySelectorAll('.play');
  for (let i = 0; i < playBtns.length; i++) {
    playBtns[i].addEventListener('click', stopVideo);
  }

  let volumeBtn = document.querySelector('.how__icon--volume');
  volumeBtn.addEventListener('click', soundOf);

  durationLevel = document.querySelector('#durationLevel');
  durationLevel.addEventListener('mousedown', stopInterval);
  durationLevel.addEventListener('click', setVideoDuration);

  durationLevel.min = 0;
  durationLevel.value = 0;

  volumeLevel = document.querySelector('#volumeLevel')
  volumeLevel.addEventListener('click', changeVolumeLevel);
  volumeLevel.addEventListener('mouseup', changeVolumeLevel);

  volumeLevel.min = 0;
  volumeLevel.max = 10;
  volumeLevel.value = volumeLevel.max;
});

function stopVideo() {
  playIcon = document.querySelector('.how__play');
  playIcon.classList.toggle('how__play--active');

  durationLevel.max = video.duration;

  if(video.paused) {
    video.play();
    intervalId = setInterval(updateDuration , 1000 /66);
  } else { 
    video.pause();
    clearInterval(intervalId);
  };
};

function updateDuration() {
  durationLevel.value = video.currentTime;
};

function stopInterval() {
  video.pause();
  clearInterval(intervalId);
};

function setVideoDuration() {
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  };

  video.currentTime = durationLevel.value;
  intervalId = setInterval(updateDuration , 1000 /66);
};

function changeVolumeLevel() {
  video.volume = volumeLevel.value/10;
};

function soundOf() {
  let volumeBtnLine = document.querySelector('.how__icon-line');
  if(video.volume === 0) {
    video.volume = volumeLevelValue;
    volumeLevel.value = volumeLevelValue * 10;
    volumeBtnLine.style.visibility = 'hidden';
  } else {
    volumeLevelValue = video.volume;
    video.volume = 0;
    volumeLevel.value = 0;
  volumeBtnLine.style.visibility = 'visible';
  };
}