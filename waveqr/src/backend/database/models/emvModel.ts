import { Model } from "@nozbe/watermelondb";
import { date, field, readonly } from "@nozbe/watermelondb/decorators";

export class EmvModel extends Model {
	static table = "emvs";

	@field("id")
	id!: string;

	@field("value")
	value!: string;

	@field("type")
	type!: string;

	@field("isFavourite")
	isFavourite!: boolean;

	@field("isActive") // Novo campo isActive
	isActive!: boolean;

	@readonly
	@date("created_at")
	createdAt!: Date;

	// Campo de data para o registro atualizado
	@date("updated_at")
	updatedAt!: Date | null; // Pode ser null inicialmente
}
