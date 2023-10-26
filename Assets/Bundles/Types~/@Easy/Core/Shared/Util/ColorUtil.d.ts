export declare class ColorUtil {
    /**
     * Example return: "#121212"
     * Note: return WILL include the "#"
     */
    static ColorToHex(color: Color): string;
    static HexToColor(hex: string): Color;
    static ColoredText(color: Color, text: string): string;
}
