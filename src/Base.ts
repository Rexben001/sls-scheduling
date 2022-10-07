class Base {
  mysql: any;
  startTime: number;
  endTime: number | undefined;

  constructor() {
    this.startTime = new Date().getTime();
    this.mysql = require("serverless-mysql")({
      config: {
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        port: 3306,
      },
    });
  }

  public initializeDB() {
    const mysql = require("serverless-mysql")({
      config: {
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        port: 3306,
      },
    });
    this.mysql = mysql;

    return this.mysql;
  }

  public async endDBConnection() {
    this.endTime = new Date().getTime();
    if (this.mysql) {
      await this.mysql.end();
      return this.mysql.quit();
    }
  }

  public getTotalRuntime() {
    const time = Number(Number(this.endTime) - this.startTime) / 1000;
    console.log({ time });
    return time;
  }
}

export default Base;
