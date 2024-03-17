document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('h1head');
    const secretInput = document.createElement('input');
    secretInput.type = 'text';
    secretInput.placeholder = 'Enter 1337';
    secretInput.id = 'secret-input';
    document.body.appendChild(secretInput);

    const gifContainer = document.createElement('div');
    gifContainer.id = 'gif-container';
    gifContainer.style.display = 'none';

    const closeButton = document.createElement('span');
    closeButton.textContent = 'X';
    closeButton.className = 'close-btn';
    closeButton.addEventListener('click', function() {
        gifContainer.style.display = 'none';
    });
    gifContainer.appendChild(closeButton);

    const gifImage = document.createElement('img');
    gifImage.src = '/Images/giphy.gif';
    gifImage.alt = 'Easter egg GIF';
    gifContainer.appendChild(gifImage);

    document.body.appendChild(gifContainer);

    header.addEventListener('click', function() {
        gifContainer.style.display = 'block';
    });
    const secretCode = '1337';
    let inputBuffer = '';

    document.addEventListener('keydown', function(event) {
        if (/^\d$/.test(event.key)) {
            inputBuffer += event.key;
            if (inputBuffer === secretCode) {
                alert('You found the second Easter egg!');
                inputBuffer = '';
            }
        } else {
            inputBuffer = '';
        }
    });
});
