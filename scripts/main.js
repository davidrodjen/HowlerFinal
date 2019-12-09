
window.onload = function () {
    var pDBtn = document.getElementById("ParadiseLightsbtn");
    pDBtn.onclick = ParadisePlay;

    var dubBtn = document.getElementById("BadDub");
    dubBtn.onclick = dubPlay;

    var paradisepauseBtn = document.getElementById("paradisepause");
    paradisepauseBtn.onclick = ParadisePause;

    var dubpauseBtn = document.getElementById("dubpause");
    dubpauseBtn.onclick = dubPause;
}


var Paradisesound = new Howl({
    src: ['Sounds/ParadiseLights.mp3'],
    autoplay: false,
    loop: false,
    volume: 0.3,
    onend: function (){
        console.log('Finished');
    }
    });


function ParadisePlay(){
    Paradisesound.play();
}

function ParadisePause(){
    Paradisesound.pause();
}


var Dubsound = new Howl({
    src: ['Sounds/grossDub.mp3'],
    autoplay: false,
    loop: false,
    volume: 0.3,
    oneend: function() {
        console.log('Finished');
    }
});
    
function dubPlay(){
    Dubsound.play();
}

function dubPause(){
    Dubsound.pause();
}
// sound.play();






// import {Howl, Howler} from 'howler';
// const {Howl, Howler} = require('howler');



