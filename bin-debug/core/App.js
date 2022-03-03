var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var core;
(function (core) {
    /**
     * Created by yangsong on 2014/11/22.
     */
    var App = (function () {
        function App() {
        }
        Object.defineProperty(App, "Http", {
            /**
             * Http请求
             * @type {Http}
             */
            get: function () {
                return core.Http.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "Socket", {
            /**
             * Socket请求
             * @type {null}
             */
            get: function () {
                return core.Socket.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "ControllerManager", {
            /**
             * 模块管理类
             * @type {ControllerManager}
             */
            get: function () {
                return core.ControllerManager.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "ViewManager", {
            /**
             * View管理类
             * @type {ViewManager}
             */
            get: function () {
                return core.ViewManager.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "SceneManager", {
            /**
             * 场景管理类
             * @type {SceneManager}
             */
            get: function () {
                return core.SceneManager.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "DebugUtils", {
            /**
             * 调试工具
             * @type {DebugUtils}
             */
            get: function () {
                return core.DebugUtils.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "MessageCenter", {
            /**
             * 服务器返回的消息处理中心
             * @type {MessageCenter}
             */
            get: function () {
                return core.MessageCenter.getSingtonInstance(0);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "TimerManager", {
            /**
             * 统一的计时器和帧刷管理类
             * @type {TimerManager}
             */
            get: function () {
                return core.TimerManager.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "DateUtils", {
            /**
             * 日期工具类
             * @type {DateUtils}
             */
            get: function () {
                return core.DateUtils.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "MathUtils", {
            /**
             * 数学计算工具类
             * @type {MathUtils}
             */
            get: function () {
                return core.MathUtils.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "RandomUtils", {
            /**
             * 随机数工具类
             * @type {RandomUtils}
             */
            get: function () {
                return core.RandomUtils.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "DisplayUtils", {
            /**
             * 显示对象工具类
             * @type {DisplayUtils}
             */
            get: function () {
                return core.DisplayUtils.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "BitmapNumber", {
            /*
            * 图片合成数字工具类
            * */
            get: function () {
                return core.BitmapNumber.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "GuideUtils", {
            /**
             * 引导工具类
             */
            get: function () {
                return core.GuideUtils.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "StageUtils", {
            /**
             * Stage操作相关工具类
             */
            get: function () {
                return core.StageUtils.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "EffectUtils", {
            /**
             * Effect工具类
             */
            get: function () {
                return core.EffectUtils.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "StringUtils", {
            /**
             * 字符串工具类
             */
            get: function () {
                return core.StringUtils.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "CommonUtils", {
            /**
             * 通过工具类
             */
            get: function () {
                return core.CommonUtils.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "SoundManager", {
            /**
             * 音乐管理类
             */
            get: function () {
                return core.SoundManager.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "DeviceUtils", {
            /**
             * 设备工具类
             */
            get: function () {
                return core.DeviceUtils.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "EgretExpandUtils", {
            /**
             * 引擎扩展类
             */
            get: function () {
                return core.EgretExpandUtils.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "KeyboardUtils", {
            /**
             * 键盘操作工具类
             */
            get: function () {
                return core.KeyboardUtils.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "RockerUtils", {
            /**
             * 摇杆操作工具类
             */
            get: function () {
                return core.RockerUtils.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "ShockUtils", {
            /**
             * 震动类
             */
            get: function () {
                return core.ShockUtils.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "ResourceUtils", {
            /**
             * 资源加载工具类
             */
            get: function () {
                return core.ResourceUtils.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "RenderTextureManager", {
            /**
             * RenderTextureManager
             */
            get: function () {
                return core.RenderTextureManager.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "TextFlowMaker", {
            /**
             * TextFlow
             */
            get: function () {
                return core.TextFlowMaker.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "NotificationCenter", {
            get: function () {
                if (App._notificationCenter == null) {
                    App._notificationCenter = new core.MessageCenter(1);
                }
                return App._notificationCenter;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "DelayOptManager", {
            /**
             * 分帧处理类
             * @returns {any}
             * @constructor
             */
            get: function () {
                return core.DelayOptManager.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "ArrayUtils", {
            /**
             * 数组工具类
             * @returns {any}
             * @constructor
             */
            get: function () {
                return core.ArrayUtils.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "EasyLoading", {
            /**
             * 通用Loading动画
             * @returns {any}
             * @constructor
             */
            get: function () {
                return core.EasyLoading.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "StarlingSwfFactory", {
            // /**
            //  * DragonBones工厂类
            //  * @returns {any}
            //  * @constructor
            //  */
            // public static get DragonBonesFactory(): DragonBonesFactory {
            //     return DragonBonesFactory.getSingtonInstance();
            // }
            /**
             * StarlingSwf工厂类
             * @returns {StarlingSwfFactory}
             * @constructor
             */
            get: function () {
                return core.StarlingSwfFactory.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "AnchorUtils", {
            /**
             * AnchorUtils工具类
             */
            get: function () {
                return core.AnchorUtils.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "TouchEventHook", {
            /**
             * hack引擎的Touch事件
             */
            get: function () {
                return core.TouchEventHook.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "LocationPropertyUtils", {
            /**
             * H5地址栏参数操作工作类
             */
            get: function () {
                return core.LocationPropertyUtils.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "TweenUtils", {
            /**
             * Tween工具类
             */
            get: function () {
                return core.TweenUtils.getSingtonInstance();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 初始化函数
         * @constructor
         */
        App.Init = function () {
            console.log("当前引擎版本: ", egret.Capabilities.engineVersion);
            //全局配置数据
            App.GlobalData = RES.getRes("global");
            //开启调试
            App.DebugUtils.isOpen(App.GlobalData.IsDebug);
            App.DebugUtils.setThreshold(5);
            //扩展功能初始化
            App.EgretExpandUtils.init();
            //实例化Http请求
            App.Http.initServer(App.GlobalData.HttpSerever);
            //实例化ProtoBuf和Socket请求
            App.ProtoConfig = RES.getRes(App.GlobalData.ProtoConfig);
            App.Socket.initServer(App.GlobalData.SocketServer, App.GlobalData.SocketPort, new core.ByteArrayMsgByProtobuf());
        };
        /**
         * 请求服务器使用的用户标识
         * @type {string}
         */
        App.ProxyUserFlag = "";
        /**
         * 全局配置数据
         * @type {null}
         */
        App.GlobalData = null;
        /**
         * ProtoConfig
         * @type {null}
         */
        App.ProtoConfig = null;
        return App;
    }());
    core.App = App;
    __reflect(App.prototype, "core.App");
})(core || (core = {}));
