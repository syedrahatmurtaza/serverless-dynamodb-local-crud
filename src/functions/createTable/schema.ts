export default {
  type: "object",
  properties: {
    tableName: { type: "string" },
    primaryKey: { type: "string" },
  },
  required: ["tableName", "primaryKey"],
} as const;
