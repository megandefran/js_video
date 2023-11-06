var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

var video = document.getElementById("player1");


document.querySelector("#pause").addEventListener("click", function () {
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
    video.playbackRate -= 0.1;
    console.log("New Speed: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function () {
    video.playbackRate += 0.1;
    console.log("New Speed: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function () {
    if (video.currentTime + 10 < video.duration) {
        video.currentTime += 10;
    } else {
        video.currentTime = 0;
    }
    console.log("Current Time: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function () {
    if (video.muted) {
        video.muted = false;
        muteButton.textContent = "Mute";
    } else {
        video.muted = true;
        muteButton.textContent = "Unmute";
    }
});

document.querySelector("#slider").addEventListener("input", function () {
    video.volume = (this.value / 100.0);
	document.querySelector("#volume").innerHTML = ((video.volume * 100.0) + "%");
    video.slider();
});

document.querySelector("#vintage").addEventListener("click", function () {
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function () {
    video.classList.remove("oldSchool");
});

document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
	video.play();
	updateVolume();
 });

