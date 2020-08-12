const { Router } = require('express');

const { login, registration } = require('../controllers/auth.controller');

const router = new Router();

// /api/auth/login 
router.post('/login', login);

// /api/auth/registration
router.post('/registration', registration);

module.exports = router;
