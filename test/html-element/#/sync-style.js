"use strict";

module.exports = function (t, a, d) {
	var source, target, observer;
	if (typeof document === "undefined") {
		d();
		return;
	}

	source = document.createElement("p");
	target = document.createElement("p");
	source.style.height = "100px";

	observer = t.call(target, source, "height");

	setTimeout(function () {
		a(target.style.height, "100px");
		source.style.height = "200px";
		setTimeout(function () {
			a(target.style.height, "200px");
			observer.disconnect();
			d();
		}, 1000);
	}, 1000);
};
