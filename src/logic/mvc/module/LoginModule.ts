class LoginModule extends core.BaseController{
    private loginView:LoginView;

    private loginProxy:LoginProxy;

    public constructor(){
        super();

        this.loginProxy = new LoginProxy(this);
        //初始化UI
        this.loginView = new LoginView(this, LayerManager.UI_Main);
        // this.loginView = new LoginView(this, LayerManager.UI_Popup);
        // this.loginView = new LoginView(this, LayerManager.UI_Message);
        core.App.ViewManager.register(ViewConst.Login, this.loginView);

        //注册事件监听
        this.registerFunc(LoginProto.LOGIN_C2S, this.loginProxy.login, this.loginProxy);
        this.registerFunc(LoginProto.LOGIN_S2C, this.onLoginRes, this);

    }

    private onLoginRes():void{
        //登录成功进行的操作
        //连接游戏服务器
        core.App.Socket.connect();
        // this.loginView.setProgress(current, total);
    }


}