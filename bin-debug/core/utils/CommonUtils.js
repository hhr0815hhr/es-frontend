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
     * Created by yangsong on 15-1-12.
     * 通用工具类
     */
    var CommonUtils = (function (_super) {
        __extends(CommonUtils, _super);
        function CommonUtils() {
            var _this = _super.call(this) || this;
            /**
             * 万字的显示
             * @param label
             * @param num
             */
            _this.labelIsOverLenght = function (label, num) {
                var str = null;
                if (num < 100000) {
                    str = num;
                }
                else if (num < 1000000) {
                    str = Math.floor(num / 1000 / 10).toString() + "万";
                }
                else {
                    str = Math.floor(num / 10000).toString() + "万";
                }
                label.text = str;
            };
            return _this;
        }
        /**
         * 给字体添加描边
         * @param lable      文字
         * @param color      表示文本的描边颜色
         * @param width      描边宽度。
         */
        CommonUtils.prototype.addLableStrokeColor = function (lable, color, width) {
            lable.strokeColor = color;
            lable.stroke = width;
        };
        /**
         * 深度复制
         * @param _data
         */
        CommonUtils.prototype.copyDataHandler = function (obj) {
            var newObj;
            if (obj instanceof Array) {
                newObj = [];
            }
            else if (obj instanceof Object) {
                newObj = {};
            }
            else {
                return obj;
            }
            var keys = Object.keys(obj);
            for (var i = 0, len = keys.length; i < len; i++) {
                var key = keys[i];
                newObj[key] = this.copyDataHandler(obj[key]);
            }
            return newObj;
        };
        /**
         * 锁屏
         */
        CommonUtils.prototype.lock = function () {
            core.App.StageUtils.setTouchChildren(false);
        };
        /**
         * 解屏
         */
        CommonUtils.prototype.unlock = function () {
            core.App.StageUtils.setTouchChildren(true);
        };
        /**
         * int64转number
         * @param obj
         * @returns {number}
         */
        CommonUtils.prototype.int64ToNumber = function (obj) {
            return parseInt(obj.toString());
        };
        return CommonUtils;
    }(core.Singleton));
    core.CommonUtils = CommonUtils;
    __reflect(CommonUtils.prototype, "core.CommonUtils");
})(core || (core = {}));
//# sourceMappingURL=CommonUtils.js.map