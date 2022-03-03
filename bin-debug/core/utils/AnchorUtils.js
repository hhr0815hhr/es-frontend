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
     * Created by Saco on 2015/9/16.
     */
    var AnchorUtils = (function (_super) {
        __extends(AnchorUtils, _super);
        function AnchorUtils() {
            var _this = _super.call(this) || this;
            _this.init();
            return _this;
        }
        AnchorUtils.prototype.init = function () {
            this.injectAnchor();
        };
        AnchorUtils.prototype.setAnchorX = function (target, value) {
            target["anchorX"] = value;
        };
        AnchorUtils.prototype.setAnchorY = function (target, value) {
            target["anchorY"] = value;
        };
        AnchorUtils.prototype.setAnchor = function (target, value) {
            target["anchorX"] = target["anchorY"] = value;
        };
        AnchorUtils.prototype.getAnchor = function (target) {
            if (target["anchorX"] != target["anchorY"]) {
                console.log("target's anchorX != anchorY");
            }
            return target["anchorX"] || 0;
        };
        AnchorUtils.prototype.getAnchorY = function (target) {
            return target["anchorY"] || 0;
        };
        AnchorUtils.prototype.getAnchorX = function (target) {
            return target["anchorX"] || 0;
        };
        AnchorUtils.prototype.injectAnchor = function () {
            var self = this;
            Object.defineProperty(egret.DisplayObject.prototype, "width", {
                get: function () {
                    return this.$getWidth();
                },
                set: function (value) {
                    var _this = this;
                    this.$setWidth(value);
                    this._propertyChange = true;
                    egret.callLater(function () {
                        self.changeAnchor(_this);
                    }, this);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(egret.DisplayObject.prototype, "height", {
                get: function () {
                    return this.$getHeight();
                },
                set: function (value) {
                    var _this = this;
                    this.$setHeight(value);
                    this._propertyChange = true;
                    egret.callLater(function () {
                        self.changeAnchor(_this);
                    }, this);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(egret.DisplayObject.prototype, "anchorX", {
                get: function () {
                    return this._anchorX;
                },
                set: function (value) {
                    var _this = this;
                    this._anchorX = value;
                    this._propertyChange = true;
                    this._anchorChange = true;
                    egret.callLater(function () {
                        self.changeAnchor(_this);
                    }, this);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(egret.DisplayObject.prototype, "anchorY", {
                get: function () {
                    return this._anchorY;
                },
                set: function (value) {
                    var _this = this;
                    this._anchorY = value;
                    this._propertyChange = true;
                    this._anchorChange = true;
                    egret.callLater(function () {
                        self.changeAnchor(_this);
                    }, this);
                },
                enumerable: true,
                configurable: true
            });
        };
        AnchorUtils.prototype.changeAnchor = function (tar) {
            if (tar._propertyChange && tar._anchorChange) {
                if (tar._anchorX != undefined) {
                    tar.anchorOffsetX = tar._anchorX * tar.width;
                }
                if (tar._anchorY != undefined) {
                    tar.anchorOffsetY = tar._anchorY * tar.height;
                }
                delete tar._propertyChange;
            }
        };
        return AnchorUtils;
    }(core.Singleton));
    core.AnchorUtils = AnchorUtils;
    __reflect(AnchorUtils.prototype, "core.AnchorUtils");
})(core || (core = {}));
//# sourceMappingURL=AnchorUtils.js.map