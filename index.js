const showGif = () => {
/* 
    Hide all of the page elements, to highlight the video
*/

const iphoneImage = document.getElementById("free-iphone-scam");
iphoneImage.style.display = "none";

const informationGrabber = document.getElementById("information-grabber");
informationGrabber.style.display = "none";

const title = document.getElementById("title");
title.style.display = "none";

/* Hide button */

const scamButton = document.getElementById("coin-button");
scamButton.style.display = "none";
/* 
    Show the pendejo video
*/


    const gif = document.getElementById("eres-pendejo");
    gif.classList.remove("hidden");
    gif.play();
    /* let audio = new Audio('./assets/audio/hamster_dance.mp4');
    audio.play(); */


}

const handleClick = () => {
    const coinButton = document.getElementById("coin-button");
    coinButton.addEventListener("click", showGif)
}

handleClick();
