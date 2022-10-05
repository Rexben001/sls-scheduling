import { Context, APIGatewayEvent } from "aws-lambda";

const mysql = require("serverless-mysql")({
  config: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: 3306,
  },
});

module.exports.run = async (event: APIGatewayEvent, context: Context) => {
  try {
    const req = await mysql.query("SELECT * FROM bookchat_schedules");

    const time = new Date();
    console.log(`Your cron function "${context.functionName}" ran at ${time}`);

    // Run clean up function
    await mysql.end();
    return req;
  } catch (error) {
    return error;
  }
};
