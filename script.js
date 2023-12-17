let countColors = 0;
let myButton = document.getElementById('initial-button');

function changeColour() {
    ++countColors;
    if (countColors % 3 == 0) {
        myButton.style.backgroundColor = 'red';
    } else if (countColors % 3 == 1) {
        myButton.style.backgroundColor = 'yellow';
    } else {
        myButton.style.backgroundColor = 'green';;
    }
}

window.setInterval(changeColour, 10000);
