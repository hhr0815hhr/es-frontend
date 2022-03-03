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
     * Created by yangsong on 2014/12/3.
     * Stage相关工具类
     */
    var StageUtils = (function (_super) {
        __extends(StageUtils, _super);
        /**
         * 构造函数
         */
        function StageUtils() {
            return _super.call(this) || this;
        }
        /**
         * 获取游戏的高度
         * @returns {number}
         */
        StageUtils.prototype.getHeight = function () {
            return this.getStage().stageHeight;
        };
        /**
         * 获取游戏宽度
         * @returns {number}
         */
        StageUtils.prototype.getWidth = function () {
            return this.getStage().stageWidth;
        };
        /**
         * 指定此对象的子项以及子孙项是否接收鼠标/触摸事件
         * @param value
         */
        StageUtils.prototype.setTouchChildren = function (value) {
            this.getStage().touchChildren = value;
        };
        /**
         * 设置同时可触发几个点击事件，默认为2
         * @param value
         */
        StageUtils.prototype.setMaxTouches = function (value) {
            this.getStage().maxTouches = value;
        };
        /**
         * 设置帧频
         * @param value
         */
        StageUtils.prototype.setFrameRate = function (value) {
            this.getStage().frameRate = value;
        };
        /**
         * 设置适配方式
         * @param value
         */
        StageUtils.prototype.setScaleMode = function (value) {
            this.getStage().scaleMode = value;
        };
        /**
         * 获取游戏Stage对象
         * @returns {egret.MainContext}
         */
        StageUtils.prototype.getStage = function () {
            return egret.MainContext.instance.stage;
        };
        StageUtils.prototype.startFullscreenAdaptation = function (designWidth, designHeight, resizeCallback) {
            this.designWidth = designWidth;
            this.designHeight = designHeight;
            this.resizeCallback = resizeCallback;
            this.stageOnResize();
        };
        StageUtils.prototype.stageOnResize = function () {
            this.getStage().removeEventListener(egret.Event.RESIZE, this.stageOnResize, this);
            var designWidth = this.designWidth;
            var designHeight = this.designHeight;
            var clientWidth = window.innerWidth;
            var clientHeight = window.innerHeight;
            var a = clientWidth / clientHeight;
            var b = designWidth / designHeight;
            var c = a / b;
            if (a > b) {
                var c1 = c;
                var c2 = c;
                designWidth = Math.floor(designWidth * c1);
                designHeight = Math.floor(designHeight * c2);
            }
            this.getStage().setContentSize(designWidth, designHeight);
            // console.log(a, b, c);
            // console.log(designWidth, designHeight);
            this.resizeCallback && this.resizeCallback();
            this.getStage().addEventListener(egret.Event.RESIZE, this.stageOnResize, this);
        };
        return StageUtils;
    }(core.Singleton));
    core.StageUtils = StageUtils;
    __reflect(StageUtils.prototype, "core.StageUtils");
})(core || (core = {}));
//# sourceMappingURL=StageUtils.js.map