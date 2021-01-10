function wonPrize() {
    localStorage.setItem('isWinner', true);
}

function winCheck() {
    let isWinner = localStorage.getItem('isWinner');
    console.log('Le item oui :' + isWinner);
    if (isWinner === 'true') {
        window.location = 'win.html';
    }
}

function debug() {
    localStorage.setItem('isWinner', false);
    window.location = 'index.html';
}