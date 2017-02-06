function phraseToSecret(phrase) {
    let secret = [];
    for (let index = 0; index < phrase.length; index++) {
        secret.push(phrase[index]);
    }
    return secret;
}

function konamiSecret() {
    // up, up, down, down, left, right, left, right, b, a
    return [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
}

function addEvent(element, event, callback) {
    if (element.addEventListener) {
        return element.addEventListener(event, callback, false);
    }

    if (element.attachEvent) {
        return element.attachEvent('on' + event, function () {
            return callback.call(element, window.event);
        });
    }
}

function keystrokesMatchSecret(keystrokes, secret) {
    for (let index = 0; index < secret.length; index++) {
        if (keystrokes[index] !== secret[index]) {
            return false;
        }
    }

    return true;
}

class Egg {
    constructor(options, callback = () => {}) {
        this.secret = [];
        this.setOptions(options);
        this.callback = callback;
        this.keystrokes = [];
        this.activateListener(window, callback);
    }

    activateListener(window) {
        let egg = this;
        addEvent(window, 'keydown', function (event) {
            // push keystokes into object
            egg.keystrokes.push(event.keyCode);

            console.log(egg.keystrokes);
            console.log(egg.secret);

            // no need to compare if length doesn't match
            if (egg.keystrokes.length !== egg.secret.length) {
                return;
            }

            if (keystrokesMatchSecret(egg.keystrokes, egg.secret) && (egg.hatched !== true || egg.canRehatch) && egg.active === true) {
                return egg.hatch();
            }

            // clear input
            egg.keystrokes = [];
        });
    }

    setOptions(options) {
        console.log(options);
        this.hatched = false;
        // de-active on init?
        this.active = options.active !== false;

        // can the callback be triggered multiple times
        this.canRehatch = options.canRehatch !== true;

        // is the konami code used as the secret?
        if (options.konami === true) {
            this.secret = konamiSecret();
            return;
        }

        // are key codes used as the secret?
        if (options.keyCodes) {
            this.secret = options.keyCodes;
            return;
        }

        // is a phrase used as the secret?
        if (options.phrase) {
            this.secret = phraseToSecret(options.phrase);
            return;
        }

        // are key names used as secret?
        if (options.keys) {
            // loop through array of key names
            let secret = [];
            let keyCodes = { "Backspace": 8, "Tab": 9, "Enter": 13, "Shift": 16, "Ctrl": 17, "Alt": 18, "Pause/Break": 19, "Caps Lock": 20, "Esc": 27, "Space": 32, "Page Up": 33, "Page Down": 34, "End": 35, "Home": 36, "Left": 37, "Up": 38, "Right": 39, "Down": 40, "Insert": 45, "Delete": 46, "0": 48, "1": 49, "2": 50, "3": 51, "4": 52, "5": 53, "6": 54, "7": 55, "8": 56, "9": 57, "A": 65, "B": 66, "C": 67, "D": 68, "E": 69, "F": 70, "G": 71, "H": 72, "I": 73, "J": 74, "K": 75, "L": 76, "M": 77, "N": 78, "O": 79, "P": 80, "Q": 81, "R": 82, "S": 83, "T": 84, "U": 85, "V": 86, "W": 87, "X": 88, "Y": 89, "Z": 90, "Windows": 91, "Right Click": 93, "Numpad 0": 96, "Numpad 1": 97, "Numpad 2": 98, "Numpad 3": 99, "Numpad 4": 100, "Numpad 5": 101, "Numpad 6": 102, "Numpad 7": 103, "Numpad 8": 104, "Numpad 9": 105, "Numpad *": 106, "Numpad +": 107, "Numpad -": 109, "Numpad .": 110, "Numpad /": 111, "F1": 112, "F2": 113, "F3": 114, "F4": 115, "F5": 116, "F6": 117, "F7": 118, "F8": 119, "F9": 120, "F10": 121, "F11": 122, "F12": 123, "Num Lock": 144, "Scroll Lock": 145, "My Computer": 182, "My Calculator": 183, ";": 186, "=": 187, ",": 188, "-": 189, ".": 190, "/": 191, "`": 192, "[": 219, "\\": 220, "]": 221, "'": 222 };

            for (let index = 0; index < options.keys.length; index++) {
                // convert each key name to its cooresponding key code
                if (options.keys[index].length > 1) {
                    secret.push(keyCodes[options.keys[index]]);
                } else {
                    secret.push(keyCodes[options.keys[index].toUpperCase()]);
                }

                console.log(secret);
            }

            this.secret = secret;
            return;
        }

        console.error('A secret must be set!');
    }

    // activate listener
    lay() {
        this.active = true;
        return this;
    }

    // perform callback
    hatch() {
        this.hatched = true;
        this.keystrokes = [];
        return this.callback();
    }
}