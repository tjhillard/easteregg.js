# easteregg.js
:tada: Fun and easy way to add easter eggs and cheat codes to your webpages :video_game:

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
  alert('Keys callback!');
});
```

### KeyCodes
Array of Integers
```javascript
// Egg with codes options
egg.init({
  codes: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
}, function() {
  alert('KeyCodes callback!');
});
```

# API

## init(options, callback)
> options
>> An object that can contain the following
* konami: boolean
* phrase: string (alphanumeric)
* keys: array of string values
* codes: array of ints
* hatch: boolean | default true | if true, the listener that triggers the callback is set to active

> callback
>> A funciton that executes when the successful code is entered by the user

#### Note: Only use 1 egg.init() per page.

## hatch()
> Method that hatches egg instance and activates listener
>> Note: Requires hatch to be false in the init method
> Example

```javascript
// Won't be hatched
egg.init({
  hatch: false,
  konami: true
}, function() {
  alert('You\'ve activated my trap card!');
});

// Now is hatched (activated)
egg.hatch();
```
