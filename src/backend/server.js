const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Enable CORS for requests from http://localhost:3000
app.use(cors({
  origin: 'http://localhost:3000'
}));

// Mock user database (replace with a real database)
const users = {};

// Secret key for JWT signing (replace with a secure secret key)
const JWT_SECRET = 'your-secret-key';

// Register endpoint
app.post('/api/register', async (req, res) => {
  try {
    const { username, email, password, dob, role, organization } = req.body;
    // Check if username already exists
    if (users[username]) {
      return res.status(400).send('Username already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    // Store user data in the database
    users[username] = { username, email, password: hashedPassword, dob, role, organization, data: [] };
    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(500).send('Internal server error');
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = users[username];
    if (!user) {
      return res.status(404).send('User not found');
    }
    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(401).send('Invalid password');
    }
    const token = jwt.sign({ username }, JWT_SECRET);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).send('Internal server error');
  }
});

// Store data for a particular user
app.post('/api/store-data', (req, res) => {
  const { username, data } = req.body;
  if (!users[username]) {
    return res.status(404).send('User not found');
  }
  users[username].data.push(data);
  res.status(200).send('Data stored successfully');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
