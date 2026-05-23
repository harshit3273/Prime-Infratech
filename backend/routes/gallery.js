const express = require('express')
const router = express.Router()
const { getGallery, uploadImages, deleteImage } = require('../controllers/galleryController')
const { protect, adminOnly } = require('../middleware/auth')
const upload = require('../middleware/upload')

router.get('/', getGallery)
router.post('/', protect, adminOnly, upload.array('images', 20), uploadImages)
router.delete('/:id', protect, adminOnly, deleteImage)

module.exports = router
