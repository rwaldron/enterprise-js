var tips = [];

tips.push({
	author: 'bentruyman',
	message: 'Never Using Literals or Lazy Shorthand',
	example: [
		'var integer = new Number(5);',
		'var myString = new String("Hello World");',
		'var foo = new Object();',
		'var arrayOfFoo = new Array(5);'
	]
});

module.exports = tips;
