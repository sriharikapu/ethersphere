/**
 * Listens to the window resize event and dispatches an action to the store that
 * stores the window size on the main `app` state.
 */

export const setCurrentWindowSize = () => ({
  type: 'SET_WINDOW_SIZE',
  x: window.innerWidth,
  y: window.innerHeight
});

export default function reduxResizeListener(store) {
  store.dispatch(setCurrentWindowSize());
  window.addEventListener('resize', () => {
    store.dispatch(setCurrentWindowSize());
  });
}
