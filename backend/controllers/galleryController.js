const Gallery = require('../models/Gallery')
const path = require('path')
const fs = require('fs')

exports.getGallery = async (req, res) => {
  try {
    const images = await Gallery.find().sort({ order: 1, createdAt: -1 })
    res.json({ success: true, images })
  } catch {
    res.status(500).json({ success: false, message: 'Server error' })
  }
}

exports.uploadImages = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ success: false, message: 'No files uploaded' })
    }

    const baseUrl = `${req.protocol}://${req.get('host')}`
    const images = await Gallery.insertMany(
      req.files.map((file) => ({
        url: `${baseUrl}/uploads/${file.filename}`,
        name: file.originalname,
        public_id: file.filename,
      }))
    )

    res.status(201).json({ success: true, images })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

exports.deleteImage = async (req, res) => {
  try {
    const image = await Gallery.findByIdAndDelete(req.params.id)
    if (!image) return res.status(404).json({ success: false, message: 'Not found' })

    // Delete file from disk
    if (image.public_id) {
      const filePath = path.join(process.env.UPLOAD_PATH || './uploads', image.public_id)
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath)
    }

    res.json({ success: true, message: 'Image deleted' })
  } catch {
    res.status(500).json({ success: false, message: 'Server error' })
  }
}
