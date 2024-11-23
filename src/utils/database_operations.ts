import { type SQLiteDatabase } from "expo-sqlite";
import { ReminderType } from "@/types/reminder";
 export async function addItemAsync(db: SQLiteDatabase, data: ReminderType): Promise<void> {
    const {reminder,due_date,due_time} = data
  if (reminder !== ""||due_date!==""||due_time!=="") {
    try {
        
        const result= await db.runAsync(
              "INSERT INTO reminders (reminder, due_date,due_time) VALUES (?, ?,?);",
           reminder,due_date,due_time
        );
        //   false,
        //   [reminder,due_date,due_time],
         console.log(result)
    } catch (error) {
       console.log(error) 
    }
  }
}

async function updateItemAsDoneAsync(
  db: SQLiteDatabase,
  id: number,
): Promise<void> {
  await db.runAsync("UPDATE items SET done = ? WHERE id = ?;", true, id);
}

async function deleteItemAsync(db: SQLiteDatabase, id: number): Promise<void> {
  await db.runAsync("DELETE FROM items WHERE id = ?;", id);
}
