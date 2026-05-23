const express = require('express')
const router = express.Router()
const Project = require('../models/Project')
const Contact = require('../models/Contact')
const Testimonial = require('../models/Testimonial')
const Gallery = require('../models/Gallery')
const Callback = require('../models/Callback')
const { protect, adminOnly } = require('../middleware/auth')

// GET /api/stats — admin only
router.get('/', protect, adminOnly, async (req, res) => {
  try {
    const [projects, contacts, testimonials, gallery, callbacks, unreadContacts] = await Promise.all([
      Project.countDocuments(),
      Contact.countDocuments(),
      Testimonial.countDocuments(),
      Gallery.countDocuments(),
      Callback.countDocuments(),
      Contact.countDocuments({ read: false }),
    ])

    res.json({
      success: true,
      projects,
      contacts,
      testimonials,
      gallery,
      callbacks,
      unreadContacts,
    })
  } catch {
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

module.exports = router
