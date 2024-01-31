const express = require('express');
const router = express.Router();

const { register, login, currentUser } = require('../controllers/userController');
const validateAccessToken = require('../middleware/accessTokenValidation');

router.post('/register',register )

router.post('/login',login )

router.get('/currentUser', validateAccessToken, currentUser )


module.exports=router;