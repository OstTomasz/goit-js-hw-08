import Player from '@vimeo/player';

const player = new Player('vimeo-player', {});

player.on('timeupdate', function (currentTime) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(currentTime.seconds)
  );
});

const time = localStorage.getItem('videoplayer-current-time');
console.log(time[0]);
