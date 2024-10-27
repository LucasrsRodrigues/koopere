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
			name: "isActive",
			type: "boolean",
			isOptional: true,
		}, // Campo isActive adicionado
		{
			name: "created_at",
			type: "number", // Se for uma string representando uma data, ou ajuste conforme necessário
		},
		{
			name: "updated_at",
			type: "number", // O mesmo aqui
		},
	],
});
