var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var core;
(function (core) {
    /**
     * Tween工具类
     */
    var TweenUtils = (function (_super) {
        __extends(TweenUtils, _super);
        function TweenUtils() {
            return _super.call(this) || this;
        }
        /**
         * 暂停所有的Tween
         */
        TweenUtils.prototype.pause = function () {
            var tweens = egret.Tween["_tweens"];
            for (var i = 0, l = tweens.length; i < l; i++) {
                var tween_2 = tweens[i];
                tween_2.paused = true;
            }
        };
        /**
         * 从暂停中恢复
         */
        TweenUtils.prototype.resume = function () {
            var tweens = egret.Tween["_tweens"];
            for (var i = 0, l = tweens.length; i < l; i++) {
                var tween_2 = tweens[i];
                tween_2.paused = false;
            }
        };
        return TweenUtils;
    }(core.Singleton));
    core.TweenUtils = TweenUtils;
    __reflect(TweenUtils.prototype, "core.TweenUtils");
})(core || (core = {}));
//# sourceMappingURL=TweenUtils.js.map