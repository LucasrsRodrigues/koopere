import type { Qrcode } from "../../../entities/Qrcode";

export interface ISyncRepository {
	sendToClient(lastPulledAt: number): Promise<Qrcode[]>;
	getDeletedEmvs(): Promise<Qrcode[]>;
}
