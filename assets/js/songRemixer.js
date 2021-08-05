// define dom object variables

const transportContainer = document.getElementById('transportContainer');
const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');
const playIcon = document.getElementById('playIcon');
const stopIcon = document.getElementById('stopIcon');
const muteBtn = document.getElementById('clearMutes');

//Array to store sprite ID for each pad to enable access to audio parameters (mute / rate etc)
let allPads = [];


// Song sprite and info constructor

class Sprite {
    constructor(options, name, tempo, stems = []) {

        // Create audio sprite definition.
        this.sound = new Howl({
            src: options.src,
            sprite: options.sprite,
            loop: true,
        });
        this.name = name;
        this.tempo = tempo;
        this.stems = stems;
    }
};

const alooshAudio = new Sprite({
    "src": [
        "assets/songs/aloosh/aloosh.webm",
        "assets/songs/aloosh/aloosh.mp3"
    ],
    "sprite": {
        "bass": [
            0,
            47472.53968253968
        ],
        "drums": [
            49000,
            47472.53968253969
        ],
        "fx": [
            98000,
            47472.53968253969
        ],
        "gtrLead": [
            147000,
            47472.53968253969
        ],
        "gtrRhythm": [
            196000,
            47472.53968253969
        ],
        "perc": [
            245000,
            47472.53968253966
        ],
        "synths": [
            294000,
            47472.53968253966
        ],
        "vocalBacking": [
            343000,
            47472.53968253966
        ],
        "vocalLead": [
            392000,
            47472.53968253966
        ],
    },
    spriteMap: {
        pad0: 'bass',
        pad1: 'drums',
        pad2: 'fx',
        pad3: 'gtrLead',
        pad4: 'gtrRhythm',
        pad5: 'perc',
        pad6: 'synths',
        pad7: 'vocalBacking',
        pad8: 'vocalLead',
    }
}, 'aloosh', '91', [{
    name: 'DRUMS'
}, {
    name: 'PERCUSSION'
}, {
    name: 'BASS'
}, {
    name: 'MAIN GUITAR'
}, {
    name: 'SYNTHS'
}, {
    name: 'LEAD GUITAR'
}, {
    name: 'FX'
}, {
    name: 'LEAD VOCAL'
}, {
    name: 'BACKING VOCALS'
}, ]);

const escapeAudio = new Sprite({
    "src": [
        "assets/songs/escape/escape.webm",
        "assets/songs/escape/escape.mp3"
    ],
    "sprite": {
        "bass": [
            0,
            29692.83446712018
        ],
        "drums": [
            31000,
            29692.834467120178
        ],
        "fx": [
            62000,
            29692.834467120178
        ],
        "gtrLead": [
            93000,
            29692.834467120178
        ],
        "gtrRhythm": [
            124000,
            29692.834467120178
        ],
        "perc": [
            155000,
            29692.834467120178
        ],
        "synths": [
            186000,
            29692.834467120178
        ],
        "vocalBacking": [
            217000,
            29692.834467120178
        ],
        "vocalLead": [
            248000,
            29692.834467120178
        ]
    },
    spriteMap: {
        pad0: 'bass',
        pad1: 'drums',
        pad2: 'fx',
        pad3: 'gtrLead',
        pad4: 'gtrRhythm',
        pad5: 'perc',
        pad6: 'synths',
        pad7: 'vocalBacking',
        pad8: 'vocalLead',
    }
}, 'escape', '97', [{
    name: 'DRUMS'
}, {
    name: 'PERCUSSION'
}, {
    name: 'BASS'
}, {
    name: 'MAIN GUITAR'
}, {
    name: 'SYNTHS'
}, {
    name: 'LEAD GUITAR'
}, {
    name: 'FX'
}, {
    name: 'LEAD VOCAL'
}, {
    name: 'BACKING VOCALS'
}, ]);

