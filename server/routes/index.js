const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const userController = require('../controllers/userController');
const chatController = require('../controllers/chatController');
const taskController = require('../controllers/taskController');


router.post('/register', userController.register);
router.post('/login', userController.login);

router.get('/chat', auth, chatController.getChatMessages);
router.post('/chat', auth, chatController.sendMessage);

router.get('/tasks', auth, taskController.getTasks);
router.post('/tasks', auth, taskController.createTask);
router.put('/tasks/:id', auth, taskController.updateTask);
router.delete('/tasks/:id', auth, taskController.deleteTask);

module.exports = router;
