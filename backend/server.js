const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Optional: Enable CORS if frontend is on a different port
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS (adjust origin in production)

// Database Connection
const MONGO_URI = 'mongodb://localhost:27017/contactdb'; // Replace with your MongoDB URI
mongoose.connect(MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB Error:', err));

// Routes
app.use('/api/contact', contactRoutes);

// Error Handling Middleware (for unmatched routes)
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));