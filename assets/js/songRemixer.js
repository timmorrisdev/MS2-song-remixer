let stems1 = ['drums', 'percussion', 'bass', 'guitar', 'synths', 'lead guitar', 'fx', 'lead vocal', 'backing']

let stems2 = ['drums', 'percussion', 'bass', 'guitar']



function createPads() {
    const padContainer = document.getElementById('pads-container');
    const pad = document.createElement('div');
    pad.classList.add('pad');

    padContainer.appendChild(pad);
}

function buildPadsAreaOne() {
    let padReset = document.getElementById('pads-container');
    padReset.innerText = '';

    for (let i = 0; i < stems1.length; i++) {
        createPads();
    };
};

function buildPadsAreaTwo() {
    let padReset = document.getElementById('pads-container');
    padReset.innerText = '';

    for (let i = 0; i < stems2.length; i++) {
        createPads();
    };
};


//jQuery Functions

$(document).ready(function () {
    $('#song1Selector').on('click', buildPadsAreaOne);
    $('#song2Selector').on('click', buildPadsAreaTwo);
});