"use strict";

var Canvas = Class.extend({

	init : function (width, height) {
		this.canvas = document.createElement("canvas");
		this.canvas.width  = width;
		this.canvas.height = height;

		this.ctx = (function(ctx) {
			ctx.width  = ctx.canvas.width;
			ctx.height = ctx.canvas.height;

			ctx.drawPolygon = function (polygon, center_x, center_y) {
				var p = polygon.points, i, len;

				this.beginPath();
				this.moveTo(p[0] + center_x, p[1] + center_y);
				for (i = 2, len = p.length; i < len; i += 2) {
					this.lineTo(p[i] + center_x, p[i + 1] + center_y);
				}
				this.stroke();
			};

			ctx.clear = function () {
				this.clearRect(0, 0, this.width, this.height);
			};

			return ctx;
		}(this.canvas.getContext("2d")));

		document.body.appendChild(this.canvas);
	},

	update : function() {
		this.ctx.canvas.width  = this.ctx.width  = window.innerWidth;
		this.ctx.canvas.height = this.ctx.height = window.innerHeight;
		this.ctx.fillStyle = "#862656";
	},

	animate : function (game_loop) {
		var request_frame = (function() {
			return window.requestAnimationFrame    ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame    ||
				window.oRequestAnimationFrame      ||
				window.msRequestAnimationFrame     ||
				function (callback) {
					window.setTimeout(callback, 1000 / 60);
				};
		}());

		var self = this;

		function loop() {
			request_frame(loop);
			self.update();
			game_loop();
		}
		request_frame(loop);
	}

	// function draw() {
	//   var ctx = (a canvas context);
	//   ctx.canvas.width  = window.innerWidth;
	//   ctx.canvas.height = window.innerHeight;
	//   //...drawing code...
	// }

});