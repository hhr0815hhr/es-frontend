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
     * Created by yangsong on 2014/11/23.
     * Timer管理器
     */
    var TimerManager = (function (_super) {
        __extends(TimerManager, _super);
        /**
         * 构造函数
         */
        function TimerManager() {
            var _this = _super.call(this) || this;
            _this._handlers = new Array();
            _this._delHandlers = new Array();
            _this._currTime = egret.getTimer();
            _this._currFrame = 0;
            _this._count = 0;
            _this._timeScale = 1;
            egret.Ticker.getInstance().register(_this.onEnterFrame, _this);
            return _this;
        }
        /**
         * 设置时间参数
         * @param timeScale
         */
        TimerManager.prototype.setTimeScale = function (timeScale) {
            this._timeScale = timeScale;
        };
        /**
         * 每帧执行函数
         * @param frameTime
         */
        TimerManager.prototype.onEnterFrame = function () {
            if (this._isPause) {
                return;
            }
            this._currFrame++;
            this._currTime = egret.getTimer();
            core.App.DebugUtils.start("TimerManager:");
            while (this._delHandlers.length) {
                this.removeHandle(this._delHandlers.pop());
            }
            for (var i = 0; i < this._count; i++) {
                var handler = this._handlers[i];
                if (this._delHandlers.indexOf(handler) != -1) {
                    continue;
                }
                var t = handler.userFrame ? this._currFrame : this._currTime;
                if (t >= handler.exeTime) {
                    core.App.DebugUtils.start(handler.method.toString());
                    handler.method.call(handler.methodObj, (this._currTime - handler.dealTime) * this._timeScale);
                    core.App.DebugUtils.stop(handler.method.toString());
                    handler.dealTime = this._currTime;
                    handler.exeTime += handler.delay;
                    if (!handler.repeat) {
                        if (handler.repeatCount > 1) {
                            handler.repeatCount--;
                        }
                        else {
                            if (handler.complateMethod) {
                                handler.complateMethod.apply(handler.complateMethodObj);
                            }
                            if (this._delHandlers.indexOf(handler) == -1) {
                                this._delHandlers.push(handler);
                            }
                        }
                    }
                }
            }
            core.App.DebugUtils.stop("TimerManager:");
        };
        TimerManager.prototype.removeHandle = function (handler) {
            var i = this._handlers.indexOf(handler);
            if (i == -1) {
                core.Log.warn("what????");
                return;
            }
            this._handlers.splice(i, 1);
            core.ObjectPool.push(handler);
            this._count--;
        };
        TimerManager.prototype.create = function (useFrame, delay, repeatCount, method, methodObj, complateMethod, complateMethodObj) {
            //参数监测
            if (delay < 0 || repeatCount < 0 || method == null) {
                return;
            }
            //先删除相同函数的计时
            this.remove(method, methodObj);
            //创建
            var handler = core.ObjectPool.pop("TimerHandler");
            handler.userFrame = useFrame;
            handler.repeat = repeatCount == 0;
            handler.repeatCount = repeatCount;
            handler.delay = delay;
            handler.method = method;
            handler.methodObj = methodObj;
            handler.complateMethod = complateMethod;
            handler.complateMethodObj = complateMethodObj;
            handler.exeTime = delay + (useFrame ? this._currFrame : this._currTime);
            handler.dealTime = this._currTime;
            this._handlers.push(handler);
            this._count++;
        };
        /**
         * 在指定的延迟（以毫秒为单位）后运行指定的函数。
         * @param delay 执行间隔:毫秒
         * @param method 执行函数
         * @param methodObj 执行函数所属对象
         */
        TimerManager.prototype.setTimeOut = function (delay, method, methodObj) {
            this.doTimer(delay, 1, method, methodObj);
        };
        /**
         * 在指定的帧后运行指定的函数。
         * @param delay 执行间隔:帧频
         * @param method 执行函数
         * @param methodObj 执行函数所属对象
         */
        TimerManager.prototype.setFrameOut = function (delay, method, methodObj) {
            this.doFrame(delay, 1, method, methodObj);
        };
        /**
         *
         * 定时执行
         * @param delay 执行间隔:毫秒
         * @param repeatCount 执行次数, 0为无限次
         * @param method 执行函数
         * @param methodObj 执行函数所属对象
         * @param complateMethod 完成执行函数
         * @param complateMethodObj 完成执行函数所属对象
         *
         */
        TimerManager.prototype.doTimer = function (delay, repeatCount, method, methodObj, complateMethod, complateMethodObj) {
            if (complateMethod === void 0) { complateMethod = null; }
            if (complateMethodObj === void 0) { complateMethodObj = null; }
            this.create(false, delay, repeatCount, method, methodObj, complateMethod, complateMethodObj);
        };
        /**
         *
         * 定时执行
         * @param delay 执行间隔:帧频
         * @param repeatCount 执行次数, 0为无限次
         * @param method 执行函数
         * @param methodObj 执行函数所属对象
         * @param complateMethod 完成执行函数
         * @param complateMethodObj 完成执行函数所属对象
         *
         */
        TimerManager.prototype.doFrame = function (delay, repeatCount, method, methodObj, complateMethod, complateMethodObj) {
            if (complateMethod === void 0) { complateMethod = null; }
            if (complateMethodObj === void 0) { complateMethodObj = null; }
            this.create(true, delay, repeatCount, method, methodObj, complateMethod, complateMethodObj);
        };
        Object.defineProperty(TimerManager.prototype, "count", {
            /**
             * 定时器执行数量
             * @return
             *
             */
            get: function () {
                return this._count;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 清理
         * @param method 要移除的函数
         * @param methodObj 要移除的函数对应的对象
         */
        TimerManager.prototype.remove = function (method, methodObj) {
            for (var i = 0; i < this._count; i++) {
                var handler = this._handlers[i];
                if (handler.method == method && handler.methodObj == methodObj && this._delHandlers.indexOf(handler) == -1) {
                    this._delHandlers.push(handler);
                    break;
                }
            }
        };
        /**
         * 清理
         * @param methodObj 要移除的函数对应的对象
         */
        TimerManager.prototype.removeAll = function (methodObj) {
            for (var i = 0; i < this._count; i++) {
                var handler = this._handlers[i];
                if (handler.methodObj == methodObj && this._delHandlers.indexOf(handler) == -1) {
                    this._delHandlers.push(handler);
                }
            }
        };
        /**
         * 检测是否已经存在
         * @param method
         * @param methodObj
         *
         */
        TimerManager.prototype.isExists = function (method, methodObj) {
            for (var i = 0; i < this._count; i++) {
                var handler = this._handlers[i];
                if (handler.method == method && handler.methodObj == methodObj && this._delHandlers.indexOf(handler) == -1) {
                    return true;
                }
            }
            return false;
        };
        /**
         * 暂停
         */
        TimerManager.prototype.pause = function () {
            if (this._isPause) {
                return;
            }
            this._isPause = true;
            this._pauseTime = egret.getTimer();
        };
        /**
         * 从暂停中恢复
         */
        TimerManager.prototype.resume = function () {
            if (!this._isPause) {
                return;
            }
            this._isPause = false;
            this._currTime = egret.getTimer();
            var gap = this._currTime - this._pauseTime;
            for (var i = 0; i < this._count; i++) {
                var handler = this._handlers[i];
                handler.dealTime += gap;
                if (!handler.userFrame) {
                    handler.exeTime += gap;
                }
            }
        };
        return TimerManager;
    }(core.Singleton));
    core.TimerManager = TimerManager;
    __reflect(TimerManager.prototype, "core.TimerManager");
    var TimerHandler = (function () {
        function TimerHandler() {
            /**执行间隔*/
            this.delay = 0;
            /**重复执行次数*/
            this.repeatCount = 0;
            /**执行时间*/
            this.exeTime = 0;
            /**上次的执行时间*/
            this.dealTime = 0;
        }
        /**清理*/
        TimerHandler.prototype.clear = function () {
            this.method = null;
            this.methodObj = null;
            this.complateMethod = null;
            this.complateMethodObj = null;
        };
        return TimerHandler;
    }());
    core.TimerHandler = TimerHandler;
    __reflect(TimerHandler.prototype, "core.TimerHandler");
})(core || (core = {}));
//# sourceMappingURL=TimerManager.js.map