const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite');

db.serialize(() => {
    // Version 1 Schema (Just the username)
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL
    )`);

    // Insert our mock Version 1 users
    db.run(`INSERT INTO users (username) VALUES ('alice123'), ('bob_smith')`);
});

db.close();
console.log("Database initialized with Version 1 schema! 🗄️");