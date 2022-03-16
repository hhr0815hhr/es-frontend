class Game{
    public constructor()
    {
        //加载资源
        let groupName:string = "preload_login";
        core.App.ResourceUtils.loadGroup(groupName,this.onResourceLoadComplete,this.onResourceLoadProgress,this);
    }


    private onResourceLoadComplete():void
    {
        this.initModule();
        core.App.Init();

        //音效
        core.App.SoundManager.setBgOn(true);
        core.App.SoundManager.setEffectOn(true);

        //进入场景
        core.App.SceneManager.runScene(SceneConst.Login);

    }

    private initModule():void
    {
        core.App.ModuleManager.register(ModuleConst.Login,new LoginModule());
    }

    private onResourceLoadProgress(itemsLoaded:number,itemsTotal:number):void
    {
        core.App.ModuleManager.applyFunc(ModuleConst.Loading,LoadingProto.SetProgress,itemsLoaded,itemsTotal);
    }
}