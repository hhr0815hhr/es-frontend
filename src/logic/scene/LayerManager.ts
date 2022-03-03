/**
 * Created by yangsong on 2014/11/23.
 * 游戏层级类
 */
 class LayerManager{
    /**
     * 游戏背景层
     * @type {BaseSpriteLayer}
     */
    public static Game_Bg:core.BaseSpriteLayer = new core.BaseSpriteLayer();
    /**
     * 主游戏层
     * @type {BaseSpriteLayer}
     */
    public static Game_Main:core.BaseSpriteLayer = new core.BaseSpriteLayer();

    /**
     * UI主界面
     * @type {BaseEuiLayer}
     */
    public static UI_Main:core.BaseEuiLayer = new core.BaseEuiLayer();
    /**
     * UI弹出框层
     * @type {BaseEuiLayer}
     */
    public static UI_Popup:core.BaseEuiLayer = new core.BaseEuiLayer();
    /**
     * UI警告消息层
     * @type {BaseEuiLayer}
     */
    public static UI_Message:core.BaseEuiLayer = new core.BaseEuiLayer();
    /**
     * UITips层
     * @type {BaseEuiLayer}
     */
    public static UI_Tips:core.BaseEuiLayer = new core.BaseEuiLayer();
}