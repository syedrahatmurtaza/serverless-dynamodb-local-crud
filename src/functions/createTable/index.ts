import schema from "./schema";
import { handlerPath } from "@libs/handlerResolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.createTableFunction`,
  events: [
    {
      http: {
        method: "post",
        path: "table/createTable",
        request: {
          schema: {
            "application/json": schema,
          },
        },
      },
    },
  ],
};
