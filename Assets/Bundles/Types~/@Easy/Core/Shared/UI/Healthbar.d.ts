export interface ProgressBarOptions {
    initialPercentDelta?: number;
    fillColor?: Color;
    deathOnZero?: boolean;
}
export declare class Healthbar {
    private readonly TransformKey;
    private readonly GraphicsKey;
    private readonly AnimKey;
    transform: RectTransform;
    private refs;
    private fillImage;
    private fillTransform;
    private changeFillTransform;
    private growthFillTransform;
    private graphicsHolder;
    private brokenGraphicsHolder;
    private deathAnim;
    fillDurationInSeconds: number;
    changeDelayInSeconds: number;
    changeDurationInSeconds: number;
    private enabled;
    deathOnZero: boolean;
    private currentDelta;
    constructor(transform: Transform, options?: ProgressBarOptions);
    OnDelete(): void;
    SetColor(newColor: Color): void;
    InstantlySetValue(percentDelta: number): void;
    SetValue(percentDelta: number): void;
    Destroy(): void;
}
