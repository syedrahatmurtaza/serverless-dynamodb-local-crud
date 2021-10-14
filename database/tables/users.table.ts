export const usersTable = {
  Type: "AWS::DynamoDB:Table",
  Properties: {
    TableName: "users",
    AttributeDefinitions: [
      {
        AttributeName: "id",
        AttributeType: "N",
      },
      {
        AttributeName: "name",
        AttributeType: "S",
      },
      {
        AttributeName: "email",
        AttributeType: "S",
      },
    ],
    KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
  },
};
