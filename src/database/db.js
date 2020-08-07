const Database = require('sqlite-async');

function execute(db) {
  // Execute sql commands
  // Creating a table
  return db.exec(`
    CREATE TABLE IF NOT EXISTS proffys (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      avatar TEXT,
      bio TEXT,
      whatsapp TEXT
    );

    CREATE TABLE IF NOT EXISTS classes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      subject INTEGER,
      cost TEXT,
      proffy_id INTEGER
    );

    CREATE TABLE IF NOT EXISTS class_schedule (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      class_id INTEGER,
      weekday INTEGER,
      time_from INTEGER,
      time_to INTEGER
    );
  `);
}

module.exports = Database.open(`${__dirname}/database.sqlite`).then(execute); // Return db
