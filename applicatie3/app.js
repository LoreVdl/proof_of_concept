Webcam.attach("#my_camera");

var i = 1;

function take_snapshot() {
    if (i <= 3) {
      Webcam.snap(function(data_uri) {
        var base64image = data_uri;

        Webcam.upload(base64image, 'upload.php', function(code, text) {
          console.log('Save successfully');
        });
      })
      i++;
      sleep(1);
    }
}

var video = document.getElementById('video');
var canvas = document.getElementById('motion');
var score = document.getElementById('score');

function initSuccess() {
	DiffCamEngine.start();
}

function initError() {
	alert('Something went wrong.');
}

function capture(payload) {
	score.textContent = payload.score;


  if (payload.score > 0) {
    take_snapshot();
  }
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}




DiffCamEngine.init({
	video: video,
	motionCanvas: canvas,
	initSuccessCallback: initSuccess,
	initErrorCallback: initError,
	captureCallback: capture
});
