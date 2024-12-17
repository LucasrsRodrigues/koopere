import { Model } from "@nozbe/watermelondb";
import { date, field, readonly, text } from "@nozbe/watermelondb/decorators";

export class EmvModel extends Model {
	static table = "emvs";

	@text("value")
	value!: string;

	@text("type")
	type!: string;

	@field("isFavourite")
	isFavourite!: boolean;

	@field("isActive")
	isActive!: boolean;

	@readonly
	@date("created_at")
	createdAt!: Date;

	@date("updated_at")
	updatedAt!: Date | null;
}
