const express = require('express');
const router = express.Router();
const responseController = require('../controllers/response');

// Create a new response
router.post('/', responseController.createResponse);

// Get all responses
router.get('/', responseController.getResponses);

// Get a single response by ID
router.get('/:id', responseController.getResponseById);

// Update a response by ID
router.put('/:id', responseController.updateResponseById);

// Delete a response by ID
router.delete('/:id', responseController.deleteResponseById);

module.exports = router;