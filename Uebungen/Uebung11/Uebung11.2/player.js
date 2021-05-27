function halfSpeed(rate) {
    var vid = document.getElementById("player");
    if(rate == 0.5) {
        vid.playbackRate = 1;
    } else if (rate == 1) {
        vid.playbackRate = 2;
    } else if (rate == 2) {
        vid.playbackRate = 0.5;
    }
}

function toggleLoop(checked) {
    var vid = document.getElementById("player");
    console.log(checked);

    if(checked) {
        vid.loop = true;
    }
    if(!checked) {
        vid.loop = false;
    }
}