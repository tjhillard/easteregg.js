var Egg = (function(window){
    'use strict';
    function define_easteregg(){
        var egg = {};

        // Variables
        egg.active = true;
        egg.isKonami = null;
        egg.isPhrase = null;
        egg.phrase = [];
        egg.input = [];
        egg.keysPressed = 0;
        egg.callback = function() {
          console.warn('egg.callback not defined!');
        };
        egg.keys = [];

        // Object to Convert Key String to Key Code
        var keyCharToCode = {"Backspace":8,"Tab":9,"Enter":13,"Shift":16,"Ctrl":17,"Alt":18,"Pause/Break":19,"Caps Lock":20,"Esc":27,"Space":32,"Page Up":33,"Page Down":34,"End":35,"Home":36,"Left":37,"Up":38,"Right":39,"Down":40,"Insert":45,"Delete":46,"0":48,"1":49,"2":50,"3":51,"4":52,"5":53,"6":54,"7":55,"8":56,"9":57,"A":65,"B":66,"C":67,"D":68,"E":69,"F":70,"G":71,"H":72,"I":73,"J":74,"K":75,"L":76,"M":77,"N":78,"O":79,"P":80,"Q":81,"R":82,"S":83,"T":84,"U":85,"V":86,"W":87,"X":88,"Y":89,"Z":90,"Windows":91,"Right Click":93,"Numpad 0":96,"Numpad 1":97,"Numpad 2":98,"Numpad 3":99,"Numpad 4":100,"Numpad 5":101,"Numpad 6":102,"Numpad 7":103,"Numpad 8":104,"Numpad 9":105,"Numpad *":106,"Numpad +":107,"Numpad -":109,"Numpad .":110,"Numpad /":111,"F1":112,"F2":113,"F3":114,"F4":115,"F5":116,"F6":117,"F7":118,"F8":119,"F9":120,"F10":121,"F11":122,"F12":123,"Num Lock":144,"Scroll Lock":145,"My Computer":182,"My Calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222};

        // Load Options
        egg.init = function(options, callback) {

          // active?
          if (options.hatch === false) {
            console.log(false);
            egg.active = false;
          }
          // phrase?
          if (options.phrase) {
            for (var i = 0; i < options.phrase.length; i++) {
              egg.phrase.push(options.phrase[i]);
            }
            egg.isPhrase = true;
            console.log('Secret Phrase: ', egg.phrase);
          }
          // konami
          if (options.konami) {
            egg.isKonami = true;
          }
          // callback
          egg.callback = callback;
        };

        // Activate listener
        egg.hatch = function() {
          egg.active = true;
        };

        // Listen for keystrokes
          window.onkeydown = function(event) {
            if (egg.active) {
              var keyCode = event.keyCode;
              var key = event.key;

              var arraysAreIdentical = function(arrayOne, arrayTwo) {
                for(var i = arrayTwo.length; i--;) {
                  if(arrayOne[i] !== arrayTwo[i]) {
                    return false;
                  }
                }
                  return true;
              };

              if (egg.isKonami) {
                var konamiKeys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
                egg.input.push(keyCode);

                // logs
                console.log('Got keystroke: ', event);
                console.log('Current Phrase: ', egg.input);

                if (egg.input[egg.input.length - 1] !== konamiKeys[egg.input.length - 1]) {
                  // Invalid key
                  egg.input = [];
                }

                if (egg.input.length === konamiKeys.length) {
                  if (arraysAreIdentical(egg.input, konamiKeys)) {
                    egg.input = [];
                    egg.callback();
                    return;
                  }
                }
              }
              if (egg.isPhrase) {
                egg.input.push(key);
                if (egg.input[egg.input.length - 1] !== egg.phrase[egg.input.length - 1]) {
                  // Invalid key
                  egg.input = [];
                }
                if (egg.input.length === egg.phrase.length) {
                  if (arraysAreIdentical(egg.input, egg.phrase)) {
                    egg.input = [];
                    egg.callback();
                    return;
                  }
                }

                // logs
                console.log('Got keystroke: ', event);
                console.log('Current Phrase: ', egg.input);
              }
            }
          };


        return egg;


    }
    if(typeof(egg) === 'undefined'){
        window.egg = define_easteregg();
    }
    else{
        console.log("egg is already defined.");
    }
})(window);
