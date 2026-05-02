const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'v2/server/recreate.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database', err.message);
        process.exit(1);
    }
    
    db.all('SELECT email, password, role FROM users', [], (err, rows) => {
        if (err) {
            console.error('Error querying users', err.message);
            process.exit(1);
        }
        console.log('--- Users in Database ---');
        console.log(JSON.stringify(rows, null, 2));
        db.close();
    });
});
