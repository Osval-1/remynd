import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('Reminders.db'); 

const createReminderTable = ()=>{
        db.transaction((tx:any) => {
          tx.executeSql(
            'CREATE TABLE IF NOT EXISTS reminders (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, body TEXT, alertTime TEXT);',
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

const createReminder = (title:string,body:string,alertTime:string)=>{
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO reminders (title, body,alertTime) VALUES (?, ?, ?);',
        [title,body,alertTime],
        (_, { rowsAffected, insertId }) => {
          if (rowsAffected > 0) {
            resolve(insertId); 
          } else {
            reject(new Error('Reminder creation failed.'));
          }
        },
        (_, error):any =>reject(error)
      );
    });
  });
}
const getReminders = () =>{
   return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM reminders;',
        [],
        (_, { rows }) => {
           resolve(rows._array); 
        },
        (_, error):any => reject(error)
      );
    });
  })}
const deleteReminder = (id:string)=>{
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM reminders WHERE id = ?;',
        [id],
        (_, { rowsAffected,rows }) => {
          if (rowsAffected > 0) {
            console.log(rows._array)
            resolve(rows); 
          } else {
            reject(new Error('Reminder not found.'));
          }
        },
        // (_, error) => reject(error)
      );
    });
  });
}
const updateReminder = (id:string,title:string,body:string,alertTime:string)=>{
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'UPDATE reminders SET title = ?, body = ?, alertTime = ? WHERE id = ?;',
          [title,body,alertTime,id],
          (_, { rowsAffected }) => {
            if (rowsAffected > 0) {
              resolve(true);
            } else {
              reject(new Error('Reminder not found.'));
            }
          },
          // (_, error) => reject(error)
        );
      });
    });
  };
const clearAllReminders = ()=>{
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE * FROM reminders;',
        [],
        () => {
          resolve(true);
        },
        // (_, error) => reject(error)
      );
    });
  });
}

export  const database = {
    createReminderTable,
    deleteReminder,
    updateReminder,
    clearAllReminders,
    createReminder,
    getReminders
}