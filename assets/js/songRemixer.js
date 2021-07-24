// Cache references to DOM elements.
const elms = ['pad0', 'pad1', 'pad2', 'pad3', 'pad4', 'pad5', 'pad6', 'pad7', 'pad8'];
elms.forEach(function (elm) {
    window[elm] = document.getElementById(elm);
});

var Sprite = function (options) {
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

};
Sprite.prototype = {
    /**
     * Setup the listeners for each sprite click area.
     */
    setupListeners: function () {
        var self = this;
        var keys = Object.keys(self._spriteMap);

        keys.forEach(function (key) {
            window[key].addEventListener('click', function () {
                self.play(key);
            }, false);
        });
    },

    /**
     * Play a sprite when clicked and track the progress.
     * @param  {String} key Key in the sprite map object.
     */
    play: function (key) {
        var self = this;
        var sprite = self._spriteMap[key];

        // Play the sprite sound and capture the ID.
        var id = self.sound.play(sprite);

        // Create a progress element and begin visually tracking it.
        var elm = document.createElement('div');
        elm.className = 'progress';
        elm.id = id;
        elm.dataset.sprite = sprite;
        window[key].appendChild(elm);
        self.sounds.push(elm);

        // When this sound is finished, remove the progress element.
        self.sound.once('end', function () {
            var index = self.sounds.indexOf(elm);
            if (index >= 0) {
                self.sounds.splice(index, 1);
                window[key].removeChild(elm);
            }
        }, id);
    },

};

var sprite = new Sprite({
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