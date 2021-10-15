import {
  GetItemCommand,
  GetItemCommandInput,
  CreateTableCommand,
  CreateTableCommandInput,
  DynamoDBClient,
  PutItemCommand,
  PutItemCommandInput,
  UpdateItemCommand,
  UpdateItemCommandInput,
} from "@aws-sdk/client-dynamodb";
import * as AWS from "aws-sdk";

export class UsersUtil {
  tableName: string = "users";
  client: DynamoDBClient;
  documentClient: AWS.DynamoDB.DocumentClient;
  options: {
    region: "ap-southeast-1";
    endpoint: "http://localhost:8000";
    accessKey: "AKIA3ALU67EOOENKFP6Q";
  };

  constructor() {
    this.client = new DynamoDBClient({
      region: "ap-southeast-1",
      endpoint: "http://localhost:8000",
    });
    // let exist: boolean = false;
    // Check If Table Exists
    // myClient.describeTable(
    //   { TableName: this.tableName },
    //   function (error, data) {
    //     if (error) {
    //       console.log("Table Doesn't Exist: ", error);
    //       return;
    //     } else if (data) {
    //     }
    //     exist = true;
    //   }
    // );
    // if (!exist) {
    //   const params = {
    //     TableName: this.tableName,
    //     KeySchema: [{ AttributeName: 'id', KeyType: 'HASH' }],
    //     AttributeDefinitions: [{ AttributeName: 'id', AttributeType: 'N' }],
    //     ProvisionedThroughput: {
    //       ReadCapacityUnits: 1,
    //       WriteCapacityUnits: 1,
    //     },
    //   };
    //   myClient.createTable(params, function (error, data) {
    //     if (error) {
    //       console.log('Error Creating Table:', error);
    //     }
    //     if (data) {
    //       console.log('Table Created Successfully');
    //     }
    //   });
    // }
  }

  async createTable(tableName: string, primaryKey: string) {
    const input: CreateTableCommandInput = {
      TableName: tableName,
      KeySchema: [{ AttributeName: primaryKey, KeyType: "HASH" }],
      AttributeDefinitions: [{ AttributeName: primaryKey, AttributeType: "S" }],
      ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10,
      },
    };

    try {
      const results = await this.client.send(new CreateTableCommand(input));
      console.log(results);
      return results;
    } catch (err) {
      console.error(err);
    }
  }

  // Putting User Data
  async putUserData(data: any) {
    try {
      const input: PutItemCommandInput = {
        TableName: this.tableName,
        Item: {
          id: { N: data.id },
          name: { S: data.name },
          email: { S: data.email },
        },
      };

      const results = await this.client.send(new PutItemCommand(input));
      console.log(results);
      return results;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  // Putting User Data
  async updateUserData(data: any) {
    try {
      const input: UpdateItemCommandInput = {
        TableName: this.tableName,
        Key: {
          id: { N: data.id },
          name: { S: data.name },
          email: { S: data.email },
        },
      };

      const results = await this.client.send(new UpdateItemCommand(input));
      console.log(results);
      return results;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  // Putting User Data
  async getUserData(data: any) {
    try {
      const input: GetItemCommandInput = {
        TableName: this.tableName,
        Key: {
          name: { S: data.name },
        },
        // ProjectionExpression: "id, email",
        AttributesToGet: ["id", "name", "email"],
      };

      const results = await this.client.send(new GetItemCommand(input));
      console.log(results);
      return results;
    } catch (err) {
      console.error(err);
      return err;
    }
  }
}
