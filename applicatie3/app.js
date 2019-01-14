Webcam.attach("#my_camera");

function take_snapshot() {
  Webcam.snap(function(data_uri) {
    document.getElementById('my_result').innerHTML = '<img id="imageprev" src="'+data_uri+'"/>';
  })
}

function save_snap() {
  var base64image = document.getElementById("imageprev").src;

  Webcam.upload(base64image, 'upload.php', function(code, text) {
    console.log('Save successfully');
  });
}
