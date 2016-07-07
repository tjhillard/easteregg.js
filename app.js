// Simple Konami Code listener with callback
egg.init({
  konami: true
}, function() {
  alert('You\'ve activated my trap card!');
});

// Egg with string phrase and is disabled until hatch() is called
egg.init({
  hatch: false,
  phrase: "secret123"
}, function() {
  alert('Custom phrase callback!');
});

// Activate Egg
egg.hatch();

// Egg with keys options
egg.init({
  keys: ['c', 'o', 'o', 'l', 'Enter']
}, function() {
  alert('Keys array callback!');
});

// Egg with codes options
egg.init({
  codes: [35, 36, 37, 38]
}, function() {
  alert('KeyCodes array!');
});
