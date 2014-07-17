"use strict";

var States = {
	NO_CHANGE : 0,
	MENU : 1,
	GAME : 2,
	END : 3,
	TEST : 4
};

var width  = window.innerWidth,
	height = window.innerHeight;

var Game = Class.extend({

	init : function () {
		this.canvas = new Canvas(width, height);

		this.canvas.ctx.fillStyle   = "#862656";
		this.canvas.ctx.strokeStyle = "#fff";

		this.current_state = null;
		this.next_state    = States.TEST;

		this.input = new InputHandler({
			left     : 37,
			up       : 38,
			right    : 39,
			down     : 40,
			spacebar : 32,
			enter    : 13
		});
	},

	run : function () {
		var self = this;
		this.canvas.animate(function() {

			if (self.next_state !== States.NO_CHANGE) {
				switch (self.next_state) {
					case States.MENU:
						self.current_state = new State(self);
						break;
					case States.GAME:
						self.current_state = new GameState(self);
						break;
					case States.END:
						self.current_state = new State(self);
						break;
					case States.TEST:
						self.current_state = new TestState(self);
						break;
				}
				self.next_state = self.NO_CHANGE;
			}

			self.current_state.handle_input(self.input);
			self.current_state.update();
			self.current_state.render(self.canvas.ctx);
		});
	}

});