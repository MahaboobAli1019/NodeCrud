const userModel = require('../models/userModel');

class UserController {
  async getAllUsers(req, res) {
    try {
      const users = await userModel.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getUserById(req, res) {
    const { id } = req.params;
    try {
      const user = await userModel.getUserById(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async createUser(req, res) {
    const user = req.body;
    try {
      const newUserId = await userModel.createUser(user);
      res.status(201).json({ id: newUserId });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async updateUser(req, res) {
    const { id } = req.params;
    const user = req.body;
    try {
      const success = await userModel.updateUser(id, user);
      if (!success) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ success: true ,'message': 'User Updated'});
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async deleteUser(req, res) {
    const { id } = req.params;
    try {
      const success = await userModel.deleteUser(id);
      if (!success) {
        return res.status(404).json({ error: 'User not found' });
      }
      // res.json({ success: true ,'message': 'User Deleted'});
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = new UserController();
