module core {
    export class BaseEuiLayer extends eui.UILayer {
        public constructor() {
            super();
    
            this.percentWidth = 100;
            this.percentHeight = 100;
    
            this.touchEnabled = false;
        }
    }
}