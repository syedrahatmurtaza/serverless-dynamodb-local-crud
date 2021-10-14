import schema from "./schema";
import { handlerPath } from "@libs/handlerResolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.putItemFunction`,
  events: [
    {
      http: {
        method: "post",
        path: "table/putItem",
        request: {
          schema: {
            "application/json": schema,
          },
        },
      },
    },
  ],
};
