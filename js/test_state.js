"use strict";

var max_x = null,
	max_y = null;

var TestState = State.extend({

	init : function (game) {
		this._super(game);

		var x, y, r, i, len;

		this.particles = [];

		for (i = 0, len = 250; i < len; ++i) {
			x = Math.floor(Math.random() * game.canvas.ctx.width);
			y = Math.floor(Math.random() * game.canvas.ctx.height);
			r = Math.floor(Math.random() * 3 + 1);

			this.particles.push({
				x:x, y:y, r:r,
				vel : Math.random() * 0.25 + 0.15
			});
		}
	},

	handle_input : function (input) {
		if (input.is_pressed("spacebar")) {
			console.log("WTF???");
		}
	},

	update : function () {
		var x, y, i, len;

		max_x = window.innerWidth;
		max_y = window.innerHeight;

		for (i = 0, len = this.particles.length; i < len; ++i) {
			this.particles[i].x += this.particles[i].vel;
			this.particles[i].y += this.particles[i].vel;

			if (this.particles[i].x > max_x) {
				this.particles[i].x -= max_x;
			} else if (this.particles[i].x < 0) {
				this.particles[i].x += max_x;
			}
			if (this.particles[i].y > max_y) {
				this.particles[i].y -= max_y;
			} else if (this.particles[i].y < 0) {
				this.particles[i].y += max_y;
			}
		}
	},

	render : function (ctx) {
		var x, y, r, i, len;

		ctx.clear();
		// ctx.fillStyle = "rgb(45, 22, 34)";
		// ctx.fillRect(0, 0, width, height);

		// ctx.fillStyle = "#862656";
		for (i = 0, len = this.particles.length; i < len; ++i) {
			x = this.particles[i].x;
			y = this.particles[i].y;
			r = this.particles[i].r;

			ctx.beginPath();
			ctx.arc(x, y, r, 0, TAU);
			ctx.closePath();
			ctx.fill();
		}
	}
});