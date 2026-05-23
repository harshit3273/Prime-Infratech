const Contact = require('../models/Contact')
const { sendEmail, contactNotificationEmail } = require('../utils/sendEmail')

// POST /api/contacts
exports.submitContact = async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ success: false, message: 'Name, email, phone, and message are required' })
    }

    const contact = await Contact.create({ name, email, phone, service, message })

    // Send notification email (non-blocking)
    sendEmail({
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact: ${name} — ${service || 'General Inquiry'}`,
      html: contactNotificationEmail(contact),
    })

    res.status(201).json({ success: true, message: 'Message received. We will contact you soon!' })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to submit. Please try again.' })
  }
}

// GET /api/contacts (admin)
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.json({ success: true, contacts, total: contacts.length })
  } catch {
    res.status(500).json({ success: false, message: 'Server error' })
  }
}

// PATCH /api/contacts/:id/read (admin)
exports.markRead = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, { read: true }, { new: true })
    if (!contact) return res.status(404).json({ success: false, message: 'Not found' })
    res.json({ success: true, contact })
  } catch {
    res.status(500).json({ success: false, message: 'Server error' })
  }
}

// DELETE /api/contacts/:id (admin)
exports.deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id)
    res.json({ success: true, message: 'Deleted' })
  } catch {
    res.status(500).json({ success: false, message: 'Server error' })
  }
}
