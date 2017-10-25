/* global console */
/* eslint no-console: "off" */

// Credit: Fixed and cleaned version of @melux's demo-zoom:
// https://gist.github.com/melux/50c0f994bfa1caf2c1a0

"use strict";

var isValue       = require("es5-ext/object/is-value")
  , customError   = require("es5-ext/error/custom")
  , ensureTimeout = require("timers-ext/valid-timeout")
  , element       = require("../valid-html-element")
  , getDimensions = require("./get-dimensions")
  , getPosition   = require("./get-position")
  , isImage       = require("../../html-image-element/is-html-image-element")
  , imgPromise    = require("../../html-image-element/#/promise");

module.exports = function (/* Options */) {
	var wheelEventName
	  , image
	  , wrapDim
	  , imageDim
	  , onMove
	  , zoom = 1
	  , init
	  , options = Object(arguments[0])
	  , initTimeout = isValue(options.initTimeout) ? ensureTimeout(options.initTimeout) : null
	  , checkAndInit;

	if (element(this).onmousewheel === undefined) {
		if (this.onwheel === undefined) {
			throw customError("Wheel event not supported", "WHEEL_EVENT_NOT_SUPPORTED");
		}
		wheelEventName = "wheel";
	} else {
		wheelEventName = "mousewheel";
	}

	image = element(this.firstElementChild);

	init = function () {
		imageDim = {
			width: options.width || image.naturalWidth,
			height: options.height || image.naturalHeight
		};

		if (!imageDim.width || !imageDim.height) {
			throw customError("No image dimensions detected", "NO_DIMENSIONS");
		}

		wrapDim = getDimensions.call(this);
		if (!wrapDim.width || !wrapDim.height) {
			throw customError("No wrap dimensions detected", "NO_DIMENSIONS");
		}

		// We want to avoid interface glitches for too large images
		if (Math.max(imageDim.width, imageDim.height) > 3000) {
			return;
		}
		this.style.overflow = "hidden";
		this.style.position = "relative";
		this.style.cursor = "crosshair";

		this.addEventListener(
			"mouseover",
			function () {
				wrapDim = getDimensions.call(this);
				zoom = 1;
				image.style.position = "absolute";
				image.style.top = "0";
				image.style.left = "0";
				image.style.width = imageDim.width * zoom + "px";
				image.style.height = imageDim.height * zoom + "px";
				image.style.maxWidth = "none";
				image.style.maxHeight = "none";
			},
			false
		);

		this.addEventListener(
			"mousemove",
			onMove = function (e) {
				var pos = getPosition.call(this)
				  , mX = e.pageX - pos.left
				  , mY = e.pageY - pos.top
				  , ratioX = mX / wrapDim.width
				  , ratioY = mY / wrapDim.height
				  , iX = mX - imageDim.width * zoom * ratioX
				  , iY = mY - imageDim.height * zoom * ratioY;

				image.style.left = iX + "px";
				image.style.top = iY + "px";
			},
			false
		);

		this.addEventListener(
			"mouseout",
			function () {
				image.style.position = "";
				image.style.top = "";
				image.style.left = "";
				image.style.width = "";
				image.style.height = "";
				image.style.maxWidth = "";
				image.style.maxHeight = "";
			},
			false
		);

		this.addEventListener(
			wheelEventName,
			function (e) {
				var deltaY = 0, delta;

				e.preventDefault();

				if (e.deltaY) deltaY = e.deltaY;
				else if (e.wheelDelta) deltaY = -e.wheelDelta;

				delta = deltaY / 1200;

				if (
					zoom + delta <= 1 &&
					zoom + delta > 0 &&
					(imageDim.width * (zoom + delta) > wrapDim.width ||
						imageDim.height * (zoom + delta) > wrapDim.height)
				) {
					zoom += delta;

					image.style.width = imageDim.width * zoom + "px";
					image.style.height = imageDim.height * zoom + "px";
				}

				onMove.call(this, e);
			},
			false
		);
	}.bind(this);

	var startTime = Date.now();
	checkAndInit = function () {
		if (this.offsetWidth && this.offsetHeight && (options.width || image.naturalWidth)) {
			init();
			return;
		}
		if (isValue(initTimeout) && Date.now() - startTime > initTimeout) return;
		setTimeout(checkAndInit, 200);
	}.bind(this);

	if (isImage(image)) {
		imgPromise.call(image).done(checkAndInit, function (err) {
			if (err.code === "LOAD_ERROR") {
				console.error(err.stack);
				console.error(
					"Cannot load image " +
						JSON.stringify(image.src) +
						" due to not reliable network connection"
				);
				return;
			}
			if (err.code === "LOAD_ABORTED") {
				console.error(err.stack);
				console.error("Aborted load of image " + JSON.stringify(image.src));
				return;
			}
			throw err;
		});
	} else {
		checkAndInit();
	}

	return this;
};
