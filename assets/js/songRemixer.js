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