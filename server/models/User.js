const pool = require('../config/db');
const bcrypt = require('bcryptjs');
const validator = require('validator');

class User {
  static async create({ username, email, password }) {
    if (!username || !email || !password) {
      throw new Error('All fields are required');
    }
    
    if (!validator.isEmail(email)) {
      throw new Error('Invalid email format');
    }
    
    if (!validator.isLength(password, { min: 6 })) {
      throw new Error('Password must be at least 6 characters');
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const [result] = await pool.execute(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );
    
    return result.insertId;
  }

  static async findByEmail(email) {
    const [rows] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
  }

  static async findById(id) {
    const [rows] = await pool.execute('SELECT id, username, email FROM users WHERE id = ?', [id]);
    return rows[0];
  }
}

module.exports = User;