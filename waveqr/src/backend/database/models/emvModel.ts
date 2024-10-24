import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

export class EmvModel extends Model {
  static table =  "emvs"

  @field("value")
  value!: string;

  @field("type")
  type!: string;

  @field("isFavourite")
  isFavourite!: boolean;
}