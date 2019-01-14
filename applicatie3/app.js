Webcam.attach("#my_camera");

var i = 1;

function take_snapshot() {
  setTimeout(function() {
    Webcam.snap(function(data_uri) {
      var base64image = data_uri;

      Webcam.upload(base64image, 'upload.php', function(code, text) {
        console.log('Save successfully');
      });
    })
    i++;

    if (i <= 3) {
      take_snapshot();
    }
  }, 500);

  if (i == 4) {
    i = 1; 
  }
}
