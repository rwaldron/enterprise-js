process.chdir(__dirname);
require.paths.push('/usr/local/lib/node');

var express = require('express')
  , hl = require("highlight").Highlight;

var app = express.createServer();

app.configure(function () {
	app.use(express.methodOverride());
	app.use(express.bodyDecoder());
	app.use(app.router);
	app.use(express.staticProvider(__dirname + '/public'));
});

// Colors
var colors = 'ff0090,ffff00,0bff00,08e3ff,ff460d'.split(',');

// Tips
var tips = require('./tips');

// Make 'em sexy
tips.forEach(function (tip) {
	tip.example = hl(tip.example.join('\n'));
});

// Routes
app.get('/', function (req, res) {
	showTip(res, Math.ceil(Math.random() * tips.length));
});

app.get('/:permalink', function (req, res) {
	var index = req.params.permalink;

	if (tips[index - 1]) {
		showTip(res, index);
	} else {
		res.redirect('/');
	}
});

function showTip (res, index) {
	res.render('index.jade', {
		locals: {
			tip: tips[index - 1],
			color: colors[Math.floor(Math.random() * colors.length)],
			index: index
		}
	});
}

app.listen(3002);