function playAudio() {

    //checks if audio is loaded and ready
    if (alooshAudio.sound.state() === 'loaded') {

        // change icons and ID in transport ready for pause or stop function

        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
        playBtn.id = 'pauseBtn';
        stopIcon.classList.remove('fa-step-backward');
        stopIcon.classList.add('fa-stop');

        //check current song
        if (currentSongId === 'aloosh') {

            if (alooshAudio.sound.seek() === 0) {

                //prevents additional playback instance
                if (!alooshAudio.sound.playing()) {

                    //clears existing sprite IDs from allPads variable
                    allPads = [];

                    //retrieve current sprite ID(changes with each playback), create pad variable and push to allPads array
                    const drums = Object.keys(alooshAudio.sound._sprite)[1];
                    const pad0 = alooshAudio.sound.play(drums);
                    allPads.push(pad0);

                    const perc = Object.keys(alooshAudio.sound._sprite)[5];
                    const pad1 = alooshAudio.sound.play(perc);
                    allPads.push(pad1);

                    const bass = Object.keys(alooshAudio.sound._sprite)[0];
                    const pad2 = alooshAudio.sound.play(bass);
                    allPads.push(pad2);

                    const gtrRhythm = Object.keys(alooshAudio.sound._sprite)[4];
                    const pad3 = alooshAudio.sound.play(gtrRhythm);
                    allPads.push(pad3);

                    const synths = Object.keys(alooshAudio.sound._sprite)[6];
                    const pad4 = alooshAudio.sound.play(synths);
                    allPads.push(pad4);

                    const gtrLead = Object.keys(alooshAudio.sound._sprite)[3];
                    const pad5 = alooshAudio.sound.play(gtrLead);
                    allPads.push(pad5);

                    const fx = Object.keys(alooshAudio.sound._sprite)[2];
                    const pad6 = alooshAudio.sound.play(fx);
                    allPads.push(pad6);

                    const vocalLead = Object.keys(alooshAudio.sound._sprite)[8];
                    const pad7 = alooshAudio.sound.play(vocalLead);
                    allPads.push(pad7);

                    const vocalBacking = Object.keys(alooshAudio.sound._sprite)[7];
                    const pad8 = alooshAudio.sound.play(vocalBacking);
                    allPads.push(pad8);

                } else {
                    alert('song already playing')
                };

            } else {
                for (let i = 0; i < allPads.length; i++) {
                    alooshAudio.sound.play(allPads[i])
                };
            }

        } else if (currentSongId === 'escape') {

            if (escapeAudio.sound.seek() === 0) {

                //prevents additional playback instance
                if (!escapeAudio.sound.playing()) {

                    //clears existing sprite IDs from allPads variable
                    allPads = [];

                    //retrieve current sprite ID(changes with each playback), create pad variable and push to allPads array
                    const drums = Object.keys(escapeAudio.sound._sprite)[1];
                    const pad0 = escapeAudio.sound.play(drums);
                    allPads.push(pad0);

                    const perc = Object.keys(escapeAudio.sound._sprite)[5];
                    const pad1 = escapeAudio.sound.play(perc);
                    allPads.push(pad1);

                    const bass = Object.keys(escapeAudio.sound._sprite)[0];
                    const pad2 = escapeAudio.sound.play(bass);
                    allPads.push(pad2);

                    const gtrRhythm = Object.keys(escapeAudio.sound._sprite)[4];
                    const pad3 = escapeAudio.sound.play(gtrRhythm);
                    allPads.push(pad3);

                    const synths = Object.keys(escapeAudio.sound._sprite)[6];
                    const pad4 = escapeAudio.sound.play(synths);
                    allPads.push(pad4);

                    const gtrLead = Object.keys(escapeAudio.sound._sprite)[3];
                    const pad5 = escapeAudio.sound.play(gtrLead);
                    allPads.push(pad5);

                    const fx = Object.keys(escapeAudio.sound._sprite)[2];
                    const pad6 = escapeAudio.sound.play(fx);
                    allPads.push(pad6);

                    const vocalLead = Object.keys(escapeAudio.sound._sprite)[8];
                    const pad7 = escapeAudio.sound.play(vocalLead);
                    allPads.push(pad7);

                    const vocalBacking = Object.keys(escapeAudio.sound._sprite)[7];
                    const pad8 = escapeAudio.sound.play(vocalBacking);
                    allPads.push(pad8);

                } else {
                    alert('song already playing')
                };

            } else {
                for (let i = 0; i < allPads.length; i++) {
                    escapeAudio.sound.play(allPads[i])
                };
            };
        } else {
            alert('select a song from the menu and get mixing!');
        }
    } else {
        alert('song loading, please try again');
    };
};

// pause playback function

function pauseAudio() {

    const pauseBtn = document.getElementById('pauseBtn');

    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');

    pauseBtn.id = 'playBtn';
    stopIcon.classList.remove('fa-stop');
    stopIcon.classList.add('fa-step-backward');

    //if statement to pause audio based on current song selected
    if (currentSongId === 'aloosh') {
        alooshAudio.sound.pause();
    } else if (currentSongId === 'escape') {
        escapeAudio.sound.pause();
    };
};

// stop playback fucntion 

function stopAudio() {

    const playClass = document.getElementsByClassName('play-btn');
    if (playClass[0].id !== 'playBtn') {
        playClass[0].id = 'playBtn'
    }

    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
    stopIcon.classList.remove('fa-stop');
    stopIcon.classList.add('fa-step-backward');

    //if statement to stop audio based on current song selected

    if (currentSongId === 'aloosh') {
        alooshAudio.sound.stop();
    } else if (currentSongId === 'escape') {
        escapeAudio.sound.stop();
    };
};

//pad mute toggle function

