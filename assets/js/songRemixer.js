// Cache references to DOM elements.
/*const elms = ['pad0', 'pad1', 'pad2', 'pad3', 'pad4', 'pad5', 'pad6', 'pad7', 'pad8'];
elms.forEach(function (elm) {
    window[elm] = document.getElementById(elm);
});
*/

class Sprite {
    constructor(options) {
        var self = this;

        self.sounds = [];

        // Setup the options to define this sprite display.
        self._spriteMap = options.spriteMap;
        self._sprite = options.sprite;
        self.setupListeners();

        // Create our audio sprite definition.
        self.sound = new Howl({
            src: options.src,
            sprite: options.sprite
        });

    }
    /**
     * Setup the listeners for each sprite click area.
     */
    /*
    setupListeners() {
        var self = this;
        var keys = Object.keys(self._spriteMap);

        keys.forEach(function (key) {
            window[key].addEventListener('click', function () {
                self.play(key);
            }, false);
        });
    }
    */
    /**
     * Play a sprite when clicked and track the progress.
     * @param  {String} key Key in the sprite map object.
     */
    play(key) {
        var self = this;
        var sprite = self._spriteMap[key];

        // Play the sprite sound and capture the ID.
        var id = self.sound.play(sprite);

    }
}

const sprite = new Sprite({
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

function playAudio() {
    for (let i = 0; i < spriteMap.length; i++) {

    }
}



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
        stopAudio(currentSongId);

    });
});