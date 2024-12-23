const express = require('express');

const routes = express.Router();

const { allPost } = require('../controllers/AdminController');

const { verifyToken, checkAdmin } = require('../middleware/Auth');

routes.get('/allpost',verifyToken,checkAdmin,allPost)


module.exports = routes;