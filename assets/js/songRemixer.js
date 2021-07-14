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

const alooshAudio = new Howl({
        "src": [
            "assets/songs/aloosh/aloosh.webm",
            "assets/songs/aloosh/aloosh.mp3"
        ],
        "sprite": {
            "bass": [
                0,
                187272.0181405896
            ],
            "drums": [
                189000,
                187272.0181405896
            ],
            "fx": [
                378000,
                187272.0181405896
            ],
            "gtrLead": [
                567000,
                187272.0181405896
            ],
            "gtrRhythm": [
                756000,
                187272.0181405896
            ],
            "perc": [
                945000,
                187272.0181405896
            ],
            "synths": [
                1134000,
                187272.0181405896
            ],
            "vocalBacking": [
                1323000,
                187272.0181405896
            ],
            "vocalLead": [
                1512000,
                187272.0181405896
            ]
        },
        "stems": ['Drums', 'Bass', 'Perc', 'Rythym Guitar', 'Synths', 'Lead Guitar', 'FX', 'Lead Vocal', 'Backing Vocal']
    }

);

// const alooshDrums = new Howl({
//     src: ['assets/songs/aloosh/Drums.mp3']
// });
// const alooshBass = new Howl({
//     src: ['assets/songs/aloosh/Bass.mp3']
// });
// const alooshGtrRhythym = new Howl({
//     src: ['assets/songs/aloosh/GtrRhythym.mp3']
// });
// const alooshSynths = new Howl({
//     src: ['assets/songs/aloosh/Synths.mp3']
// });
// const alooshGtrLead = new Howl({
//     src: ['assets/songs/aloosh/GtrLead.mp3']
// });
// const alooshFX = new Howl({
//     src: ['assets/songs/aloosh/FX.mp3']
// });
// const alooshLeadVocal = new Howl({
//     src: ['assets/songs/aloosh/VocalsLead.mp3']
// });
// const alooshBackingVocals = new Howl({
//     src: ['assets/songs/aloosh/VocalsBVS.mp3']
// });

function playAudio() {
    alooshAudio.play('drums');
    alooshAudio.play('bass');
    alooshAudio.play('perc');
    alooshAudio.play('gtrRythym');
    alooshAudio.play('gtrLead');
    alooshAudio.play('synths');
    alooshAudio.play('vocalBacking');
    alooshAudio.play('vocalLead');
    alooshAudio.play('fx');
};

function stopAudio() {
    alooshAudio.stop();
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
        //addAudioElem();


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
        $('body').addClass('aloosh-theme');
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
    $('#stopBtn').click(function () {
        stopAudio();
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