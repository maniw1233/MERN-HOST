const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route   POST api/contact
// @desc    Submit contact form (with improved validation)
router.post('/', async (req, res) => {
  // Log incoming request (for debugging)
  console.log('Request Body:', req.body);

  // Validate required fields
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'Name, email, and message are required' 
    });
  }

  try {
    const newContact = new Contact({
      name,
      email,
      phone: req.body.phone || '', // Optional field
      subject: req.body.subject || 'No subject',
      message
    });

    const savedContact = await newContact.save();
    res.status(201).json({ 
      success: true, 
      data: savedContact 
    });
  } catch (err) {
    console.error('Error saving contact:', err.message);
    
    // Handle Mongoose validation errors
    if (err.name === 'ValidationError') {
      return res.status(400).json({ 
        success: false, 
        error: err.message 
      });
    }

    res.status(500).json({ 
      success: false, 
      error: 'Server error. Please try again later.' 
    });
  }
});

module.exports = router;