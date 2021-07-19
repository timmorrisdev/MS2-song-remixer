const alooshSprite = {
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
};

const escapeSprite = {
    "src": [
        "assets/songs/escape/escapeSprite.webm",
        "assets/songs/escape/escapeSprite.mp3"
    ],
    "sprite": {
        "bass": [
            0,
            188040
        ],
        "drums": [
            190000,
            188039.99999999997
        ],
        "fx": [
            380000,
            188039.99999999997
        ],
        "gtrLead": [
            570000,
            188039.99999999997
        ],
        "gtrRhythm": [
            760000,
            188039.99999999997
        ],
        "perc": [
            950000,
            188039.99999999997
        ],
        "synths": [
            1140000,
            188039.99999999997
        ],
        "vocalBacking": [
            1330000,
            188039.99999999997
        ],
        "vocalLead": [
            1520000,
            188039.99999999997
        ]
    }
}

//class and constructor to create Song objects

class Song {
    constructor(name, tempo, stems = []) {
        this.name = name;
        this.tempo = tempo;
        this.stems = stems;
    }
};



//supply song information to Song class (name, tempo, stems[])

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


// function to change the theme of various elements of the site when selecting a new song

function changeTheme(newSong) {

    //replaces the body class at index 0 with the new song theme
    const bodyTheme = document.body.classList[0];
    document.body.classList.replace(bodyTheme, `${newSong}-theme`);

    //replaces the playBtn Id with the selected song
    playBtn = document.getElementById('playBtn');
    const playID = playBtn.classList[0];
    playBtn.classList.replace(playID, `${newSong}`);

}

//build pad grid 

function buildPadsArea(song) {

    //clears the pad container of the existing song grid
    const padReset = document.getElementById('pads-container');
    padReset.innerText = '';

    //assign current song stems information to variable
    const stemName = song.stems;

    for (let i = 0; i < song.stems.length; i++) {

        //create pad grid function
        function createPad() {

            //gets pad-container element and adds div element
            const padContainer = document.getElementById('pads-container');
            const pad = document.createElement('div');

            //add class and ID information to each pad
            pad.classList.add('pad');
            pad.classList.add(`${currentSongId}-theme`);
            pad.id = `${i}`;

            pad.innerHTML = `<span class="pad-content">${stemName[i].name}</span>`;

            padContainer.appendChild(pad);

        }

        createPad();

        /*function padNames() {
            const getPad = document.getElementById(`${i}`)
            getPad.innerHTML = `<span class="pad-content">${stemName[i].name}</span>`;
        }*/

        //padNames();
    };
};

//create howls for each song

const alooshAudio = new Howl(alooshSprite);
const escapeAudio = new Howl(escapeSprite);

//Array to store sprite ID for each pad to enable access to audio parameters (mute / rate etc)
let allPads = [];

function playAudio() {
    //clears existing sprite IDs from allPads variable
    allPads = [];
    //check current song
    if (currentSongId === 'aloosh') {
        //checks if audio is loaded and ready
        if (alooshAudio.state() === 'loaded') {
            //retrieve current sprite ID(changes with each playback), create pad variable and push to allPads array
            const drums = Object.keys(alooshAudio._sprite)[1];
            const pad0 = alooshAudio.play(drums);
            allPads.push(pad0);

            const perc = Object.keys(alooshAudio._sprite)[5];
            const pad1 = alooshAudio.play(perc);
            allPads.push(pad1);

            const bass = Object.keys(alooshAudio._sprite)[0];
            const pad2 = alooshAudio.play(bass);
            allPads.push(pad2);

            const gtrRhythm = Object.keys(alooshAudio._sprite)[4];
            const pad3 = alooshAudio.play(gtrRhythm);
            allPads.push(pad3);

            const synths = Object.keys(alooshAudio._sprite)[6];
            const pad4 = alooshAudio.play(synths);
            allPads.push(pad4);

            const gtrLead = Object.keys(alooshAudio._sprite)[3];
            const pad5 = alooshAudio.play(gtrLead);
            allPads.push(pad5);

            const fx = Object.keys(alooshAudio._sprite)[2];
            const pad6 = alooshAudio.play(fx);
            allPads.push(pad6);

            const vocalLead = Object.keys(alooshAudio._sprite)[8];
            const pad7 = alooshAudio.play(vocalLead);
            allPads.push(pad7);

            const vocalBacking = Object.keys(alooshAudio._sprite)[7];
            const pad8 = alooshAudio.play(vocalBacking);
            allPads.push(pad8);

        } else {
            alert('song loading, please try again!')
        }

    } else if (currentSongId === 'escape') {
        //checks if audio is loaded and ready
        if (alooshAudio.state() === 'loaded') {
            //retrieve current sprite ID(changes with each playback), create pad variable and push to allPads array
            const drums = Object.keys(escapeAudio._sprite)[1];
            const pad0 = escapeAudio.play(drums);
            allPads.push(pad0);

            const perc = Object.keys(escapeAudio._sprite)[5];
            const pad1 = escapeAudio.play(perc);
            allPads.push(pad1);

            const bass = Object.keys(escapeAudio._sprite)[0];
            const pad2 = escapeAudio.play(bass);
            allPads.push(pad2);

            const gtrRhythm = Object.keys(escapeAudio._sprite)[4];
            const pad3 = escapeAudio.play(gtrRhythm);
            allPads.push(pad3);

            const synths = Object.keys(escapeAudio._sprite)[6];
            const pad4 = escapeAudio.play(synths);
            allPads.push(pad4);

            const gtrLead = Object.keys(escapeAudio._sprite)[3];
            const pad5 = escapeAudio.play(gtrLead);
            allPads.push(pad5);

            const fx = Object.keys(escapeAudio._sprite)[2];
            const pad6 = escapeAudio.play(fx);
            allPads.push(pad6);

            const vocalLead = Object.keys(escapeAudio._sprite)[8];
            const pad7 = escapeAudio.play(vocalLead);
            allPads.push(pad7);

            const vocalBacking = Object.keys(escapeAudio._sprite)[7];
            const pad8 = escapeAudio.play(vocalBacking);
            allPads.push(pad8);

        } else {
            alert('song loading, please try again!')
        };
    } else {
        alert('select a song from the menu and get mixing!');
    };



};

