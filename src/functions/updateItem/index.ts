import schema from "./schema";
import { handlerPath } from "@libs/handlerResolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.updateItemFunction`,
  events: [
    {
      http: {
        method: "post",
        path: "table/updateItem",
        request: {
          schema: {
            "application/json": schema,
          },
        },
      },
    },
  ],
};
