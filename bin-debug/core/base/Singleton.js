var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var core;
(function (core) {
    var Singleton = (function () {
        function Singleton() {
        }
        Singleton.getSingtonInstance = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            var Class = this;
            if (!Class._instance) {
                Class._instance = new (Class.bind.apply(Class, [void 0].concat(params)))();
            }
            return Class._instance;
        };
        return Singleton;
    }());
    core.Singleton = Singleton;
    __reflect(Singleton.prototype, "core.Singleton");
})(core || (core = {}));
