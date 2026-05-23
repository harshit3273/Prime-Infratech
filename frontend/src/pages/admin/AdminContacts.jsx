import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { FiTrash2, FiMail, FiPhone, FiCheck } from 'react-icons/fi'
import { contactsAPI } from '../../api/services'

export default function AdminContacts() {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)

  const load = () => {
    setLoading(true)
    contactsAPI.getAll()
      .then(({ data }) => setContacts(data.contacts || data))
      .catch(() => toast.error('Failed to load contacts'))
      .finally(() => setLoading(false))
  }

  useEffect(() => { load() }, [])

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this message?')) return
    try {
      await contactsAPI.delete(id)
      toast.success('Message deleted')
      load()
    } catch {
      toast.error('Failed to delete')
    }
  }

  const handleMarkRead = async (id) => {
    try {
      await contactsAPI.markRead(id)
      load()
    } catch {
      toast.error('Failed to update')
    }
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold font-montserrat text-white">Contact Messages</h2>
        <p className="text-gray-400 text-sm mt-1">{contacts.filter(c => !c.read).length} unread messages</p>
      </div>

      {loading ? (
        <div className="flex justify-center py-20"><div className="loader" /></div>
      ) : (
        <div className="space-y-4">
          {contacts.length === 0 ? (
            <div className="glass-card p-12 text-center text-gray-500">No messages yet</div>
          ) : (
            contacts.map((c) => (
              <div
                key={c._id}
                className={`glass-card p-5 border transition-all ${
                  c.read ? 'border-white/10' : 'border-gold-500/30 bg-gold-500/3'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-white font-semibold">{c.name}</span>
                      {!c.read && (
                        <span className="px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-400 text-xs">New</span>
                      )}
                      <span className="text-gray-500 text-xs ml-auto">
                        {new Date(c.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1"><FiMail size={12} />{c.email}</span>
                      <span className="flex items-center gap-1"><FiPhone size={12} />{c.phone}</span>
                      {c.service && (
                        <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-xs border border-blue-500/20">
                          {c.service}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 text-sm">{c.message}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {!c.read && (
                      <button
                        onClick={() => handleMarkRead(c._id)}
                        className="p-1.5 rounded-lg text-gray-400 hover:text-green-400 hover:bg-green-500/10 transition-all"
                        title="Mark as read"
                      >
                        <FiCheck size={14} />
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(c._id)}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all"
                    >
                      <FiTrash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}
