import { Context, APIGatewayEvent } from "aws-lambda";
const Client = require("serverless-mysql");

module.exports.run = async (event: APIGatewayEvent, context: Context) => {
  const client = Client({
    config: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      port: 3309,
    },
  });

  const req = await client.query("SELECT * FROM bookchat_schedules");

  const time = new Date();
  console.log(`Your cron function "${context.functionName}" ran at ${time}`);
  return req;
};
