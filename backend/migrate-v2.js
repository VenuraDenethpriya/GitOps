const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite');

db.serialize(() => {
    // Expand Phase: Add the email column safely
    db.run(`ALTER TABLE users ADD COLUMN email TEXT`);

    // Update existing Version 1 users with dummy emails so Version 2 has valid data
    db.run(`UPDATE users SET email = 'alice@example.com' WHERE username = 'alice123'`);
    db.run(`UPDATE users SET email = 'bob@example.com' WHERE username = 'bob_smith'`);
});

db.close();
console.log("Expand Phase complete! Ready for Version 2. 🚀");