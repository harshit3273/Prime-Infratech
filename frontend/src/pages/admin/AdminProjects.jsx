import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { FiPlus, FiTrash2, FiEdit, FiX } from 'react-icons/fi'
import { projectsAPI } from '../../api/services'

const CATEGORIES = ['Construction', 'Interior Design', 'Architecture', 'Renovation', 'Road Projects', 'Infrastructure']

const emptyForm = { title: '', category: '', location: '', year: '', area: '', status: 'Ongoing', description: '' }

export default function AdminProjects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState(emptyForm)
  const [editId, setEditId] = useState(null)
  const [saving, setSaving] = useState(false)

  const load = () => {
    setLoading(true)
    projectsAPI.getAll()
      .then(({ data }) => setProjects(data.projects || data))
      .catch(() => toast.error('Failed to load projects'))
      .finally(() => setLoading(false))
  }

  useEffect(() => { load() }, [])

  const openAdd = () => { setForm(emptyForm); setEditId(null); setShowModal(true) }
  const openEdit = (p) => { setForm(p); setEditId(p._id); setShowModal(true) }

  const handleSave = async (e) => {
    e.preventDefault()
    setSaving(true)
    try {
      if (editId) {
        await projectsAPI.update(editId, form)
        toast.success('Project updated')
      } else {
        await projectsAPI.create(form)
        toast.success('Project added')
      }
      setShowModal(false)
      load()
    } catch {
      toast.error('Failed to save project')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this project?')) return
    try {
      await projectsAPI.delete(id)
      toast.success('Project deleted')
      load()
    } catch {
      toast.error('Failed to delete')
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold font-montserrat text-white">Projects</h2>
          <p className="text-gray-400 text-sm mt-1">Manage your project portfolio</p>
        </div>
        <button onClick={openAdd} className="btn-gold flex items-center gap-2 text-sm px-5 py-2.5">
          <FiPlus size={16} /> Add Project
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center py-20"><div className="loader" /></div>
      ) : (
        <div className="glass-card overflow-hidden border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-gray-400 text-xs uppercase tracking-wider">
                <th className="text-left px-5 py-3">Title</th>
                <th className="text-left px-5 py-3 hidden md:table-cell">Category</th>
                <th className="text-left px-5 py-3 hidden lg:table-cell">Location</th>
                <th className="text-left px-5 py-3 hidden md:table-cell">Status</th>
                <th className="text-right px-5 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.length === 0 ? (
                <tr><td colSpan={5} className="text-center py-12 text-gray-500">No projects yet</td></tr>
              ) : (
                projects.map((p) => (
                  <tr key={p._id} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                    <td className="px-5 py-3 text-white font-medium">{p.title}</td>
                    <td className="px-5 py-3 text-gray-400 hidden md:table-cell">{p.category}</td>
                    <td className="px-5 py-3 text-gray-400 hidden lg:table-cell">{p.location}</td>
                    <td className="px-5 py-3 hidden md:table-cell">
                      <span className={`px-2 py-0.5 rounded-full text-xs ${
                        p.status === 'Completed'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-gold-500/20 text-gold-400'
                      }`}>{p.status}</span>
                    </td>
                    <td className="px-5 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button onClick={() => openEdit(p)} className="p-1.5 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all">
                          <FiEdit size={14} />
                        </button>
                        <button onClick={() => handleDelete(p._id)} className="p-1.5 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all">
                          <FiTrash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-dark-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-card w-full max-w-lg border border-gold-500/20 p-6"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-white font-bold font-montserrat text-lg">
                {editId ? 'Edit Project' : 'Add New Project'}
              </h3>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-white">
                <FiX size={20} />
              </button>
            </div>
            <form onSubmit={handleSave} className="space-y-4">
              <input
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="Project Title *"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-gold-500/50 text-sm"
              />
              <div className="grid grid-cols-2 gap-4">
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  required
                  className="bg-dark-800 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-gold-500/50 text-sm"
                >
                  <option value="">Category *</option>
                  {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                </select>
                <select
                  value={form.status}
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                  className="bg-dark-800 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-gold-500/50 text-sm"
                >
                  <option>Ongoing</option>
                  <option>Completed</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  placeholder="Location"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-gold-500/50 text-sm"
                />
                <input
                  value={form.year}
                  onChange={(e) => setForm({ ...form, year: e.target.value })}
                  placeholder="Year"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-gold-500/50 text-sm"
                />
              </div>
              <input
                value={form.area}
                onChange={(e) => setForm({ ...form, area: e.target.value })}
                placeholder="Area (e.g. 5000 sq ft)"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-gold-500/50 text-sm"
              />
              <textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="Project description"
                rows={3}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-gold-500/50 text-sm resize-none"
              />
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowModal(false)} className="flex-1 btn-outline-gold py-2.5 text-sm">
                  Cancel
                </button>
                <button type="submit" disabled={saving} className="flex-1 btn-gold py-2.5 text-sm disabled:opacity-60">
                  {saving ? 'Saving...' : editId ? 'Update' : 'Add Project'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  )
}
