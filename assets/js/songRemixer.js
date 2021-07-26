class Sprite {
    constructor(options) {
        let self = this;

        // Create audio sprite definition.
        self.sound = new Howl({
            src: options.src,
            sprite: options.sprite,
            preload: false,
        });

    }
};

const alooshAudio = new Sprite({
    "src": [
        // "assets/songs/aloosh/aloosh.webm",
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
});

const escapeAudio = new Sprite({
    "src": [
        //"assets/songs/escape/escapeSprite.webm",
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
});

//Array to store sprite ID for each pad to enable access to audio parameters (mute / rate etc)
let allPads = [];

function playAudio() {
    //clears existing sprite IDs from allPads variable
    allPads = [];

    //check current song
    if (currentSongId === 'aloosh') {

        //checks if audio is loaded and ready
        if (alooshAudio.sound.state() === 'loaded') {
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
            alert('song loading, please try again!')
        };
    } else if (currentSongId === 'escape') {

        //checks if audio is loaded and ready
        if (escapeAudio.sound.state() === 'loaded') {
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
        alooshAudio.sound.stop();
    } else if (currentSongId === 'escape') {
        escapeAudio.sound.stop();
    } else {
        alert('no song playing');
    };
};


// function to change the theme of various elements of the site when selecting a new song

function changeTheme(newSong) {

    //replaces the body class at index 0 with the new song theme
    const bodyTheme = document.body.classList[0];
    document.body.classList.replace(bodyTheme, `${newSong}-theme`);

    //replaces the playBtn Id with the selected song
    playBtn = document.getElementById('playBtn');
    const playID = playBtn.classList[0];
    playBtn.classList.replace(playID, `${newSong}`);

    // update nav theme
    const navBrand = document.getElementById('navbarBrand');
    const navBrandTheme = navBrand.classList[0];
    navBrand.classList.replace(navBrandTheme, `${newSong}-theme`)

    const navLink = document.getElementById('navbarNav');
    const navLinkTheme = navLink.classList[0];
    navLink.classList.replace(navLinkTheme, `${newSong}-theme`)

    // update page header theme
    const pageHeader = document.getElementById('pageHeader');
    pageHeaderTheme = pageHeader.classList[0];
    pageHeader.classList.replace(pageHeaderTheme, `${newSong}-theme`)

    //replaces song select button classes
    const button = document.getElementById('songSelectorButton');
    const buttonTheme = button.classList[0];
    button.classList.replace(buttonTheme, `${newSong}-theme`);

    const dropdown = document.getElementById('songSelectorDropdown');
    const dropdownTheme = dropdown.classList[0];
    dropdown.classList.replace(dropdownTheme, `${newSong}-theme`);

    //replaces footer class
    const footerLinks = document.getElementById('footerLinks');
    const footerLinksTheme = footerLinks.classList[0];
    footerLinks.classList.replace(footerLinksTheme, `${newSong}-theme`);

}

//build pad grid 
/*
function buildPadsArea(song) {

    //clears the pad container of the existing song grid
    const padContainer = document.getElementById('pads-container');
    padContainer.innerText = '';

    //add pad-container style class
    padContainer.classList.add('pads-container')

    // remove hidden class from transport section
    const transport = document.getElementById('transportContainer');
    if (transport.classList.contains('hidden') === false) {
        transport.classList.add('hidden');
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
        transport.classList.remove('hidden');
    }, 90 * stemName.length);

};


*/





//Sets current song variable for use within various functions across the site.
let currentSongId = "";

//jQuery Event Handlers

$(document).ready(function () {
    //select 'Aloosh'
    $('#select-aloosh').click(function () {
        escapeAudio.sound.unload();
        alooshAudio.sound.load();

        //remove instructions section
        $('.instructions-container, #spacer').remove();

        currentSongId = "aloosh";
        // buildPadsArea(alooshInfo);

        changeTheme("aloosh");

    });
    //select 'Escape'
    $('#select-escape').click(function () {
        alooshAudio.sound.unload();
        escapeAudio.sound.load();

        //remove instructions section
        $('.instructions-container, #spacer').remove();

        //alooshAudio.stop();
        currentSongId = "escape";
        //buildPadsArea(escapeInfo);
        changeTheme("escape");

    });


    //Play button click
    $('#playBtn').click(function () {

        playAudio();

    });
    //Stop button
    $('#stopBtn').click(function () {
        stopAudio();

    });
});