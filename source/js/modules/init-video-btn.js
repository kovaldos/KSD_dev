// Custom video button -- Start --


const initVideoBtn = () => {
  const videoBlock = document.querySelector('[data-video-block]');
  if (videoBlock) {
    const btn = videoBlock.querySelector('[data-video-btn]');
    const video = videoBlock.querySelector('video');
    btn.addEventListener('click', ()=> {
      video.addEventListener('play', hidePlayBtn);
      video.addEventListener('pause', hidePlayBtn);
      video.addEventListener('stop', hidePlayBtn);
      return video.play();
    });

    const hidePlayBtn = (e) => {
      if (e.type === 'play') {
        btn.classList.add('is-hidden');
      } else {
        btn.classList.remove('is-hidden');
      }
    };
  }
};
export {initVideoBtn};
// Custom video button -- End --
