const Project = require('../models/Project')

// GET /api/projects
exports.getProjects = async (req, res) => {
  try {
    const { category, status, featured, limit = 20, page = 1 } = req.query
    const filter = {}
    if (category) filter.category = category
    if (status) filter.status = status
    if (featured) filter.featured = featured === 'true'

    const skip = (parseInt(page) - 1) * parseInt(limit)
    const [projects, total] = await Promise.all([
      Project.find(filter).sort({ order: 1, createdAt: -1 }).skip(skip).limit(parseInt(limit)),
      Project.countDocuments(filter),
    ])

    res.json({ success: true, projects, total, page: parseInt(page), pages: Math.ceil(total / parseInt(limit)) })
  } catch {
    res.status(500).json({ success: false, message: 'Server error' })
  }
}

// GET /api/projects/:id
exports.getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
    if (!project) return res.status(404).json({ success: false, message: 'Project not found' })
    res.json({ success: true, project })
  } catch {
    res.status(500).json({ success: false, message: 'Server error' })
  }
}

// POST /api/projects
exports.createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body)
    res.status(201).json({ success: true, project })
  } catch (error) {
    res.status(400).json({ success: false, message: error.message })
  }
}

// PUT /api/projects/:id
exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if (!project) return res.status(404).json({ success: false, message: 'Project not found' })
    res.json({ success: true, project })
  } catch (error) {
    res.status(400).json({ success: false, message: error.message })
  }
}

// DELETE /api/projects/:id
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id)
    if (!project) return res.status(404).json({ success: false, message: 'Project not found' })
    res.json({ success: true, message: 'Project deleted' })
  } catch {
    res.status(500).json({ success: false, message: 'Server error' })
  }
}
