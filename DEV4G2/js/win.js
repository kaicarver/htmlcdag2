var win = window.open("", "mywin", "width=200, height=200")
var promptDansWin = true;
if (!promptDansWin) {
    h = prompt("height", 200)
    w = prompt("width", 500)
} else {
    h = win.prompt("height", 200)
    w = win.prompt("width", 500)
}
win.resizeTo(w, h)
win.moveTo(600,300)