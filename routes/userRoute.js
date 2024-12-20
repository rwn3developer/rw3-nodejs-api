const express = require('express');

const routes = express.Router();

const {addUser,viewUser,deleteUser , updateUser } = require('../controllers/UserController');
const { verifyToken, Admin, checkAdmin } = require('../middleware/Auth');


routes.post('/adduser',addUser)
routes.get('/viewuser',verifyToken,checkAdmin,viewUser);
routes.delete('/deleteuser',deleteUser)
routes.put('/updateuser',updateUser) 



module.exports = routes