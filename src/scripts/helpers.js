// disable hover on touch screens
function hasTouch() {
  return (
    'ontouchstart' in document.documentElement ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}
if (!hasTouch()) {
  document.body.className += ' hasHover';
}
