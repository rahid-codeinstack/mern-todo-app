const express  = require('express');
const authControllerObj = require('../controllers/authController');
const router = express.Router();
router.post("/login",authControllerObj.login);
router.post("/register",authControllerObj.register);
module.exports = router;
