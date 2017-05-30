// JavaScript source code
function hideandshow(id, button) {
    var x = id;
    var y = button;
    if (x.style.display === 'none') {
        x.style.display = 'block';
        y.innerHTML = 'Hide Solution';
    }
    else {
        x.style.display = 'none';
        y.innerHTML = 'Show Solution';
    }
}
