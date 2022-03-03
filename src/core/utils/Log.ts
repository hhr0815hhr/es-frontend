module core {
    /**
     * Created by yangsong on 2014/11/22.
     */
    export class Log {
        /**
         * Debug
         */
        public static debug(...optionalParams): void {
            if (!App.DebugUtils.isDebug) {
                return;
            }
            let message = "[Debug]" + optionalParams.shift();
            egret.log(message, ...optionalParams);
        }

        /**
         * Info
         */
        public static info(...optionalParams): void {
            let message = "[Info]" + optionalParams.shift();
            egret.log(message, ...optionalParams);
        }

        /**
         * Warn
         */
        public static warn(...optionalParams): void {
            let message = "[Warn]" + optionalParams.shift();
            egret.warn(message, ...optionalParams);
        }

        /**
         * Error
         */
        public static error(...optionalParams): void {
            let message = "[Error]" + optionalParams.shift();
            egret.error(message, ...optionalParams);
        }
    }
}