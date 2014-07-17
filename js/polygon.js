"use strict";

var Polygon = Class.extend({

	init : function (points) {
		this.points = points.slice(0);
	},

	rotate : function (theta) {
		var c = Math.cos(theta),
			s = Math.sin(theta),
			x, y, i, len;

		for (i = 0, len = this.points.length; i < len; i += 2) {
			x = this.points[i];
			y = this.points[i + 1];

			this.points[i]     = c*x - s*y;
			this.points[i + 1] = s*x + c*y;
		}
	},

	scale : function (size) {
		for (var i = 0, len = this.points.length; i < len; ++i) {
			this.points[i] *= size;
		}
	},

	has_point : function (ox, oy, x, y) {

	}
});