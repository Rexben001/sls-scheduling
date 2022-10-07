import Reminder from "./functions/Reminder";

const reminder = new Reminder();
module.exports.reminder = async (event: any, context: any, callback: any) =>
  reminder.run();
