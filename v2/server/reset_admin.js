const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const crypto = require('crypto');

const dbPath = path.resolve(__dirname, 'recreate.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database', err.message);
        process.exit(1);
    }
    
    const PASSWORD_PREFIX = 'scrypt';
    function hashPassword(plainPassword) {
        const salt = crypto.randomBytes(16).toString('hex');
        const derivedKey = crypto.scryptSync(plainPassword, salt, 64).toString('hex');
        return `${PASSWORD_PREFIX}:${salt}:${derivedKey}`;
    }
    
    const newEmail = 'admin@recreateliving.com';
    const newPassword = hashPassword('Recreate@2026');
    
    // Check if user exists, if so update, if not insert
    db.get('SELECT id FROM users WHERE email = ?', [newEmail], (err, row) => {
        if (row) {
            db.run('UPDATE users SET password = ?, role = ? WHERE email = ?', [newPassword, 'admin', newEmail], function(err) {
                if (err) {
                    console.error('Error updating password', err.message);
                } else {
                    console.log(`Password for ${newEmail} has been updated to: Recreate@2026`);
                }
                db.close();
            });
        } else {
            db.run('INSERT INTO users (email, password, role) VALUES (?, ?, ?)', [newEmail, newPassword, 'admin'], function(err) {
                if (err) {
                    console.error('Error inserting admin', err.message);
                } else {
                    console.log(`New admin user created: ${newEmail} / Recreate@2026`);
                }
                db.close();
            });
        }
    });
});
