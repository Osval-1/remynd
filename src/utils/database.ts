import * as SQLite from "expo-sqlite";
import { reminderModel } from "src/types/remainder";

const db = SQLite.openDatabaseSync("Reminders.db");

const createReminderTable = async () => {
  try {
    const db = await SQLite.openDatabaseAsync("Reminders.db");
    const response = await db.execAsync(
      "CREATE TABLE IF NOT EXISTS reminders (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, body TEXT, alertTime TEXT);",
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const addReminder = async (reminder: reminderModel) => {
  try {
    await db.runAsync(
      "INSERT INTO reminders (title, body,alertTime) VALUES (?, ?, ?);",
      [reminder.title, reminder.body, reminder.alertTime],
    );
  } catch (error) {}
};
const getReminders = async () => {
  const allRows = await db.getAllAsync("SELECT * FROM reminders");
  console.log(allRows);
  return allRows;
};
const deleteReminder = async (id: string) => {
  try {
    await db.runAsync("DELETE FROM reminders WHERE id = ?;", { $id: "aaa" });
  } catch (error) {}
};
const updateReminder = async (
  id: string,
  title: string,
  body: string,
  alertTime: string,
) => {
  try {
    await db.runAsync(
      "UPDATE reminders SET title = ?, body = ?, alertTime = ? WHERE id = ?;",
    );
  } catch (error) {}
};
const clearAllReminders = async () => {
  await db.runAsync("DELETE * FROM reminders;");
};

export const database = {
  createReminderTable,
  deleteReminder,
  updateReminder,
  clearAllReminders,
  addReminder,
  getReminders,
};
