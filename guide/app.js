import express from 'express';
import path from 'path';
import pkg from 'pg'; // import the whole pg package
const { Pool } = pkg; // destructure Pool from the package
import { fileURLToPath } from 'url'; // Import fileURLToPath to get __dirname equivalent

const app = express();
const port = 3000;

// Get __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a new pool instance for PostgreSQL connection
const pool = new Pool({
  user: 'postgres',          // replace with your postgres user
  host: 'localhost',
  database: 'guides',        // replace with your database name
  password: 'harini_kulkarni2512', // replace with your postgres password
  port: 5432,
});

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Views directory

// Serve static files like images or stylesheets
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle GET request for the home page (guides list)
app.get('/', async (req, res) => {
  const searchQuery = req.query.search || '';
  try {
    // Query the guides data from the PostgreSQL database
    const result = await pool.query(
      'SELECT * FROM guides WHERE name ILIKE $1 ORDER BY rating DESC', 
      [`%${searchQuery}%`]
    );
    const guides = result.rows; // retrieve rows of guides
    // Render index.ejs and pass the guides data
    res.render('index', { guides });
  } catch (err) {
    console.error('Error fetching guides:', err);
    res.status(500).send('Error fetching guides');
  }
});

// Route to handle GET request for the guide details page
app.get('/guidedetails', async (req, res) => {
  const profileName = req.query.profile;
  try {
    // Query the guide details based on profile name
    const result = await pool.query(
      'SELECT * FROM guides WHERE name = $1', [profileName]
    );
    const guide = result.rows[0]; // retrieve the specific guide
    // Render guidedetails.ejs and pass the guide data
    res.render('guidedetails', { guide });
  } catch (err) {
    console.error('Error fetching guide details:', err);
    res.status(500).send('Error fetching guide details');
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
