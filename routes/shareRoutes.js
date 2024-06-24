const express = require('express');
const router = express.Router();
const shareController = require('../controllers/shareController');

// Routes pour les partages
router.post('/shares', shareController.createShare);
router.get('/shares', shareController.getAllShares);
router.get('/shares/:id', shareController.getShareById);
router.put('/shares/:id', shareController.updateShare);
router.delete('/shares/:id', shareController.deleteShare);

module.exports = router;
