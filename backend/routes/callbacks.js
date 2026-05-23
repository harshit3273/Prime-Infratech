const express = require('express')
const router = express.Router()
const Callback = require('../models/Callback')
const { protect, adminOnly } = require('../middleware/auth')

// POST /api/callbacks — public
router.post('/', async (req, res) => {
  try {
    const { name, phone, preferredTime } = req.body
    if (!name || !phone) {
      return res.status(400).json({ success: false, message: 'Name and phone are required' })
    }
    const callback = await Callback.create({ name, phone, preferredTime })
    res.status(201).json({ success: true, message: 'Callback request received!', callback })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

// GET /api/callbacks — admin only
router.get('/', protect, adminOnly, async (req, res) => {
  try {
    const callbacks = await Callback.find().sort({ createdAt: -1 })
    res.json({ success: true, callbacks })
  } catch {
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

// PATCH /api/callbacks/:id — update status
router.patch('/:id', protect, adminOnly, async (req, res) => {
  try {
    const cb = await Callback.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true })
    res.json({ success: true, callback: cb })
  } catch {
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

module.exports = router
