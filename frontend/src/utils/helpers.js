/**
 * Format a number with commas
 * @param {number} num
 * @returns {string}
 */
export const formatNumber = (num) =>
  new Intl.NumberFormat('en-IN').format(num)

/**
 * Truncate text to a given length
 * @param {string} text
 * @param {number} maxLength
 * @returns {string}
 */
export const truncate = (text, maxLength = 100) =>
  text.length > maxLength ? `${text.slice(0, maxLength)}...` : text

/**
 * Format date to readable string
 * @param {string|Date} date
 * @returns {string}
 */
export const formatDate = (date) =>
  new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

/**
 * Build WhatsApp URL
 * @param {string} phone - without +
 * @param {string} message
 * @returns {string}
 */
export const whatsappUrl = (phone, message = '') =>
  `https://wa.me/${phone}${message ? `?text=${encodeURIComponent(message)}` : ''}`

/**
 * Scroll to element by ID
 * @param {string} id
 */
export const scrollToId = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/**
 * Validate Indian phone number
 * @param {string} phone
 * @returns {boolean}
 */
export const isValidIndianPhone = (phone) =>
  /^[6-9]\d{9}$/.test(phone.replace(/\s+/g, ''))
