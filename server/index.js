const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Use CORS middleware with default options (allows all origins)
app.use(cors());

// Optionally, you can configure it to allow specific origins and methods
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


// Middleware to parse incoming JSON data
app.use(express.json());

// Define a sample route to handle requests
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a route for student operations
app.post('/api/student', (req, res) => {
  const { name, email } = req.body;
  res.json({ message: `Student ${name} with email ${email} added successfully!` });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

