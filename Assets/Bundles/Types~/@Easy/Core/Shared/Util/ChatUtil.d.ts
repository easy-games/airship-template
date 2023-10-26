export declare class ChatUtil {
    static ParseCommandData(commandText: string): CommandData | undefined;
}
export interface CommandData {
    label: string;
    args: string[];
}
