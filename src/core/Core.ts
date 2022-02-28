module core {
    export class Core {
        public constructor() {
		}

        public static run(stage: egret.Stage): void {
			egret.log(`run game...`);
			egret.ImageLoader.crossOrigin = 'anonymous';
			// core.FrameEventCenter.getInstance().init(stage);
			// core.LayerCenter.getInstance().init(stage);
			// RES.setMaxLoadingThread(8);
			// if (egret.Capabilities.runtimeType == egret.RuntimeType.WEB) {
			// 	core.WebUtils.addKeyboardListener();
			// 	egret.Logger.logLevel = egret.Logger.ALL;
			// }
		}
    }
}