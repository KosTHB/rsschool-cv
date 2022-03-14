var links = document.querySelectorAll('a');

function doClickSound() {
  for (i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseenter', function () {
      let clickSound = new Audio('./assets/mp3/click.mp3');
      clickSound.play();
    }, false)
  }
}

doClickSound();