"use strict";

var Asteroid = Polygon.extend({

	max_x : null,
	max_y : null,

	init : function (points, size, center_x, center_y) {
		this._super(points);

		var r, v;

		this.x = center_x;
		this.y = center_y;

		this.scale(size);

		this.rotate_angle = 0.01 * (Math.random() * 2 - 1) + 0.01;

		r = TAU * Math.random();
		v = Math.random() * 4 + 1;
		this.vel = {
			x : v * Math.cos(r),
			y : v * Math.sin(r)
		};
	},

	update : function () {
		this.x += this.vel.x;
		this.y += this.vel.y;

		if (this.x > this.max_x) {
			this.x -= this.max_x;
		} else if (this.x < 0) {
			this.x += this.max_x;
		}
		if (this.y > this.max_y) {
			this.y -= this.max_y;
		} else if (this.y < 0) {
			this.y += this.max_y;
		}

		this.rotate(this.rotate_angle);
	},

	draw : function (ctx) {
		ctx.drawPolygon(this, this.x, this.y);
	}
});