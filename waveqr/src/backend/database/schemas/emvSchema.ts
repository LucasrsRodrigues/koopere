import { tableSchema } from "@nozbe/watermelondb";

export const emvSchema = tableSchema({
  name: "emvs",
  columns: [
    {
      name: "value",
      type: "string"
    },
    {
      name: "type",
      type: "string"
    },
    {
      name: "isFavourite",
      type: "boolean"
    }
  ]
})