// stop playback fucntion 

function stopAudio() {

    //if statement to stop audio based on current song selected

    if (currentSongId === 'aloosh') {
        alooshAudio.stop();
    } else if (currentSongId === 'escape') {
        escapeAudio.stop();
    } else {
        alert('no song playing');
    };
};

//pad mute toggle function

function padMute(padId) {

    const padMute = document.getElementById(`${padId}`);

    if (currentSongId === 'aloosh') {

        if (padMute.classList.contains('pad-muted')) {
            alooshAudio.mute(false, allPads[`${padId}`]);
            padMute.classList.remove('pad-muted')
        } else {
            alooshAudio.mute(true, allPads[`${padId}`]);
            padMute.classList.add('pad-muted');
        }

    } else if (currentSongId === 'escape') {

        if (padMute.classList.contains('pad-muted')) {
            escapeAudio.mute(false, allPads[`${padId}`]);
            padMute.classList.remove('pad-muted')
        } else {
            escapeAudio.mute(true, allPads[`${padId}`]);
            padMute.classList.add('pad-muted');
        }

    } else {
        alert('select a song a get mixing!');
    };
}

//clear all mutes function

function clearMutes() {

    if (currentSongId === 'aloosh') {

        //remove mute from all sprites
        alooshAudio.mute(false);

        //get all pads and assign to variable
        const getPads = document.getElementsByClassName('pad');

        //loop through pads and remove any existing 'pad-muted' class
        for (let i = 0; i < getPads.length; i++) {
            getPads[i].classList.contains('pad-muted');
            getPads[i].classList.remove('pad-muted');
        }
    } else if (currentSongId === 'escape') {

        //remove mute from all sprites
        escapeAudio.mute(false);

        //get all pads and assign to variable
        const getPads = document.getElementsByClassName('pad');

        //loop through pads and remove any existing 'pad-muted' class
        for (let i = 0; i < getPads.length; i++) {
            getPads[i].classList.contains('pad-muted');
            getPads[i].classList.remove('pad-muted');
        }
    } else {
        alert('No song loaded');
    }
};

//Sets current song variable for use within various functions across the site.
let currentSongId = "";

//jQuery Event Handlers

$(document).ready(function () {
    //select 'Aloosh'
    $('#select-aloosh').click(function () {

        escapeAudio.stop();
        currentSongId = "aloosh";
        buildPadsArea(alooshInfo);
        changeTheme("aloosh");

    });
    //select 'Escape'
    $('#select-escape').click(function () {

        alooshAudio.stop();
        currentSongId = "escape";
        buildPadsArea(escapeInfo);
        changeTheme("escape");

    });
    $('#select-paradisco').click(function () {

        //alooshAudio.stop();
        currentSongId = "paradisco";
        buildPadsArea(escapeInfo);
        changeTheme("paradisco");

    });
    //Play button
    $('#playBtn').click(function () {
        playAudio();
    });
    //Stop button
    $('#stopBtn').click(function () {
        stopAudio(currentSongId);

    });
    //Individual pad clicked
    $("#pads-container").delegate(".pad", "click", function () {
        const padID = this.id;
        padMute(padID);
    });
    //Clear mutes button
    $('#clearMutes').click(function () {
        clearMutes();
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



/* function setSprite() {
    if (currentSongId === 'aloosh') {
        fetch("/assets/songs/escape/escape.json")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                let currentSprite = data;
                sprite = currentSprite;
            });
    } else if (currentSongId === 'escape') {
        fetch("/assets/songs/aloosh/aloosh.json")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                let currentSprite = data;
                sprite = currentSprite;
            });
    }
}; */