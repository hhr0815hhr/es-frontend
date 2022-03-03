class Main extends eui.UILayer {

    protected createChildren(): void {
        super.createChildren();
        egret.registerImplementation("eui.IAssetAdapter", new core.AssetAdapter());
        egret.registerImplementation("eui.IThemeAdapter", new core.ThemeAdapter());

        core.App.StageUtils.startFullscreenAdaptation(650,1000,this.onResize1);

        //初始化生命周期
        this.initLifecycle();
        //初始化所有场景
        this.initScene();

        //加载资源配置文件
        this.loadResConfig();

        this.runGame().catch(e => {
            console.log(e);
        })
    }
    private initLifecycle(): void {
        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
            core.App.TimerManager.pause();
            core.App.TweenUtils.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
            core.App.TimerManager.resume();
            core.App.TweenUtils.resume();
        }
    }
    /**
     * 初始化所有场景
     */
    private initScene(): void {
        core.App.SceneManager.register(SceneConst.LOADING, new LoadingScene());
        core.App.SceneManager.register(SceneConst.UI, new UIScene());
        // core.App.SceneManager.register(SceneConst.Game, new GameScene());
        // core.App.SceneManager.register(SceneConst.RpgGame, new RpgGameScene());
    }
    
    private onResize1(): void {
        // core.App.ControllerManager.applyFunc(ControllerConst.RpgGame, RpgGameConst.GameResize);
    }


    private loadResConfig(): void {
        //初始化Resource资源加载库
        core.App.ResourceUtils.addConfig("resource/default.res.json", "resource/");
        core.App.ResourceUtils.addConfig("resource/resource_core.res.json", "resource/");
        core.App.ResourceUtils.addConfig("resource/resource_ui.res.json", "resource/");
        core.App.ResourceUtils.addConfig("resource/resource_battle.res.json", "resource/");
        core.App.ResourceUtils.addConfig("resource/resource_rpg.res.json", "resource/");
        core.App.ResourceUtils.loadConfig(this.onConfigComplete, this);
    }

    /**
     * 配置文件加载完成,开始预加载preload资源组。
     */
     private onConfigComplete() {
        //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        let theme = new eui.Theme("resource/default.thm.json", this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);
    }

    /**
     * 主题文件加载完成
     */
     private onThemeLoadComplete(): void {
        //模块初始化
        this.initModule();

        //设置加载进度界面
        core.App.SceneManager.runScene(SceneConst.LOADING);

        //开启游戏
        // new RpgTest();
        // new ProtoBufTest();
        // new EUITest();
    }

    private initModule(): void {
        core.App.ModuleManager.register(ModuleConst.Loading, new LoadingModule());//加载中模块
    }

    











    
    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        const result = await RES.getResAsync("description_json")

        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);

    }

    /**
     * 创建场景界面
     * Create scene interface
     */
    protected createGameScene(): void {

    }















    
    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await this.loadTheme();
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise<void>((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

}
