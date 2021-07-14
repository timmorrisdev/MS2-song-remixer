//class and constructor to create Song objects

class Song {
    constructor(name, tempo, stems = []) {
        this.name = name;
        this.tempo = tempo;
        this.stems = stems;
    }
};

//supply song information to Song class

const alooshInfo = new Song('aloosh', '91', [{
    name: 'Drums'
}, {
    name: 'Percussion'
}, {
    name: 'Bass'
}, {
    name: 'Main Guitar'
}, {
    name: 'Synths'
}, {
    name: 'Lead Guitar'
}, {
    name: 'FX'
}, {
    name: 'Lead Vocal'
}, {
    name: 'Backing Vocals'
}, ]);

const escapeInfo = new Song('escape', '97', [{
    name: 'Drums'
}, {
    name: 'Percussion'
}, {
    name: 'Bass'
}, {
    name: 'Main Guitar'
}, {
    name: 'Synths'
}, {
    name: 'Lead Guitar'
}, {
    name: 'FX'
}, {
    name: 'Lead Vocal'
}, {
    name: 'Backing Vocals'
}, ]);

const songs = [alooshInfo, escapeInfo];


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
    }
});

let pad0 = "";
let pad1 = "";
let pad2 = "";
let pad3 = "";
let pad4 = "";
let pad5 = "";
let pad6 = "";
let pad7 = "";
let pad8 = "";
let pad9 = "";

let allPads = [];

function playAudio() {

    allPads = [];

    let drums = Object.keys(alooshAudio._sprite)[1];
    pad0 = alooshAudio.play(drums);
    allPads.push(pad0);

    let perc = Object.keys(alooshAudio._sprite)[5];
    pad1 = alooshAudio.play(perc);
    allPads.push(pad1);

    let bass = Object.keys(alooshAudio._sprite)[0];
    pad2 = alooshAudio.play(bass);
    allPads.push(pad2);

    let gtrRhythm = Object.keys(alooshAudio._sprite)[4];
    pad3 = alooshAudio.play(gtrRhythm);
    allPads.push(pad3);

    let gtrLead = Object.keys(alooshAudio._sprite)[3];
    pad4 = alooshAudio.play(gtrLead);
    allPads.push(pad4);

    let synths = Object.keys(alooshAudio._sprite)[6];
    pad5 = alooshAudio.play(synths);
    allPads.push(pad5);

    let fx = Object.keys(alooshAudio._sprite)[2];
    pad6 = alooshAudio.play(fx);
    allPads.push(pad6);

    let vocalLead = Object.keys(alooshAudio._sprite)[8];
    pad7 = alooshAudio.play(vocalLead);
    allPads.push(pad7);

    let vocalBacking = Object.keys(alooshAudio._sprite)[7];
    pad8 = alooshAudio.play(vocalBacking);
    allPads.push(pad8);

};

function stopAudio() {
    alooshAudio.stop();
};


//build pad grid 

function buildPadsArea(song) {
    let padReset = document.getElementById('pads-container');
    padReset.innerText = '';

    let songName = song.name;
    let stemName = song.stems;


    for (let i = 0; i < song.stems.length; i++) {

        //create pad grid function
        function createPad() {
            let padContainer = document.getElementById('pads-container');
            let pad = document.createElement('div');
            pad.classList.add('pad');
            pad.classList.add(`${songName}-theme`);
            pad.id = `pad${i}`;
            pad.innerHTML = `<span class="pad-content">${stemName[i].name}</span>`;

            padContainer.appendChild(pad);

        }

        createPad();


    };
};

//pad toggle function

function padToggle(pad) {
    console.log(`${pad}`);
}




//jQuery Functions

$(document).ready(function () {
    $('#select-aloosh').click(function () {
        buildPadsArea(alooshInfo);
        $('body').addClass('aloosh-theme');
    });
    $('#select-escape').click(function () {
        buildPadsArea(escapeInfo);
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
    $('#pads-container').delegate("#pad0", "click", function () {
        console.log(pad0);
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