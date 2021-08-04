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

const escapeInfo = new Song('escape', '97', [{
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

class Sprite {
    constructor(options) {
        let self = this;

        // Create audio sprite definition.
        self.sound = new Howl({
            src: options.src,
            sprite: options.sprite,
            loop: true,
        });

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
});


//Array to store sprite ID for each pad to enable access to audio parameters (mute / rate etc)
let allPads = [];

function audioControl() {

    //if else statement to determine which function to use

    if (currentSongId === 'aloosh') {
        if (alooshAudio.sound.playing) {
            pauseAudio();

        }

    } else if (currentSongId === 'escape') {

    };
};

function playAudio() {

    //check current song
    if (currentSongId === 'aloosh') {

        if (alooshAudio.sound.seek() === 0) {

            //prevents additional playback instance
            if (!alooshAudio.sound.playing()) {

                //checks if audio is loaded and ready
                if (alooshAudio.sound.state() === 'loaded') {

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
                    alert('song loading, please try again!')
                }
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

                //checks if audio is loaded and ready
                if (escapeAudio.sound.state() === 'loaded') {

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
                    alert('song loading, please try again!')
                };

            };

        } else {
            for (let i = 0; i < allPads.length; i++) {
                escapeAudio.sound.play(allPads[i])
            };
        };
    } else {
        alert('select a song from the menu and get mixing!');
    }
};

// pause playback function

function pauseAudio() {
    //if statement to pause audio based on current song selected

    if (currentSongId === 'aloosh') {
        alooshAudio.sound.pause();
    } else if (currentSongId === 'escape') {
        escapeAudio.sound.pause();
    };
};

// stop playback fucntion 

function stopAudio() {

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
    const muteBtn = document.getElementById('clearMutes');

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

    const muteBtn = document.getElementById('clearMutes');

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

    /*
    //replaces the playBtn Id with the selected song
    playBtn = document.getElementById('playBtn');
    const playID = playBtn.classList[0];
    playBtn.classList.replace(playID, `${newSong}`);
*/
    /*
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
    */
}

//build pad grid 

function buildPadsArea(song) {

    //clears the pad container of the existing song grid
    const padContainer = document.getElementById('pads-container');
    padContainer.innerText = '';

    //add pad-container style class
    padContainer.classList.remove('hidden')
    padContainer.classList.add('pads-container')

    // hide transport if navigating from another song and reset
    const transportContainer = document.getElementById('transportContainer');
    if (transportContainer.classList.contains('hidden') === false) {
        transportContainer.classList.add('hidden');
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

        buildPadsArea(alooshInfo);
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

        buildPadsArea(escapeInfo);
        changeTheme(currentSongId);

    });


    //Play button click
    $('.transport').delegate('#playBtn', 'click', function () {

        $('#playBtn i').removeClass('fa-play');
        $('#playBtn i').addClass('fa-pause');
        $('#playBtn').attr('id', 'pauseBtn');
        $('#stopBtn i').removeClass('fa-step-backward');
        $('#stopBtn i').addClass('fa-stop');

        playAudio();

    });
    $('.transport').delegate('#pauseBtn', 'click', function () {

        $('#pauseBtn i').removeClass('fa-pause');
        $('#pauseBtn i').addClass('fa-play');
        $('#pauseBtn').attr('id', 'playBtn');
        $('#stopBtn i').removeClass('fa-stop');
        $('#stopBtn i').addClass('fa-step-backward');

        pauseAudio();
    });

    //Stop button
    $('.transport').delegate('#stopBtn', 'click', function () {

        $('#pauseBtn').attr('id', 'playBtn');
        $('#playBtn i').removeClass('fa-pause');
        $('#playBtn i').addClass('fa-play');
        $('#stopBtn i').removeClass('fa-stop');
        $('#stopBtn i').addClass('fa-step-backward');

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