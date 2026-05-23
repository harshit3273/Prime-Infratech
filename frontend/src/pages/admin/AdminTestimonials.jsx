import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { FiPlus, FiTrash2, FiStar, FiX, FiCheck } from 'react-icons/fi'
import { testimonialsAPI } from '../../api/services'

const emptyForm = { name: '', role: '', rating: 5, text: '', approved: false }

export default function AdminTestimonials() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState(emptyForm)
  const [saving, setSaving] = useState(false)

  const load = () => {
    setLoading(true)
    testimonialsAPI.getAll()
      .then(({ data }) => setItems(data.testimonials || data))
      .catch(() => toast.error('Failed to load'))
      .finally(() => setLoading(false))
  }

  useEffect(() => { load() }, [])

  const handleSave = async (e) => {
    e.preventDefault()
    setSaving(true)
    try {
      await testimonialsAPI.create(form)
      toast.success('Testimonial added')
      setShowModal(false)
      setForm(emptyForm)
      load()
    } catch {
      toast.error('Failed to save')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this testimonial?')) return
    try {
      await testimonialsAPI.delete(id)
      toast.success('Deleted')
      load()
    } catch {
      toast.error('Failed to delete')
    }
  }

  const handleToggle = async (id) => {
    try {
      await testimonialsAPI.toggleApprove(id)
      load()
    } catch {
      toast.error('Failed to update')
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold font-montserrat text-white">Testimonials</h2>
          <p className="text-gray-400 text-sm mt-1">Manage client testimonials</p>
        </div>
        <button onClick={() => setShowModal(true)} className="btn-gold flex items-center gap-2 text-sm px-5 py-2.5">
          <FiPlus size={16} /> Add Testimonial
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center py-20"><div className="loader" /></div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.length === 0 ? (
            <div className="col-span-2 glass-card p-12 text-center text-gray-500">No testimonials yet</div>
          ) : (
            items.map((t) => (
              <div key={t._id} className="glass-card p-5 border border-white/10">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <FiStar key={i} size={14} className="text-gold-500 fill-gold-500" />
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleToggle(t._id)}
                      className={`p-1.5 rounded-lg transition-all ${
                        t.approved
                          ? 'text-green-400 bg-green-500/10'
                          : 'text-gray-400 hover:text-green-400 hover:bg-green-500/10'
                      }`}
                      title={t.approved ? 'Approved' : 'Approve'}
                    >
                      <FiCheck size={14} />
                    </button>
                    <button
                      onClick={() => handleDelete(t._id)}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all"
                    >
                      <FiTrash2 size={14} />
                    </button>
                  </div>
                </div>
                <p className="text-gray-300 text-sm italic mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center text-dark-900 font-bold text-xs">
                    {t.name?.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                  {t.approved && (
                    <span className="ml-auto px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 text-xs border border-green-500/20">
                      Approved
                    </span>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 z-50 bg-dark-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-card w-full max-w-md border border-gold-500/20 p-6"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-white font-bold font-montserrat text-lg">Add Testimonial</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-white">
                <FiX size={20} />
              </button>
            </div>
            <form onSubmit={handleSave} className="space-y-4">
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Client Name *"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-gold-500/50 text-sm"
              />
              <input
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                placeholder="Role / Company"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-gold-500/50 text-sm"
              />
              <div>
                <label className="text-gray-400 text-xs mb-2 block">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setForm({ ...form, rating: n })}
                      className={`text-xl transition-colors ${n <= form.rating ? 'text-gold-500' : 'text-gray-600'}`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
              <textarea
                value={form.text}
                onChange={(e) => setForm({ ...form, text: e.target.value })}
                placeholder="Testimonial text *"
                required
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-gold-500/50 text-sm resize-none"
              />
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowModal(false)} className="flex-1 btn-outline-gold py-2.5 text-sm">
                  Cancel
                </button>
                <button type="submit" disabled={saving} className="flex-1 btn-gold py-2.5 text-sm disabled:opacity-60">
                  {saving ? 'Saving...' : 'Add Testimonial'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  )
}
