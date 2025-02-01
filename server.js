const express = require('express');
const path = require('path');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Create a new pool instance for PostgreSQL connection
const pool = new Pool({
  user: 'postgres',          // replace with your postgres user
  host: 'localhost',
  database: 'rentals',       // your database name
  password: 'your_password', // replace with your postgres password
  port: 5432,
});

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files like images or stylesheets
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle GET request for rentals page
app.get('/', async (req, res) => {
  try {
    // Query the rentals data from the PostgreSQL database
    const result = await pool.query('SELECT * FROM rentals');
    const rentals = result.rows; // retrieve rows of rentals
    // Render index.ejs and pass the rentals data
    res.render('index', { rentals });
  } catch (err) {
    console.error('Error fetching rentals:', err);
    res.status(500).send('Error fetching rentals');
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
