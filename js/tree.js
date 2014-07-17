"use strict";

var Tree = Polygon.extend({

	init : function (points, center_x, center_y, radius) {
		this._super(points);

		this.x = center_x;
		this.y = center_y;
	},

	update : function () {
		
	},

	render : function (ctx) {

	}
});