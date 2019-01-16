var $motionBox = $('.motion-box');
var scale = 10;
var isActivated = false;
var isTargetInSight = false;
var lastCalledTime;
var start = 0;
var end = 0;
var timer = true;
var milliseconds = 0;
var motion = false;
var km = 0.0001693312;
var speed = 0;

function initSuccess() {
	DiffCamEngine.start();
}

function initError() {
	alert('Something went wrong.');
}

function startComplete() {
	setTimeout(activate, 500);
}

function activate() {
	isActivated = true;
}

function capture(payload) {
	var box = payload.motionBox;
	if (box) {
		var right = box.x.min * scale + 1;
		var top = box.y.min * scale + 1;
		var width = (box.x.max - box.x.min) * scale;
		var height = (box.y.max - box.y.min) * scale;

		$motionBox.css({
			display: 'block',
			right: right,
			top: top,
			width: width,
			height: height
		});

		if (!isTargetInSight) {
			isTargetInSight = true;
		}
		motion = true;
	}
	else {
		isTargetInSight = false;
		$motionBox.css({
			display: 'none',
		});
	}
}

function countSeconds() {
	if (isTargetInSight) {
		end += 100;
	}
}

function calculateSpeed() {
	if (end != 0) {
		console.log(end);
		end = end / 1000;
		end = end / 3600;
		speed = km/end;
		speed = Math.round(speed * 100) / 100
	}
	console.log(speed + " km/uur");
	end = 0;
	speed = 0;
}

DiffCamEngine.init({
	video: document.getElementById('video'),
	captureIntervalTime: 50,
	includeMotionBox: true,
	includeMotionPixels: true,
	initSuccessCallback: initSuccess,
	initErrorCallback: initError,
	startCompleteCallback: startComplete,
	captureCallback: capture
});
