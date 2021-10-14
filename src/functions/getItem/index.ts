import schema from "./schema";
import { handlerPath } from "@libs/handlerResolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.getItemFunction`,
  events: [
    {
      http: {
        method: "post",
        path: "table/getItem",
        request: {
          schema: {
            "application/json": schema,
          },
        },
      },
    },
  ],
};
