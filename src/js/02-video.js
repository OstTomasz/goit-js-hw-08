import player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', currentTime => {
  localStorage.setItem('VIDEOPLAYER-CURRENT-TIME', JSON.stringify(currentTime));
});

const time = [localStorage.getItem('VIDEOPLAYER-CURRENT-TIME')];
console.log('time:', time);

localStorage.setItem('alalal', 'aaa');
