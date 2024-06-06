const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3001;

// Habilitar CORS
app.use(cors());

const connection = mysql.createConnection({
    host: 'sql205.infinityfree.com',
    user: 'if0_35906588',
    password: 'j3VTOCYfSLqk',
    database: 'if0_35906588_caps_rey'
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database.');
});

app.get('/api/data', (req, res) => {
    connection.query('SELECT * FROM bancos', (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
