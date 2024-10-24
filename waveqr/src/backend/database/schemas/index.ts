import { appSchema } from "@nozbe/watermelondb";
import { emvSchema } from "./emvSchema";

export const schemas = appSchema({
  version: 1,
  tables: [ emvSchema ]
});