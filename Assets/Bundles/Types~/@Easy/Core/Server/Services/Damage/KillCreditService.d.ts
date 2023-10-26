import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
export declare class KillCreditService implements OnStart {
    private entityIdToDamageCreditMap;
    private expireTime;
    private damageTypes;
    OnStart(): void;
}
