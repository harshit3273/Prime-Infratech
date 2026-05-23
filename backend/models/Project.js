const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    category: {
      type: String,
      required: true,
      enum: ['Construction', 'Interior Design', 'Architecture', 'Renovation', 'Road Projects', 'Infrastructure'],
    },
    description: { type: String, trim: true },
    location: { type: String, trim: true },
    year: { type: String },
    area: { type: String },
    status: { type: String, enum: ['Ongoing', 'Completed'], default: 'Ongoing' },
    images: [{ url: String, public_id: String }],
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
)

projectSchema.index({ category: 1, status: 1 })

module.exports = mongoose.model('Project', projectSchema)
