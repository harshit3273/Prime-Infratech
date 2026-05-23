const Testimonial = require('../models/Testimonial')

exports.getTestimonials = async (req, res) => {
  try {
    const filter = req.user ? {} : { approved: true }
    const testimonials = await Testimonial.find(filter).sort({ order: 1, createdAt: -1 })
    res.json({ success: true, testimonials })
  } catch {
    res.status(500).json({ success: false, message: 'Server error' })
  }
}

exports.createTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.create(req.body)
    res.status(201).json({ success: true, testimonial })
  } catch (error) {
    res.status(400).json({ success: false, message: error.message })
  }
}

exports.updateTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!testimonial) return res.status(404).json({ success: false, message: 'Not found' })
    res.json({ success: true, testimonial })
  } catch (error) {
    res.status(400).json({ success: false, message: error.message })
  }
}

exports.toggleApprove = async (req, res) => {
  try {
    const t = await Testimonial.findById(req.params.id)
    if (!t) return res.status(404).json({ success: false, message: 'Not found' })
    t.approved = !t.approved
    await t.save()
    res.json({ success: true, testimonial: t })
  } catch {
    res.status(500).json({ success: false, message: 'Server error' })
  }
}

exports.deleteTestimonial = async (req, res) => {
  try {
    await Testimonial.findByIdAndDelete(req.params.id)
    res.json({ success: true, message: 'Deleted' })
  } catch {
    res.status(500).json({ success: false, message: 'Server error' })
  }
}
