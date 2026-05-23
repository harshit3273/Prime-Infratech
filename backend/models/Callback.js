const mongoose = require('mongoose')

const callbackSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    preferredTime: { type: String, trim: true },
    status: { type: String, enum: ['pending', 'called', 'cancelled'], default: 'pending' },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Callback', callbackSchema)