function padMute(padId) {

    const padMute = document.getElementById(`${padId}`);

    if (currentSongId === 'aloosh') {

        if (padMute.classList.contains('pad-muted')) {
            alooshAudio.sound.mute(false, allPads[`${padId}`]);
            padMute.classList.remove('pad-muted')
        } else {
            alooshAudio.sound.mute(true, allPads[`${padId}`]);
            padMute.classList.add('pad-muted');
        }
    } else if (currentSongId === 'escape') {
        if (padMute.classList.contains('pad-muted')) {
            escapeAudio.sound.mute(false, allPads[`${padId}`]);
            padMute.classList.remove('pad-muted')
        } else {
            escapeAudio.sound.mute(true, allPads[`${padId}`]);
            padMute.classList.add('pad-muted');
        }
    } else {
        alert('select a song a get mixing!');
    };

    if (muteBtn.classList.contains('mute-active') === false) {
        muteBtn.classList.add('mute-active');
    }

}

//clear all mutes function

function clearMutes() {

    if (currentSongId === 'aloosh') {

        //remove mute from all sprites
        alooshAudio.sound.mute(false);

        //get all pads and assign to variable
        const getPads = document.getElementsByClassName('pad');

        //loop through pads and remove any existing 'pad-muted' class
        for (let i = 0; i < getPads.length; i++) {
            getPads[i].classList.contains('pad-muted');
            getPads[i].classList.remove('pad-muted');
        }



    } else if (currentSongId === 'escape') {

        //remove mute from all sprites
        escapeAudio.sound.mute(false);

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

    if (muteBtn.classList.contains('mute-active')) {
        muteBtn.classList.remove('mute-active');
    }
};


// function to change the theme of various elements of the site when selecting a new song

function changeTheme(newSong) {

    //replaces the body class at index 0 with the new song theme
    const bodyTheme = document.body.classList[0];
    document.body.classList.replace(bodyTheme, `${newSong}-theme`);
}

//build pad grid 

function buildPadsArea(song) {

    //clears the pad container of the existing song grid
    const padContainer = document.getElementById('pads-container');
    padContainer.innerText = '';

    //add pad-container style class
    padContainer.classList.remove('hidden')
    padContainer.classList.add('pads-container')

    const playClass = document.getElementsByClassName('play-btn');
    if (playClass[0].id !== 'playBtn') {
        playClass[0].id = 'playBtn'
    }

    // hide transport if navigating from another song and reset

    if (transportContainer.classList.contains('hidden') === false) {
        transportContainer.classList.add('hidden');
    };
    if (playIcon.classList.contains('fa-pause')) {
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
    };
    if (stopIcon.classList.contains('fa-step-backward')) {
        stopIcon.classList.remove('fa-step-backward');
        stopIcon.classList.add('fa-stop');
    };
    if (muteBtn.classList.contains('mute-active')) {
        muteBtn.classList.remove('mute-active');
    };


    //replace page heading content and capitalise first letter of song ID
    const pageHeader = document.getElementById('pageHeader');
    const newHeader = currentSongId[0].toUpperCase() + currentSongId.slice(1).toLowerCase();
    pageHeader.innerHTML = newHeader;

    //assign current song stems information to variable
    const stemName = song.stems;

    for (let i = 0; i < song.stems.length; i++) {

        //create pad grid function
        function createPad() {

            setTimeout(function () {
                //gets pad-container element and adds div element
                const padContainer = document.getElementById('pads-container');
                const pad = document.createElement('div');

                //add class and ID information to each pad
                pad.classList.add('pad');
                pad.classList.add(`${currentSongId}-theme`);
                pad.id = `${i}`;

                pad.innerHTML = `<span class="pad-content">${stemName[i].name}</span>`;

                padContainer.appendChild(pad);
            }, 90 * i);
        }

        createPad();

    };

    setTimeout(function () {
        transportContainer.classList.remove('hidden');
    }, 90 * stemName.length);

};

//Sets current song variable for use within various functions across the site.
let currentSongId = "";

//jQuery Event Handlers

$(document).ready(function () {
    //select 'Aloosh'
    $('#select-aloosh').click(function () {

        //remove instructions section
        $('.instructions-container, #spacer').remove();

        stopAudio();
        currentSongId = "aloosh";

        playAudio();
        stopAudio();

        buildPadsArea(alooshAudio);
        changeTheme(currentSongId);

    });
    //select 'Escape'
    $('#select-escape').click(function () {

        stopAudio();
        currentSongId = "escape";
        //remove instructions section
        $('.instructions-container, #spacer').remove();

        playAudio();
        stopAudio();

        buildPadsArea(escapeAudio);
        changeTheme(currentSongId);
    });
    //Play button click
    $('.transport').delegate('#playBtn', 'click', function () {

        playAudio();

    });
    $('.transport').delegate('#pauseBtn', 'click', function () {

        pauseAudio();
    });

    //Stop button
    $('.transport').delegate('#stopBtn', 'click', function () {

        stopAudio();

    });
    //Individual pad clicked
    $('#pads-container').delegate('.pad', 'click', function () {
        const padID = this.id;
        padMute(padID);
    });
    //Clear mutes button
    $('#clearMutes').click(function () {
        clearMutes();
    });

});