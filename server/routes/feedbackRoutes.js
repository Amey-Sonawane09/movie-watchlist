const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Submit feedback
router.post('/', async (req, res) => {
  try {
    const { name, email, rating, feedback } = req.body;
    
    // Validation
    if (!name || !email || !rating || !feedback) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    // Basic email validation without regex
    if (typeof email !== 'string' || 
        !email.includes('@') || 
        !email.includes('.') || 
        email.indexOf('@') > email.lastIndexOf('.') ||
        email.indexOf('@') === 0 ||
        email.lastIndexOf('.') === email.length - 1) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Insert into database
    const result = await db.query(
      'INSERT INTO feedback (name, email, rating, feedback) VALUES (?, ?, ?, ?)',
      [name, email, rating, feedback]
    );

    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// // Get all feedback (for admin view)
// router.get('/api/feedback', async (req, res) => {
//   try {
//     const [results] = await db.query('SELECT * FROM feedback ORDER BY created_at DESC');
//     res.json(results);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

module.exports = router;