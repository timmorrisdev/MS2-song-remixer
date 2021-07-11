//class and constructor to create Song objects

class Song {
    constructor(name, tempo, stems = []) {
        this.name = name;
        this.tempo = tempo;
        this.stems = stems;
    }
};

//supply song information to Song class

const aloosh = new Song('aloosh', '91', [{
    name: 'Drums',
    url: 'assets/songs/aloosh/Drums.mp3'
}, {
    name: 'Percussion',
    url: 'assets/songs/aloosh/Perc.mp3'
}, {
    name: 'Bass',
    url: 'assets/songs/aloosh/Bass.mp3'
}, {
    name: 'Main Guitar',
    url: 'assets/songs/aloosh/GtrRhythm.mp3'
}, {
    name: 'Synths',
    url: 'assets/songs/aloosh/Synths.mp3'
}, {
    name: 'Lead Guitar',
    url: 'assets/songs/aloosh/GtrLead.mp3'
}, {
    name: 'FX',
    url: 'assets/songs/aloosh/FX.mp3'
}, {
    name: 'Lead Vocal',
    url: 'assets/songs/aloosh/VocalsLead.mp3'
}, {
    name: 'Backing Vocals',
    url: 'assets/songs/aloosh/VocalsBVS.mp3'
}, ]);

const escape = new Song('escape', '97', [{
    name: 'Drums',
    url: 'assets/songs/escape/Drums.mp3'
}, {
    name: 'Percussion',
    url: 'assets/songs/escape/Perc.mp3'
}, {
    name: 'Bass',
    url: 'assets/songs/escape/Bass.mp3'
}, {
    name: 'Main Guitar',
    url: 'assets/songs/escape/GtrRhythm.mp3'
}, {
    name: 'Synths',
    url: 'assets/songs/escape/Synths.mp3'
}, {
    name: 'Lead Guitar',
    url: 'assets/songs/escape/GtrLead.mp3'
}, {
    name: 'FX',
    url: 'assets/songs/escape/FX.mp3'
}, {
    name: 'Lead Vocal',
    url: 'assets/songs/escape/VocalsLead.mp3'
}, {
    name: 'Backing Vocals',
    url: 'assets/songs/escape/VocalsBVS.mp3'
}, ]);

const songs = [aloosh, escape];


//create howls for each song

const alooshDrums = new Howl({
    src: ['assets/songs/aloosh/Drums.mp3']
});
const alooshBass = new Howl({
    src: ['assets/songs/aloosh/Bass.mp3']
});
const alooshGtrRhythym = new Howl({
    src: ['assets/songs/aloosh/GtrRhythym.mp3']
});
const alooshSynths = new Howl({
    src: ['assets/songs/aloosh/Synths.mp3']
});
const alooshGtrLead = new Howl({
    src: ['assets/songs/aloosh/GtrLead.mp3']
});
const alooshFX = new Howl({
    src: ['assets/songs/aloosh/FX.mp3']
});
const alooshLeadVocal = new Howl({
    src: ['assets/songs/aloosh/VocalsLead.mp3']
});
const alooshBackingVocals = new Howl({
    src: ['assets/songs/aloosh/VocalsBVS.mp3']
});

function playAudio() {
    alooshDrums.play();
    alooshBass.play();
    alooshGtrRhythym.play();
    alooshSynths.play();
    alooshGtrLead.play();
    alooshFX.play();
    alooshLeadVocal.play();
    alooshBackingVocals.play();
};


//build pad grid 

function buildPadsArea(song) {
    let padReset = document.getElementById('pads-container');
    padReset.innerText = '';

    let songName = song.name;
    let stemUrl = song.stems;


    for (let i = 0; i < song.stems.length; i++) {

        //create pad grid function
        function createPad() {
            let padContainer = document.getElementById('pads-container');
            let pad = document.createElement('div');
            pad.classList.add('pad');
            pad.classList.add(`${songName}-theme`);
            pad.id = `pad${i}`;
            pad.innerHTML = `<span class="pad-content">${stemUrl[i].name}</span>`;

            padContainer.appendChild(pad);

        }

        //add audio element and set source
        /*function addAudioElem() {
            let getPad = document.getElementById(`pad${i}`);
            let audioElem = document.createElement('audio');
            audioElem.src = `${stemUrl[i].url}`;
            audioElem.classList.add('audioPad');
            audioElem.id = `audio${i}`;

            getPad.appendChild(audioElem);
        }*/

        createPad();
        addAudioElem();


    };
};

//pad toggle function

function padToggle(pad) {
    console.log(`${pad}`);
}




//jQuery Functions

$(document).ready(function () {
    $('#select-aloosh').click(function () {
        buildPadsArea(aloosh);
    });
    $('#select-escape').click(function () {
        buildPadsArea(escape);
    });
    $("#pads-container").delegate(".pad", "click", function () {
        let padID = this.id;
        padToggle(padID);
    });
    $('#playBtn').click(function () {
        playAudio();
    });
});




//play function
/*function playAudio() {
    const padLength = document.getElementById('pads-container').children;

    for (let i = 0; i < padLength.length; i++) {

        let audioUrl = document.getElementById(`audio${i}`).src;
        let audio = new Audio(audioUrl);
        audio.play();

    }

}*/