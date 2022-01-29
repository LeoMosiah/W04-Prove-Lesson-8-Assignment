const express = require('express');

const { getProfessional } = require('../controllers/professional');

const router = express.Router();

// GET /feed/posts
router.get('/', getProfessional)

module.exports = router;
