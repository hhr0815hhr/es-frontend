var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var core;
(function (core) {
    var Core = (function () {
        function Core() {
        }
        Core.run = function (stage) {
            egret.log("run game...");
            egret.ImageLoader.crossOrigin = 'anonymous';
            // core.FrameEventCenter.getInstance().init(stage);
            // core.LayerCenter.getInstance().init(stage);
            // RES.setMaxLoadingThread(8);
            // if (egret.Capabilities.runtimeType == egret.RuntimeType.WEB) {
            // 	core.WebUtils.addKeyboardListener();
            // 	egret.Logger.logLevel = egret.Logger.ALL;
            // }
        };
        return Core;
    }());
    core.Core = Core;
    __reflect(Core.prototype, "core.Core");
})(core || (core = {}));
