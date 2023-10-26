import { AccessorySlot } from "./AccessorySlot";
import { BodyAttachment } from "./BodyAttachment";
export interface AccessoryMeta {
    category: AccessorySlot;
    bodyAttachments: BodyAttachment[];
}
