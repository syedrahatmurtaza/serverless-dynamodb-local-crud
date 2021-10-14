// import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayEvent, Callback, Context, Handler } from "aws-lambda";

import { UsersUtil } from "../../../database/utils/users.util";

// import schema from './schema';

const createTable: Handler = async (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback
) => {
  if (context) {
  }

  const body = JSON.parse(JSON.stringify(event.body));

  const databaseResponse = await new UsersUtil().createTable(
    body.tableName,
    body.primaryKey
  );

  const response = formatJSONResponse({
    databaseResponse,
  });

  callback(null, response);
};

export const createTableFunction = middyfy(createTable);