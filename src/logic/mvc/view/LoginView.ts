class LoginView extends core.BaseEuiView {
    public constructor($controller:core.BaseController, $parent:eui.Group){
        super($controller, $parent);

        this.skinName = "resource/skins/LoginUISkin.exml";
    }

    /**
     *对面板进行显示初始化，用于子类继承
     *
     */
    public initUI():void{
        super.initUI();
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLogin, this);
    }

    /**
     *对面板数据的初始化，用于子类继承
     *
     */
    public initData():void{
        super.initData();
    }

    /**
     * 面板开启执行函数，用于子类继承
     * @param param 参数
     */
    public open(...param:any[]):void{
        super.open(param);
    }

    /**
     * 面板关闭执行函数，用于子类继承
     * @param param 参数
     */
    public close(...param:any[]):void{
        super.close(param);
    }

    /**
     * 请求登陆处理
     * @param userName
     * @param pwd
     */
    private onLogin():void{
        var userName:string = "yangsong";
        var pwd:string = "123456";
        //进行基础检测
        if(userName == null || userName.length == 0){
            return;
        }
        if(pwd == null || pwd.length == 0){
            return;
        }
        this.applyFunc(LoginProto.LOGIN_C2S, userName, pwd);
    }

    /**
     * 登陆成功处理
     */
    public loginSuccess():void{
        //TODO 登陆成功处理
    }
}