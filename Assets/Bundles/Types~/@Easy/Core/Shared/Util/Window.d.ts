import { Signal } from "./Signal";
export declare class Window {
    private static proxy;
    static FocusChanged: Signal<[hasFocus: boolean]>;
    static HasFocus(): boolean;
}
