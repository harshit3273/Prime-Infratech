const express = require('express')
const router = express.Router()
const {
  getTestimonials, createTestimonial, updateTestimonial,
  toggleApprove, deleteTestimonial
} = require('../controllers/testimonialController')
const { protect, adminOnly } = require('../middleware/auth')

router.get('/', getTestimonials)
router.post('/', protect, adminOnly, createTestimonial)
router.put('/:id', protect, adminOnly, updateTestimonial)
router.patch('/:id/approve', protect, adminOnly, toggleApprove)
router.delete('/:id', protect, adminOnly, deleteTestimonial)

module.exports = router
