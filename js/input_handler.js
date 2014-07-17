"use strict";

var InputHandler = Class.extend({

	init : function (keys) {
		
		var self = this, key, code;

		this.keys = {};
		this.down = {};
		this.pressed = {};

		for (key in keys) {
			code = keys[key];

			this.keys[code]   = key;
			this.down[key]    = false;
			this.pressed[key] = false;
		}

		document.addEventListener("keydown", function(evt) {
			if (self.keys[evt.keyCode]) {

				self.down[ self.keys[evt.keyCode] ] = true;
			}
		});
		document.addEventListener("keyup", function(evt) {
			if ( self.keys[evt.keyCode] ) {

				self.down[ self.keys[evt.keyCode] ]    = false;
				self.pressed[ self.keys[evt.keyCode] ] = false;
			}
		});
	},

	is_down : function (key) {
		return this.down[key];
	},

	is_pressed : function (key) {
		if (this.pressed[key]) {
			return false;
		} else if (this.down[key]) {
			return this.pressed[key] = true;
		}
		return false;
	}

});