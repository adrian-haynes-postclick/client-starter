<<<<<<< HEAD
var header = window.__page_generator ? document.querySelector('.section') : document.querySelector('.page-block');

header.classList.add('sticky-header');

window.addEventListener('resize', debounce(function () {
  // update height el on resize
  updateBodyHeight(header, isMobile());
}, 250));

document.addEventListener('DOMContentLoaded', function () {
  // update height el on load
  updateBodyHeight(header, isMobile());
  // hey this is theme 2!
  alert('This is theme 2!');
});

function updateBodyHeight(el, isStickyBottom) {
  if (isStickyBottom) {
    document.querySelector('body').style.marginBottom = el.clientHeight + 'px';
    el.style.bottom = '0px';
    el.style.top = 'initial';
  } else {
    document.querySelector('body').style.marginTop = el.clientHeight + 'px';
    el.style.bottom = 'initial';
    el.style.top = '0px';
  }
}

function isMobile() {
  if (window.innerWidth < 768) {
    return true;
  } else {
    return false;
  }
}

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
=======
alert('testing theme 2!');
>>>>>>> main
