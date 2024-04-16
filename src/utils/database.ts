import { description } from './../../../../Gsoc/volto-main/packages/volto/types/components/manage/Blocks/Block/Schema.d';
import * as SQLite from 'expo-sqlite';

// const db = SQLite.openDatabase('Reminders.db'); 

const createReminderTable = (db:any)=>{
        db.transaction((tx:any) => {
          tx.executeSql(
            'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, body TEXT, alertTime TEXT);',
            [],
            () => {
              console.log('Table created successfully.');
            },
            (error:any)=> {
              console.log('Error occurred while creating the table: ', error);
            }
          );
        });
      };

const insertReminder = (db:any,title:string,body:string,alertTime:string)=>{
        db.transaction((tx:any) => {
          tx.executeSql(
            'INSERT INTO users (title, body,alertTime) VALUES (?, ?, ?);',
            [title, body,alertTime],
            () => {
              console.log('User inserted successfully.');
            },
            (error:any) => {
              console.log('Error occurred while inserting user: ', error);
            }
          );
        });
      };
const deleteReminder = ()=>{}
const editReminder = ()=>{}
const clearAllReminders = ()=>{}

export  const databaseTransaction = {
    createReminderTable,
    insertReminder,
    deleteReminder,
    editReminder,
    clearAllReminders
}