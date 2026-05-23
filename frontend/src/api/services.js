import api from './axios'

// Projects
export const projectsAPI = {
  getAll: (params) => api.get('/projects', { params }),
  getById: (id) => api.get(`/projects/${id}`),
  create: (data) => api.post('/projects', data, { headers: { 'Content-Type': 'multipart/form-data' } }),
  update: (id, data) => api.put(`/projects/${id}`, data, { headers: { 'Content-Type': 'multipart/form-data' } }),
  delete: (id) => api.delete(`/projects/${id}`),
}

// Contacts
export const contactsAPI = {
  submit: (data) => api.post('/contacts', data),
  getAll: () => api.get('/contacts'),
  markRead: (id) => api.patch(`/contacts/${id}/read`),
  delete: (id) => api.delete(`/contacts/${id}`),
}

// Testimonials
export const testimonialsAPI = {
  getAll: () => api.get('/testimonials'),
  create: (data) => api.post('/testimonials', data),
  update: (id, data) => api.put(`/testimonials/${id}`, data),
  delete: (id) => api.delete(`/testimonials/${id}`),
  toggleApprove: (id) => api.patch(`/testimonials/${id}/approve`),
}

// Gallery
export const galleryAPI = {
  getAll: () => api.get('/gallery'),
  upload: (data) => api.post('/gallery', data, { headers: { 'Content-Type': 'multipart/form-data' } }),
  delete: (id) => api.delete(`/gallery/${id}`),
}

// Callbacks
export const callbacksAPI = {
  submit: (data) => api.post('/callbacks', data),
  getAll: () => api.get('/callbacks'),
}

// Stats
export const statsAPI = {
  get: () => api.get('/stats'),
}
