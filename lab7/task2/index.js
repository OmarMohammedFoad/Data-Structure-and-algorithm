const nonPrintableKeyCodes = ['Shift', 'Control', 'Alt', 'CapsLock', 'Meta', 'Enter', 'Escape', 'Backspace', 'Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
function keyboardAsciiEvent(element) {
    document.addEventListener('keydown', function (e) {
        var key = e.key;
        if (nonPrintableKeyCodes.includes(key)) {
            element.innerText = " " + key;
        } else {
            element.innerText = " " + key.charCodeAt(0);
        }
    });
}
function keyboardEvent(element) {
    document.addEventListener('keydown', function (e) {
        var key = e.key;
        if (!nonPrintableKeyCodes.includes(key)) {
            element.textContent += key;
        }
    });
}

function preventInspect(element) {
    document.addEventListener('keydown', function (e) {
        if (
            ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I') ||
            (e.shiftKey && e.key === 'F10')
        ) {
            e.preventDefault();
            element.innerText = " Can't open the context menu";
        }
    });
    
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        element.innerText = " Can't open the context menu";
    });
}

function main() {
    var ascii = document.getElementById("ascii")
    var output = document.getElementById("output")
    var clearBtn = document.getElementById("clear")
    keyboardAsciiEvent(ascii);
    keyboardEvent(output);
    preventInspect(ascii);
    clearBtn.onclick = function () {
        output.innerText = ""
    }
}

main();