const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Name is required'] 
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'],
    match: [/^\S+@\S+\.\S+$/, 'Invalid email format'] // Basic email validation
  },
  phone: { 
    type: String, 
    validate: {
      validator: (v) => /^\d{10,15}$/.test(v), // Validate phone number format
      message: 'Phone number must be 10-15 digits'
    }
  },
  subject: String,
  message: { 
    type: String, 
    required: [true, 'Message is required'] 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('Contact', ContactSchema);