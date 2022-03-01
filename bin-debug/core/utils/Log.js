var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var core;
(function (core) {
    /**
     * Created by yangsong on 2014/11/22.
     */
    var Log = (function () {
        function Log() {
        }
        /**
         * Debug
         */
        Log.debug = function () {
            var optionalParams = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                optionalParams[_i] = arguments[_i];
            }
            if (!core.App.DebugUtils.isDebug) {
                return;
            }
            var message = "[Debug]" + optionalParams.shift();
            console.log.apply(console, [message].concat(optionalParams));
        };
        /**
         * Info
         */
        Log.info = function () {
            var optionalParams = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                optionalParams[_i] = arguments[_i];
            }
            var message = "[Info]" + optionalParams.shift();
            console.log.apply(console, [message].concat(optionalParams));
        };
        /**
         * Warn
         */
        Log.warn = function () {
            var optionalParams = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                optionalParams[_i] = arguments[_i];
            }
            var message = "[Warn]" + optionalParams.shift();
            console.warn.apply(console, [message].concat(optionalParams));
        };
        /**
         * Error
         */
        Log.error = function () {
            var optionalParams = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                optionalParams[_i] = arguments[_i];
            }
            var message = "[Error]" + optionalParams.shift();
            console.error.apply(console, [message].concat(optionalParams));
        };
        return Log;
    }());
    core.Log = Log;
    __reflect(Log.prototype, "core.Log");
})(core || (core = {}));
