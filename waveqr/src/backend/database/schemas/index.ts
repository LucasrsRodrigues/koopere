import { appSchema } from "@nozbe/watermelondb";
import { emvSchema } from "./emvSchema";

export const schemas = appSchema({
	version: 5,
	tables: [emvSchema],
});
