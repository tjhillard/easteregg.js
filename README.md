# EasterEgg.js
Fun and easy way to add easter eggs and cheat codes to your webpages

# API
### Konami Code
(up, up, down, down, left, right, left, right, b, a)
```javascript
// Simple Konami Code listener with callback
egg.init({
  konami: true
}, function() {
  alert('You\'ve activated my trap card!');
});
```

### Custom Phrase
String | Alphanumeric
```javascript
// Egg with string phrase
egg.init({
  hatch: false,
  phrase: "secret123"
}, function() {
  alert('Custom phrase callback!');
});
```

### Keys
Array of Strings
```javascript
// Egg with keys options
egg.init({
  keys: ['c', 'o', 'o', 'l', 'Enter']
}, function() {
  alert('Keys array callback!');
});
```

### KeyCodes
Array of Integers
```javascript
// Egg with codes options
egg.init({
  codes: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
}, function() {
  alert('KeyCodes array!');
});
```
