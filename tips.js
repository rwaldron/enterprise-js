var tips = [];

tips.push({
  author: 'bentruyman',
  message: 'Never Using Literals or <em>Lazy</em> Shorthand',
  example: [
    'var integer = new Number(5);',
    'var myString = new String("Hello World");',
    'var foo = new Object();',
    'var arrayOfFoo = new Array(5);',
    'if (status === new Boolean(true)) {',
    ' ...',
    '}'
  ]
});

tips.push({
  author: 'bentruyman',
  message: 'Extremely Descriptive <em>Self-Documenting</em> Variable Names',
  example: [
    'function CatObjectThatInheritsAnimal() {',
    ' this.yellowFurColorString = "yellow";',
    ' this.animalsAgeInYears = 10;',
    '}',
    '',
    'CatObjectThatInheritsAnimal.prototype = new AnimalObjectThatInheritsNothing;'
  ]
});

tips.push({
  author: 'bentruyman',
  message: 'Using Constants to Keep Everything <em>Abstract</em>',
  example: [
    'var FALSE = new Boolean(false);',
    'var TRUE = new Boolean(true);',
    'var ONE = new Number(1);',
    '',
    'function IF_STATEMENT(condition, callback) {',
    ' if (condition == TRUE) {',
    '   callback.call(this);',
    ' }',
    '}'
  ]
});

tips.push({
  author: 'bentruyman',
  message: 'Ensuring Lines Are Terminated With Multiple Semicolons So the JavaSript Parser <em>Really Knows</em> when a Line Is Ending',
  example: [
    'var helloWorld = function (message) {',
    ' if (!message) {',
    '   message = "Hello World";;;;;;',
    ' }',
    '',
    ' alert(message);;;;;;;;;;;;;;;;;;;',
    '',
    '};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;'
  ]
});

tips.push({
  author: 'bentruyman',
  message: 'Creating <em>Really</em> Random Numbers',
  example: [
    'var reallyRandom = Math.pow(Math.random(), Math.random());'
  ]
});


tips.push({
  author: 'rwaldron',
  message: "Make sure you explicitly declare EVERY VARIABLE on it's own line, that way your team will know they are all variables",
  example: [
    'var li = "<li></li>";', 
    'var div = "<div>"+li+"</div>";', 
    'var num1 = 4;', 
    'var num2 = 5;', 
    'var total = num1 + num2;', 
    'var rounded = Math.round(total);'
  ]
});

tips.push({
  author: 'rwaldron',
  message: "Declaring your functions globally ensures they are accessible throughout your entire script. This ensures they always take precedence!",
  example: [
    'function postMessage(message) {', 
    ' $.post("/helloworld.php", "message="+message)', 
    '};'
  ]
});



module.exports = tips;
