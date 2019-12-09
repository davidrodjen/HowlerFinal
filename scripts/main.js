
window.onload = function () {
    var pDBtn = document.getElementById("ParadiseLightsbtn");
    pDBtn.onclick = ParadisePlay;

    var dubBtn = document.getElementById("BadDub");
    dubBtn.onclick = dubPlay;

    var paradisepauseBtn = document.getElementById("paradisepause");
    paradisepauseBtn.onclick = ParadisePause;

    var dubpauseBtn = document.getElementById("dubpause");
    dubpauseBtn.onclick = dubPause;

    var majChaseBtn = document.getElementById("majchase");
    majChaseBtn.onclick = majPlay;

    var majChasePauseBtn = document.getElementById("majchasepause");
    majChasePauseBtn.onclick = majPause;
}
// create a windows onload event that triggers pause and play

var Paradisesound = new Howl({
    src: ['Sounds/ParadiseLights.mp3'],
    autoplay: false,
    loop: false,
    volume: 0.3,
    onend: function (){
        console.log('Finished');
    }
    });

//function for playing song created as a var object
function ParadisePlay(){
    Paradisesound.play();
}

function ParadisePause(){
    Paradisesound.pause();
}

//function for playing song created as a var object
var Dubsound = new Howl({
    src: ['Sounds/grossDub.mp3'],
    autoplay: false,
    loop: false,
    volume: 0.3,
    oneend: function() {
        console.log('Finished');
    }
});
 /**
  * Create functions to call by buttons using play and pause as returns
  */   
function dubPlay(){
    Dubsound.play();
}

function dubPause(){
    Dubsound.pause();
}


var majChase = new Howl({
    src: ['Sounds/ExtendedMajesticChase.mp3'],
    autoplay: false,
    loop: false,
    volume: 0.4,
    oneend: function() {
        console.log('Finished');
    }
});
 /**
  * Create functions to call by buttons using play and pause as returns
  */   
function majPlay(){
    majChase.play();
}

function majPause(){
    majChase.pause();
}
// sound.play();






// import {Howl, Howler} from 'howler';
// const {Howl, Howler} = require('howler');



