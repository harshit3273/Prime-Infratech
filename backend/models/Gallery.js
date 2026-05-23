const mongoose = require('mongoose')

const gallerySchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    public_id: { type: String },
    name: { type: String, trim: true },
    category: { type: String, trim: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Gallery', gallerySchema)
