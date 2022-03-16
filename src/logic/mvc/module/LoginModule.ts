class LoginModule extends core.BaseController{
    private loginView:LoginView;

    public constructor(){
        super();

        //初始化UI
        this.loginView = new LoginView(this, LayerManager.UI_Main);
        // this.loginView = new LoginView(this, LayerManager.UI_Popup);
        // this.loginView = new LoginView(this, LayerManager.UI_Message);
        core.App.ViewManager.register(ViewConst.Login, this.loginView);

        //注册事件监听
        this.registerFunc(LoginProto.LOGIN_S2C, this.onLoginRes, this);
    }

    private onLoginRes():void{
        // this.loginView.setProgress(current, total);
    }


}