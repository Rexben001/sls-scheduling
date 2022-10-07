import Base from "../Base";

class Reminder extends Base {
  constructor() {
    super();
    return this;
  }

  async run() {
    try {
      const req = await this.mysql.query("SELECT * FROM bookchat_schedules");
      return req;
    } catch (error) {
      return error;
    } finally {
      this.endDBConnection();
      this.getTotalRuntime();
    }
  }
}

export default Reminder;
