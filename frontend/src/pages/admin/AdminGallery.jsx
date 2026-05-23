import { useEffect, useState, useRef } from 'react'
import toast from 'react-hot-toast'
import { FiUpload, FiTrash2, FiImage } from 'react-icons/fi'
import { galleryAPI } from '../../api/services'

export default function AdminGallery() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const fileRef = useRef()

  const load = () => {
    setLoading(true)
    galleryAPI.getAll()
      .then(({ data }) => setImages(data.images || data))
      .catch(() => toast.error('Failed to load gallery'))
      .finally(() => setLoading(false))
  }

  useEffect(() => { load() }, [])

  const handleUpload = async (e) => {
    const files = Array.from(e.target.files)
    if (!files.length) return
    setUploading(true)
    try {
      const fd = new FormData()
      files.forEach((f) => fd.append('images', f))
      await galleryAPI.upload(fd)
      toast.success(`${files.length} image(s) uploaded`)
      load()
    } catch {
      toast.error('Upload failed')
    } finally {
      setUploading(false)
      fileRef.current.value = ''
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this image?')) return
    try {
      await galleryAPI.delete(id)
      toast.success('Image deleted')
      load()
    } catch {
      toast.error('Failed to delete')
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold font-montserrat text-white">Gallery</h2>
          <p className="text-gray-400 text-sm mt-1">{images.length} images</p>
        </div>
        <button
          onClick={() => fileRef.current.click()}
          disabled={uploading}
          className="btn-gold flex items-center gap-2 text-sm px-5 py-2.5 disabled:opacity-60"
        >
          <FiUpload size={16} />
          {uploading ? 'Uploading...' : 'Upload Images'}
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleUpload}
        />
      </div>

      {loading ? (
        <div className="flex justify-center py-20"><div className="loader" /></div>
      ) : images.length === 0 ? (
        <div
          onClick={() => fileRef.current.click()}
          className="glass-card p-16 text-center border-2 border-dashed border-white/10 hover:border-gold-500/30 transition-colors cursor-pointer"
        >
          <FiImage size={40} className="text-gray-600 mx-auto mb-3" />
          <p className="text-gray-500">Click to upload images</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((img) => (
            <div key={img._id} className="group relative aspect-square rounded-xl overflow-hidden bg-dark-800 border border-white/10">
              <img
                src={img.url}
                alt={img.name || 'Gallery image'}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-dark-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  onClick={() => handleDelete(img._id)}
                  className="w-9 h-9 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 hover:bg-red-500/40 transition-colors"
                >
                  <FiTrash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
