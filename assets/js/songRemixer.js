// Cache references to DOM elements.
/*const elms = ['pad0', 'pad1', 'pad2', 'pad3', 'pad4', 'pad5', 'pad6', 'pad7', 'pad8'];
elms.forEach(function (elm) {
    window[elm] = document.getElementById(elm);
});
*/

class Sprite {
    constructor(options) {
        let self = this;

        /* self.sounds = [];

         // Setup the options to define this sprite display.
         self._spriteMap = options.spriteMap;
         self._sprite = options.sprite;
         self.setupListeners();

         */
        // Create our audio sprite definition.
        self.sound = new Howl({
            src: options.src,
            sprite: options.sprite
        });

    }
    /**
     * Setup the listeners for each sprite click area.
     */

    // setupListeners() {
    //     var self = this;
    //     var keys = Object.keys(self._spriteMap);

    //     keys.forEach(function (key) {
    //         window[key].addEventListener('click', function () {
    //             self.play(key);
    //         }, false);
    //     });
    // }

    /**
     * Play a sprite when clicked and track the progress.
     * @param  {String} key Key in the sprite map object.
     */

    // play(key) {
    //     var self = this;
    //     var sprite = self._spriteMap[key];

    //     // Play the sprite sound and capture the ID.
    //     var id = self.sound.play(sprite);

    // }
}

let alooshAudio = new Sprite({
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

//Array to store sprite ID for each pad to enable access to audio parameters (mute / rate etc)
let allPads = [];

function playAudio() {
    //clears existing sprite IDs from allPads variable
    allPads = [];

    //check current song



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
    }


};

// stop playback fucntion 

function stopAudio() {

    //if statement to stop audio based on current song selected


    alooshAudio.sound.stop();


};




//jQuery Event Handlers

$(document).ready(function () {
    //select 'Aloosh'
    $('#select-aloosh').click(function () {
        //remove instructions section
        $('.instructions-container, #spacer').remove();

        currentSongId = "aloosh";
        // buildPadsArea(alooshInfo);
        changeTheme("aloosh");

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