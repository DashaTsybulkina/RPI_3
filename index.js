var videoElement = document.getElementById("myvideo");
var imageElement = document.getElementById("myimage")
function toggleFullScreenVideo() {
  if (!document.fullscreenElement) {
    if (videoElement.mozRequestFullScreen) {
      videoElement.mozRequestFullScreen();
    } else {
      videoElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else {
      document.webkitCancelFullScreen();
    }
  }
}

function toggleFullScreenImage() {
  if (!document.fullscreenElement) {
    if (imageElement.mozRequestFullScreen) {
      imageElement.mozRequestFullScreen();
    } else {
      imageElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else {
      document.webkitCancelFullScreen();
    }
  }
}

document.addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {
    toggleFullScreenVideo();
  }
  if (e.keyCode == 70){
    toggleFullScreenImage();
  }

}, false);