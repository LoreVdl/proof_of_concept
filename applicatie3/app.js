var video = document.querySelector("#videoElement");

// Only if getUserMedia is supported
if (navigator.mediaDevices.getUserMedia)
{
  navigator.mediaDevices.getUserMedia({video: true}).then (function(stream) {
    video.srcObject = stream;
  })
  .catch(function (error) {
    console.log("something went wrong");
  });
}
