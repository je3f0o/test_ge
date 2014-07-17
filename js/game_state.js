"use strict";

var GameState = State.extend({

	init : function (game) {
		this._super(game);

		var astr, n, s, x = Math.floor(game.canvas.ctx.width * Math.random()),
			y = Math.floor(game.canvas.ctx.height * Math.random()),
			i, len;

		this.asteroids = [];

		for (i = 0, len = 10; i < len; ++i) {
			n = Math.floor(Math.random() * Points.ASTEROIDS.length);

			s = 15 / (Math.floor(Math.random() * 4) + 1);

			astr = new Asteroid(Points.ASTEROIDS[n], s, x, y); // top left corner 0,0 in canvas
			astr.max_x = game.canvas.ctx.width;
			astr.max_y = game.canvas.ctx.height;

			this.asteroids.push(astr);
		}
	},

	update : function () {
		for (var i = 0, len = this.asteroids.length; i < len; ++i) {
			this.asteroids[i].update();
		}
	},

	render : function (ctx) {
		ctx.clear();
		for (var i = 0, len = this.asteroids.length; i < len; ++i) {
			this.asteroids[i].draw(ctx);
		}
	}
});