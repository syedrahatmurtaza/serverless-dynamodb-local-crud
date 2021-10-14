import type { AWS } from "@serverless/typescript";

import getItem from "@functions/getItem";
import putItem from "@functions/putItem";
import createTable from "@functions/createTable";
import updateItem from "@functions/updateItem";

import { esbuild } from "./config/esbuild.config";
import { dynamodb } from "./config/dynamodb.config";
import { usersTable } from "./database/tables/users.table";

const serverlessConfiguration: AWS = {
  service: "new-folder",
  frameworkVersion: "2",
  custom: {
    esbuild,
    dynamodb,
  },
  plugins: [
    "serverless-esbuild",
    "serverless-dynamodb-local",
    "serverless-offline",
  ],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    region: "ap-southeast-1",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
    },
    lambdaHashingVersion: "20201221",
  },
  // import the function via paths
  functions: { getItem, createTable, putItem, updateItem },
  resources: {
    Resources: { usersTable },
  },
};

module.exports = serverlessConfiguration;
