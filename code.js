const startScreen = document.getElementById('start-screen');
const audio = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');

startScreen.addEventListener('click', () => {
  startScreen.classList.add('fade-out'); // start fade out animation

  startScreen.addEventListener(
    'transitionend',
    () => {
      startScreen.style.display = 'none'; // hide start screen completely
      document.getElementById('audio-controls').style.display = 'flex'; // show controls now
    },
    { once: true }
  );

  audio.play(); // play audio immediately
  playPauseBtn.textContent = '❚❚'; // show pause icon on button
});
