import { APIGatewayEvent } from "aws-lambda";
// import { helloWorldFunction } from "../src/functions/hello/handler";

describe("Testing Hello World Function", function () {
  test("Testing Handler", async function () {
    // Body
    const body = {
      name: "Rahat Murtaza",
    };

    // Request
    const request: APIGatewayEvent = {
      body: JSON.stringify(body),
    } as any;

    if (request) {
    }

    // await helloWorldFunction(request, {} as any, function (error, result) {
    //   if (error) {
    //     console.log(error);
    //   }
    //   const response = JSON.parse(JSON.stringify(result));
    //   expect(response.statusCode).toBe(200);
    // });
  });

  test("Testing Handler", async function () {
    // Body
    const body = {
      name: "Rahat Murtaza",
    };

    // Request
    const request: APIGatewayEvent = {
      body: JSON.stringify(body),
    } as any;

    if (request) {
    }

    // // Calling Lambda Function
    // await helloWorldFunction(request, {} as any, function (error, result) {
    //   if (error) {
    //     console.log(error);
    //   }
    //   const response = JSON.parse(JSON.stringify(result));
    //   // console.log("Response Body: ", response.body);
    //   expect(response.statusCode).toBe(200);
    // });
  });
});
