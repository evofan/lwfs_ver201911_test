global.LWF.Script = global.LWF.Script || {};
global.LWF.Script["lwf_hit_cat"] = function() {
	var LWF = global.LWF;
	var Loader = global.LWF.Loader;
	var Movie = global.LWF.Movie;
	var Property = global.LWF.Property;
	var Point = global.LWF.Point;
	var Matrix = global.LWF.Matrix;
	var Color = global.LWF.Color;
	var ColorTransform = global.LWF.ColorTransform;
	var Tween = global.LWF.Tween;
	var _root;

	var fscommand = function(type, arg) {
		if (type === "event") {
			_root.lwf.dispatchEvent(arg, this);
		} else {
			throw Error("unknown fscommand");
		}
	};

	var trace = function(msg) {
		console.log(msg);
	};

	var Script = (function() {function Script() {}

	Script.prototype["init"] = function() {
		var movie = this;
		while (movie.parent !== null)
			movie = movie.parent.lwf.rootMovie;
		_root = movie;
	};

	Script.prototype["destroy"] = function() {
		_root = null;
	};

	Script.prototype["_root_35_1"] = function() {
			this.stop();
	};

	Script.prototype["_root_35_btn_btn_press"] = function() {
				_root.gotoAndPlay(1);
	};

	return Script;

	})();

	return new Script();
};
