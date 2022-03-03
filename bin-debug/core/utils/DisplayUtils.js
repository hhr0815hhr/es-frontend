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
     * Created by yangsong on 2014/11/24.
     * 显示对象工具类
     */
    var DisplayUtils = (function (_super) {
        __extends(DisplayUtils, _super);
        /**
         * 构造函数
         */
        function DisplayUtils() {
            return _super.call(this) || this;
        }
        /**
         * 创建一个Bitmap
         * @param resName resource.json中配置的name
         * @returns {egret.Bitmap}
         */
        DisplayUtils.prototype.createBitmap = function (resName) {
            var result = new egret.Bitmap();
            var texture = RES.getRes(resName);
            result.texture = texture;
            return result;
        };
        /**
         * 创建一个textField
         * @param size;
         * @param color;
         * @param otherParam;
         */
        DisplayUtils.prototype.createTextField = function (size, color, otherParam) {
            if (size === void 0) { size = 12; }
            if (color === void 0) { color = 0xFFFFFF; }
            var txt = new egret.TextField();
            txt.size = size;
            txt.textColor = color;
            if (!otherParam)
                return txt;
            for (var key in otherParam) {
                txt[key] = otherParam[key];
            }
            return txt;
        };
        /**
         * 创建一个位图字体
         */
        DisplayUtils.prototype.createBitmapFont = function (fontName) {
            var bpFont = new egret.BitmapText();
            bpFont.font = RES.getRes(fontName);
            return bpFont;
        };
        /**
         * 创建一张Gui的图片
         * @param resName
         * @returns {egret.Bitmap}
         */
        DisplayUtils.prototype.createEuiImage = function (resName) {
            var result = new eui.Image();
            var texture = RES.getRes(resName);
            result.source = texture;
            return result;
        };
        /**
         * 从父级移除child
         * @param child
         */
        DisplayUtils.prototype.removeFromParent = function (child) {
            if (child.parent == null)
                return;
            child.parent.removeChild(child);
        };
        /**
         * 添加到指定容器
         * @param child
         * @param parent
         */
        DisplayUtils.prototype.addChild = function (child, parent) {
            if (!child || !parent)
                return;
            parent.addChild(child);
        };
        return DisplayUtils;
    }(core.Singleton));
    core.DisplayUtils = DisplayUtils;
    __reflect(DisplayUtils.prototype, "core.DisplayUtils");
})(core || (core = {}));