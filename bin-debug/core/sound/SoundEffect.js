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
     * Created by yangsong on 15-1-14.
     * 音效类
     */
    var SoundEffect = (function (_super) {
        __extends(SoundEffect, _super);
        /**
         * 构造函数
         */
        function SoundEffect() {
            var _this = _super.call(this) || this;
            _this._soundLoops = {};
            _this._soundChannels = {};
            return _this;
        }
        /**
         * 播放一个音效
         * @param effectName
         */
        SoundEffect.prototype.play = function (effectName, loops) {
            var sound = this.getSound(effectName);
            if (sound) {
                this.playSound(effectName, sound, loops);
            }
            else {
                this._soundLoops[effectName] = loops;
            }
        };
        /**
         * 播放
         * @param sound
         */
        SoundEffect.prototype.playSound = function (effectName, sound, loops) {
            var channel = sound.play(0, loops);
            channel.volume = this._volume;
            channel["name"] = effectName;
            channel.addEventListener(egret.Event.SOUND_COMPLETE, this.onPlayComplete, this);
            this._soundChannels[channel["name"]] = channel;
        };
        /**
         * 播放完成
         */
        SoundEffect.prototype.onPlayComplete = function (e) {
            var channel = e.currentTarget;
            this.destroyChannel(channel);
        };
        /**
         * 销毁channel
         */
        SoundEffect.prototype.destroyChannel = function (channel) {
            channel.stop();
            channel.removeEventListener(egret.Event.SOUND_COMPLETE, this.onPlayComplete, this);
            delete this._soundChannels[channel["name"]];
        };
        /**
         * 播放一个音效
         * @param effectName
         */
        SoundEffect.prototype.stop = function (effectName) {
            var channel = this._soundChannels[effectName];
            if (channel) {
                this.destroyChannel(channel);
            }
        };
        /**
         * 设置音量
         * @param volume
         */
        SoundEffect.prototype.setVolume = function (volume) {
            this._volume = volume;
        };
        /**
         * 资源加载完成后处理播放
         * @param key
         */
        SoundEffect.prototype.loadedPlay = function (key) {
            this.playSound(key, RES.getRes(key), this._soundLoops[key]);
            delete this._soundLoops[key];
        };
        return SoundEffect;
    }(core.BaseSound));
    core.SoundEffect = SoundEffect;
    __reflect(SoundEffect.prototype, "core.SoundEffect", ["core.ISoundEffect"]);
})(core || (core = {}));
//# sourceMappingURL=SoundEffect.js.map