const express = require('express');
const router = express.Router();
const todo = require('../controller/todo')



router.post('/add', todo.create);  
router.get('/all', todo.getAll);
router.put('/update/:id', todo.updateInfo);
router.delete('/delete/:id', todo.deleteOne);



module.exports = router;