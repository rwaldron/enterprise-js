Enterprise JavaScript
=====================

If you're someone that runs an enterprise-level website (>100 hits per day),
you've probably had to deal with the pains of scaling and maintaining your
code.

Enterprises have dealt with these problems for years -- this is an attempt
at gathering all of that knowledge and to share it with the world.

## Dependencies

 * [Connect 0.2.6](http://senchalabs.github.com/connect/) (`npm install connect`)
 * [Express 1.0.0rc4](http://expressjs.com/) (`npm install express`)
 * [Highlight 0.1.0](http://github.com/andris9/highlight/) (`npm install highlight`)
 * [Jade 0.5.3](http://jade-lang.com/) (`npm install jade`)

## Adding Your Own Tips

Add your own tips to `tip.js` by appending to the `tips` array:

    tips.push({
    	author: 'your_twitter_handle',
    	message: 'Your Tip Message',
    	example: [
    		'<div>',
			'	Code Example',
    		'</div>'
    	]
    });

Once committed, send a pull request and I'll be sure to get it up on
[enterprise-js.com](http://enterprise-js.com).