function playPause() {
    var video = document.getElementById("my_video");
    if (video.paused) {
      video.play();
      document.querySelector('.play-button').style.display = 'none';
    } else {
      video.pause();
      document.querySelector('.play-button').style.display = 'block';
    }
  }