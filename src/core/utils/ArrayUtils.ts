module core {
    /**
     * Created by egret on 15-8-7.
     */
    export class ArrayUtils extends Singleton {
        /**
         * 遍历操作
         * @param arr
         * @param func
         */
        public forEach(arr: Array<any>, func: Function, funcObj: any): void {
            for (var i: number = 0, len: number = arr.length; i < len; i++) {
                func.apply(funcObj, [arr[i]]);
            }
        }
    }
}