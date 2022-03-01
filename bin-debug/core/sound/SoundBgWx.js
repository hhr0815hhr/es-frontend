var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var core;
(function (core) {
    /**
     * Created by yangsong on 18-12-26.
     * 音效类(微信小游戏专用)
     */
    var SoundBgWx = (function () {
        /**
         * 构造函数
         */
        function SoundBgWx() {
            this._audio = window["wx"].createInnerAudioContext();
            this._currBg = "";
        }
        /**
         * 停止当前音乐
         */
        SoundBgWx.prototype.stop = function () {
            this._audio.stop();
            this._currBg = "";
        };
        /**
         * 播放某个音乐
         * @param bgName
         */
        SoundBgWx.prototype.play = function (bgName) {
            if (this._currBg == bgName) {
                return;
            }
            this.stop();
            this._currBg = bgName;
            this._audio.src = core.App.ResourceUtils.getFileRealPath(this._currBg);
            this._audio.loop = true;
            this._audio.volume = this._volume;
            this._audio.startTime = 0;
            this._audio.play();
        };
        /**
         * 暂停
         */
        SoundBgWx.prototype.pause = function () {
            if (this._currBg.length == 0) {
                return;
            }
            this._audio.pause();
        };
        /**
         * 恢复
         */
        SoundBgWx.prototype.resume = function () {
            if (this._currBg.length == 0) {
                return;
            }
            this._audio.play();
        };
        /**
         * 设置音量
         * @param volume
         */
        SoundBgWx.prototype.setVolume = function (volume) {
            this._volume = volume;
            if (this._audio) {
                this._audio.volume = this._volume;
            }
        };
        return SoundBgWx;
    }());
    core.SoundBgWx = SoundBgWx;
    __reflect(SoundBgWx.prototype, "core.SoundBgWx", ["core.ISoundBg"]);
})(core || (core = {}));
