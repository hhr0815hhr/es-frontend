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
     * Created by Saco on 2015/1/14.
     * hack引擎的点击事件
     */
    var TouchEventHook = (function (_super) {
        __extends(TouchEventHook, _super);
        function TouchEventHook() {
            var _this = _super.call(this) || this;
            _this._eventCallDic = {};
            return _this;
        }
        Object.defineProperty(TouchEventHook.prototype, "systemTouch", {
            get: function () {
                return egret.sys.$TempStage.$screen["webTouchHandler"].touch;
            },
            enumerable: true,
            configurable: true
        });
        /*
        * eventType:绑定事件类型，TOUCH_BEGIN、TOUCH_MOVE、TOUCH_END
        * bindCall:接受参数为点击事件的坐标x,y,identifier
        * */
        TouchEventHook.prototype.hookTouchEvent = function (eventType, bindCall) {
            if (!this._eventCallDic.hasOwnProperty(eventType)) {
                this.restoreEvent(eventType);
            }
            switch (eventType) {
                case egret.TouchEvent.TOUCH_BEGIN: {
                    this.systemTouch.onTouchBegan = bindCall;
                    break;
                }
                case egret.TouchEvent.TOUCH_MOVE: {
                    this.systemTouch.onTouchMove = bindCall;
                    break;
                }
                case egret.TouchEvent.TOUCH_END: {
                    this.systemTouch.onTouchEnd = bindCall;
                    break;
                }
            }
        };
        TouchEventHook.prototype.restoreEvent = function (eventType) {
            switch (eventType) {
                case egret.TouchEvent.TOUCH_BEGIN: {
                    this._eventCallDic[eventType] = this.systemTouch.onTouchBegan;
                    break;
                }
                case egret.TouchEvent.TOUCH_MOVE: {
                    this._eventCallDic[eventType] = this.systemTouch.onTouchMove;
                    break;
                }
                case egret.TouchEvent.TOUCH_END: {
                    this._eventCallDic[eventType] = this.systemTouch.onTouchEnd;
                    break;
                }
            }
        };
        /*
        * 释放绑定的点击事件
        * eventType:绑定事件类型，TOUCH_BEGIN、TOUCH_MOVE、TOUCH_END
        */
        TouchEventHook.prototype.releaseTouchEvent = function (eventType) {
            switch (eventType) {
                case egret.TouchEvent.TOUCH_BEGIN: {
                    this.systemTouch.onTouchBegan = this._eventCallDic[eventType];
                    break;
                }
                case egret.TouchEvent.TOUCH_MOVE: {
                    this.systemTouch.onTouchMove = this._eventCallDic[eventType];
                    break;
                }
                case egret.TouchEvent.TOUCH_END: {
                    this.systemTouch.onTouchEnd = this._eventCallDic[eventType];
                    break;
                }
            }
        };
        return TouchEventHook;
    }(core.Singleton));
    core.TouchEventHook = TouchEventHook;
    __reflect(TouchEventHook.prototype, "core.TouchEventHook");
})(core || (core = {}));
