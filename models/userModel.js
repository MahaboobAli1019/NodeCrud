const pool = require('../config/db');

class UserModel {
  async getAllUsers() {
    const query = 'SELECT * FROM users';
    const result = await pool.query(query);
    return result[0];
  }

  async getUserById(id) {
    const query = 'SELECT * FROM users WHERE id = ?';
    const result = await pool.query(query, [id]);
    return result[0];
  }

  async createUser(user) {
    const { name, email } = user;
    const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
    const result = await pool.query(query, [name, email]);
    return result[0].insertId;
  }

  async updateUser(id, user) {
    const { name, email } = user;
    const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    const result = await pool.query(query, [name, email, id]);
    return result[0].affectedRows > 0;
  }

  async deleteUser(id) {
    const query = 'DELETE FROM users WHERE id = ?';
    const result = await pool.query(query, [id]);
    return result[0].affectedRows > 0;
  }
}

module.exports = new UserModel();
