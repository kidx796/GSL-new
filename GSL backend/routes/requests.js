const router = require('express').Router();
const FurnitureRequest = require('../models/FurnitureRequest');
const auth = require('../middleware/auth');

// Submit new request (public)
router.post('/', async (req, res) => {
  try {
    const request = await FurnitureRequest.create(req.body);
    res.json(request);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// View all requests (admin only)
router.get('/', auth.verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
  const requests = await FurnitureRequest.find();
  res.json(requests);
});

module.exports = router;
