window.onload = function () {
    var pDBtn = document.getElementById("ParadiseLightsbtn");
    pDBtn.onclick = ParadisePlay;

    var dubBtn = document.getElementById("BadDub");
    dubBtn.onclick = dubPlay;
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

var Dubsound = new Howl({
    src: ['Sounds/grossDub.mp3'],
    autoplay: false,
    loop: false,
    volume: 0.3,
    oneend: function() {
        console.log('Finished');
    }
});
    
function ParadisePlay(){
    Paradisesound.play();
}

function dubPlay(){
    Dubsound.play();
}
// sound.play();






// import {Howl, Howler} from 'howler';
// const {Howl, Howler} = require('howler');



