import api from "@infrastructure/http/api";
import type { SyncDatabaseChangeSet } from "@nozbe/watermelondb/sync";
import type { AxiosPromise } from "axios";

interface IEmvHTTPService {
	pullChanges(lastPulledAt: number): Promise<AxiosPromise>;
	pushChanges(changes: SyncDatabaseChangeSet): Promise<AxiosPromise>;
}

const EmvHTTPService: IEmvHTTPService = {
	pullChanges: (lastPulledAt): Promise<AxiosPromise> => {
		return api.get(`/sync?lastPulledAt=${lastPulledAt}`);
	},
	pushChanges: (changes: SyncDatabaseChangeSet): Promise<AxiosPromise> => {
		return api.post("/sync", { changes });
	},
};

export default EmvHTTPService;
