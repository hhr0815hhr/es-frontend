class LoginScene extends core.BaseScene {

    /**
     * 构造函数
     */
    public constructor(){
        super();
    }

    /**
     * 进入Scene调用
     */
     public onEnter():void{
        super.onEnter();

        //添加该Scene使用的层级
        this.addLayer(LayerManager.UI_Main);
        this.addLayer(LayerManager.UI_Message);
        this.addLayer(LayerManager.UI_Popup);

        //初始打开Login页面
        core.App.ViewManager.open(ViewConst.Login);
    }

     /**
     * 退出Scene调用
     */
      public onExit():void{
        super.onExit();
    }

}