import { tableSchema } from "@nozbe/watermelondb";

export const emvSchema = tableSchema({
	name: "emvs",
	columns: [
		{
			name: "value",
			type: "string",
		},
		{
			name: "type",
			type: "string",
		},
		{
			name: "isFavourite",
			type: "boolean",
		},
		{
			name: "isActive",
			type: "boolean",
			isOptional: true,
		},
		{
			name: "created_at",
			type: "number",
		},
		{
			name: "updated_at",
			type: "number",
		},
	],
});
