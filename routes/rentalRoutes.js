const express = require('express');
const { Pool } = require('pg');

const router = express.Router();

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'rentals',
  password: 'harini_kulkarni2512',
  port: 5432,
});

router.get('/', (req, res) => {
  res.render('index.html'); // Renders the index.handlebars file
});

router.post('/search', async (req, res) => {
  const { location, pickupDate, dropDate, vehicleType } = req.body;

  try {
    const result = await pool.query(
      `SELECT * FROM rentals WHERE location = $1 AND vehicle_type = $2 AND stock > 0`,
      [location, vehicleType]
    );

    res.render('rental', { rentals: result.rows }); // Renders the rental.handlebars file with 'rentals' data
  } catch (error) {
    console.error('Error fetching rentals:', error);
    res.status(500).send('Error fetching rentals.');
  }
});

module.exports = router;
