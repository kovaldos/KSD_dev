// Init simplebar in history section -- Start --
import SimpleBar from 'simplebar';
const initHistorySimplebar = () => {
  let elem = document.querySelector('.history__tabs-nav-wrapper');
  if (elem) {
    window.addEventListener('resize', () => {
      if (window.matchMedia('(max-width: 424px)').matches) {
        // eslint-disable-next-line no-new
        new SimpleBar(elem);
      } else {
        return;
      }
    });
  }
};
export {initHistorySimplebar};
// Init simplebar in history section -- End --
