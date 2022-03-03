class LoginProxy extends core.BaseProxy{
    public constructor($controller:core.BaseController){
        super($controller);

        //注册从服务器返回消息的监听
        this.receiveServerMsg(HttpConst.USER_LOGIN, this.loginSuccess, this);
    }

    /**
     * 用户登陆
     * @param userName
     * @param pwd
     */
    public login(userName:string, pwd:string):void{
        var paramObj:any = {
            "uName":userName,
            "uPass":pwd
        };
        this.sendHttpMsg(HttpConst.USER_LOGIN, paramObj);
    }

    /**
     * 用户登陆成功返回
     */
    public loginSuccess(obj:any):void{
        this.applyFunc(LoginProto.LOGIN_S2C, obj);
    }
}