function buildPadsArea() {

    const resetPads = document.getElementById('pads-container');
    resetPads.innerHTML = '';

    function createPads() {
        const padContainer = document.getElementById('pads-container');
        const pad = document.createElement('div');
        pad.classList.add('pad');

        padContainer.appendChild(pad);
    }

    let stems = ['drums', 'percussion', 'bass', 'guitar', 'synths', 'lead guitar', 'fx', 'lead vocal', 'backing vocal']

    for (let i = 0; i < stems.length; i++) {
        createPads();
    };

};

// document.getElementById('song1Selector').addEventListener('click', function () {
//     buildPadsArea();
// });