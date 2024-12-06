import { type SQLiteDatabase } from "expo-sqlite";
import { ReminderType } from "@/types/reminder";
 export const   addItemAsync = async(db: SQLiteDatabase, data: ReminderType): Promise<void>=> {
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

export const  updateItemAsDoneAsync= async(
  db: SQLiteDatabase,
  id: number,
  data:ReminderType
):Promise<void>=> {
  await db.runAsync("UPDATE items SET done = ? WHERE id = ?;", true, id);
}

export const  deleteItemAsync = async(db: SQLiteDatabase, id: number): Promise<void>=> {
  await db.runAsync("DELETE FROM items WHERE id = ?;", id);
}
