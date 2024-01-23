const express = require('express');
const router = express.Router();

const { register, login, currentUser } = require('../controllers/userController')

router.post('/register',register )

router.post('/login',login )

router.get('/currentUser',currentUser )


module.exports=router;