var $img = document.querySelector('img');
document.addEventListener('keydown', function (event) {
  switch (event.keyCode) {
    case 37:
      $img.className = 'left';
      break;
    case 38:
      $img.className = 'up';
      break;
    case 39:
      $img.className = 'right';
      break;
    case 40:
      $img.className = 'down';
      break;
  }
});
