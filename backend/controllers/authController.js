const jwt = require('jsonwebtoken')
const User = require('../models/User')

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE || '7d' })

// POST /api/auth/login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required' })
    }

    const user = await User.findOne({ email }).select('+password')
    if (!user || !user.isActive) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' })
    }

    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' })
    }

    user.lastLogin = new Date()
    await user.save({ validateBeforeSave: false })

    res.json({
      success: true,
      token: generateToken(user._id),
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
    })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' })
  }
}

// GET /api/auth/me
exports.getMe = async (req, res) => {
  res.json({ success: true, user: req.user })
}

// POST /api/auth/seed — creates initial admin (disable in production)
exports.seedAdmin = async (req, res) => {
  try {
    if (process.env.NODE_ENV === 'production') {
      return res.status(403).json({ success: false, message: 'Not available in production' })
    }

    const exists = await User.findOne({ email: process.env.ADMIN_EMAIL })
    if (exists) {
      return res.json({ success: true, message: 'Admin already exists' })
    }

    await User.create({
      name: 'Administrator',
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
      role: 'superadmin',
    })

    res.json({ success: true, message: 'Admin created successfully' })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}
