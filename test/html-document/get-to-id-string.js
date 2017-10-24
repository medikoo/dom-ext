"use strict";

module.exports = function (t, a) {
	var toIdString = t();
	a(toIdString("elo"), "elo");
	a(toIdString("elo"), "elo-2");
	a(toIdString("elox"), "elox");
	a(toIdString("elo"), "elo-3");
	a(toIdString("elo-2"), "elo-2-2");
	a(toIdString("elo-2-2"), "elo-2-2-2");
};
