module core {
    export class Singleton {
        public constructor() {

        }

        private static _instance: any;
        public static getSingtonInstance(...params: any[]): any {
            let Class: any = this;
            if (!Class._instance) {
                Class._instance = new Class(...params);
            }
            return Class._instance;
        }
    }
}