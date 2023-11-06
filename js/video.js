var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

var video = document.getElementById("player1");
var play = document.getElementById("play");
var pause = document.getElementById("pause");
var slow = document.getElementById("slower");
var fast = document.getElementById("faster");
var skip = document.getElementById("skip");
var mute = document.getElementById("mute");
var slider = document.getElementById("slider");
var info = document.getElementById("volumeInfo");
var vintage = document.getElementById("vintage");
var orig = document.getElementById("orig");
video.
pause.addEventListener("click", function () {
    video.pause();
});

slow.addEventListener("click", function () {
    video.playbackRate -= 0.1;
    console.log("New Speed: " + video.playbackRate);
});

fast.addEventListener("click", function () {
    video.playbackRate += 0.1;
    console.log("New Speed: " + video.playbackRate);
});

skip.addEventListener("click", function () {
    if (video.currentTime + 10 < video.duration) {
        video.currentTime += 10;
    } else {
        video.currentTime = 0;
    }
    console.log("Current Time: " + video.currentTime);
});

mute.addEventListener("click", function () {
    if (video.muted) {
        video.muted = false;
        muteButton.textContent = "Mute";
    } else {
        video.muted = true;
        muteButton.textContent = "Unmute";
    }
});

slider.addEventListener("input", function () {
    video.volume = volumeSlider.value;
    volumeInfo.textContent = "Volume: " + (volumeSlider.value * 100).toFixed(0) + "%";
});
vintage.addEventListener("click", function () {
    video.classList.add("oldSchool");
});

original.addEventListener("click", function () {
    video.classList.remove("oldSchool");
});

 document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
 });

