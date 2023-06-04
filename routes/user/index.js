const express = require('express');
const router = express.Router();
const UserController = require('./controllers');

// GET /user
router.get('/', UserController.getAllUsers);

// POST /user
router.post('/', UserController.createUser);

// GET /user/:id
router.get('/:id', UserController.getUser);

// PUT /user/:id
router.put('/:id', UserController.updateUser);

// DELETE /user/:id
router.delete('/:id', UserController.deleteUser);

module.exports = router;
