class LoadingModule extends core.BaseController{
    private loadingView:LoadingView;

    public constructor(){
        super();

        //初始化UI
        this.loadingView = new LoadingView(this, LayerManager.UI_Main);
        core.App.ViewManager.register(ViewConst.Loading, this.loadingView);

        //注册事件监听
        this.registerFunc(LoadingProto.SetProgress, this.setProgress, this);
    }

    private setProgress(current:number, total:number):void{
        this.loadingView.setProgress(current, total);
    }


}