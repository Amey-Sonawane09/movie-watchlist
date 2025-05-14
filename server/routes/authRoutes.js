const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middlewares/auth');

// console.log(authController);
// console.log(auth);

// POST /api/auth/signup
router.post('/signup', authController.signup);

// POST /api/auth/login
router.post('/login', authController.login);

// GET /api/auth/user
router.get('/user', auth.authenticate, authController.getUser);

module.exports = router;