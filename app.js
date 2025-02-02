const express = require('express');
const { Client } = require('pg');
const path = require('path');
const app = express();

// Set up PostgreSQL connection
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'vehicle_rentals',
    password: 'harini_kulkarni2512',
    port: 5432,
});

client.connect();

// Middleware to parse POST data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (images, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Serve the form page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle the form submission and search for vehicles
app.post('/search', async (req, res) => {
    const { location, vehicleType } = req.body;
    
    try {
        const result = await client.query(
            'SELECT * FROM rent WHERE location = $1 AND vehicle_type = $2',
            [location, vehicleType]
        );
        
        // Send results to the client
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error searching for rentals');
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
