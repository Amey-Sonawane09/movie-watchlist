const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticate = (req, res, next) => {
  // console.log('middleware running');
  
  const token = req.header('x-auth-token');
  
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_secret_key');
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = { authenticate };