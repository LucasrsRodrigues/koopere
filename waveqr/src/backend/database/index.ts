import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";
import { schemas } from "./schemas";
import { Database } from "@nozbe/watermelondb";
import { EmvModel } from "./models/emvModel";

const adapter = new SQLiteAdapter({
	schema: schemas,
	jsi: true,
	onSetUpError: (error) => {
		console.log("--> setupError");
		console.log(error);
		console.log("--> setupError");
	},
});

export const database = new Database({
	adapter,
	modelClasses: [EmvModel],
});

export const emvsCollection = database.get<EmvModel>("emvs");
