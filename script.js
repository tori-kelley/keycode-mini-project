window.addEventListener("keypress", keyPressed);
keys = document.getElementsByClassName("key");
disKey = keys[0];
disKeyCode = keys[1];
disCode = keys[2];

function keyPressed(e) {
    disKey.childNodes[0].textContent = `${e.key}`;
    disKeyCode.childNodes[0].textContent = `${e.keyCode}`;
    disCode.childNodes[0].textContent = `${e.code}`;
}