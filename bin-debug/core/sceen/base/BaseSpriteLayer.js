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
     * Created by yangsong on 15-1-7.
     */
    var BaseSpriteLayer = (function (_super) {
        __extends(BaseSpriteLayer, _super);
        function BaseSpriteLayer() {
            var _this = _super.call(this) || this;
            _this.touchEnabled = false;
            return _this;
        }
        return BaseSpriteLayer;
    }(egret.DisplayObjectContainer));
    core.BaseSpriteLayer = BaseSpriteLayer;
    __reflect(BaseSpriteLayer.prototype, "core.BaseSpriteLayer");
})(core || (core = {}));
//# sourceMappingURL=BaseSpriteLayer.js.map