const express = require('express')
const router = express.Router()
const {
  submitContact, getContacts, markRead, deleteContact
} = require('../controllers/contactController')
const { protect, adminOnly } = require('../middleware/auth')

router.post('/', submitContact)
router.get('/', protect, adminOnly, getContacts)
router.patch('/:id/read', protect, adminOnly, markRead)
router.delete('/:id', protect, adminOnly, deleteContact)

module.exports = router
