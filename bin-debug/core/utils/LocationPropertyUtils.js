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
     * Created by Saco on 2014/12/1.
     */
    var LocationPropertyUtils = (function (_super) {
        __extends(LocationPropertyUtils, _super);
        function LocationPropertyUtils() {
            return _super.call(this) || this;
        }
        /*
        * 获取url参数值，没有返回null
        * 不传递paraUrl参数默认获取当前url
        * */
        LocationPropertyUtils.prototype.getPara = function (paraName, paraUrl) {
            if (egret.Capabilities.runtimeType != egret.RuntimeType.WEB) {
                return null;
            }
            var url = paraUrl || location.href;
            if (url.indexOf("?") != -1) {
                var urlPara = "&" + url.split("?")[1];
                var reg = new RegExp("\&" + paraName + "\=.*?(?:\&|$)");
                var result = reg.exec(urlPara);
                if (result) {
                    var value = result[0];
                    return value.split("&")[1].split("=")[1];
                }
            }
            return null;
        };
        /*
        * 给Url参数赋值
        * 不传递paraUrl参数默认获取当前url
        * */
        LocationPropertyUtils.prototype.setProperty = function (paraName, paraValue, paraUrl) {
            var url = paraUrl || location.href;
            var urlPara = "&" + url.split("?")[1];
            if (url.indexOf("?") == -1) {
                return url += "?" + paraName + "=" + paraValue;
            }
            else {
                var urlPara = url.split("?")[1];
                if (urlPara == "")
                    return url += paraName + "=" + paraValue;
                var regParaKV = new RegExp("(?:^|\&)" + paraName + "\=.*?(?:\&|$)");
                var result = regParaKV.exec(urlPara);
                if (!result || result[0] == "") {
                    return url += "&" + paraName + "=" + paraValue;
                }
                else {
                    var oldValue = result[0];
                    var regParaKey = new RegExp("\=.*$");
                    var newValue = oldValue.replace(regParaKey, "=" + paraValue);
                    return url.replace(oldValue, newValue);
                }
            }
        };
        /*
        * 检查url中是否包含某参数
        * 这代码有一个例外就是paraName = "undefined", paraUrl中不含"?"会返回true
        * 相信你不会这么用的 =.=
        * */
        LocationPropertyUtils.prototype.hasProperty = function (paraName, paraUrl) {
            var url = paraUrl || location.href;
            var para = "&" + url.split("?")[1]; //加&是为了把&作为参数名开始=作为参数名结束，防止uid=1&id=2此类误判
            return para.indexOf("&" + paraName + "=") != -1;
        };
        return LocationPropertyUtils;
    }(core.Singleton));
    core.LocationPropertyUtils = LocationPropertyUtils;
    __reflect(LocationPropertyUtils.prototype, "core.LocationPropertyUtils");
})(core || (core = {}));
