import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi'

const BOT_NAME = 'Prime AI'

const QUICK_REPLIES = [
  'What services do you offer?',
  'How can I get a quote?',
  'What is your experience?',
  'How to contact you?',
]

const BOT_RESPONSES = {
  services: 'We offer Construction, Architecture, Road Projects, and Infrastructure Solutions. Each service is delivered with premium quality and precision.',
  quote: 'Getting a quote is easy! Click the "Get Free Quote" button or visit our Contact page. You can also WhatsApp us at +91 95546 79032 for an instant response.',
  experience: 'Prime Infratech has 1+ years of experience with 10+ completed projects and 10+ happy clients across North India.',
  contact: 'You can reach us at:\n📞 +91 95546 79032\n📧 primeinfratech0295@gmail.com\n📍 Raidopur, Azamgarh, UP\n\nOr use our Contact page for a detailed inquiry.',
  default: "Thank you for your message! Our team will get back to you shortly. For immediate assistance, please call us at +91 95546 79032 or WhatsApp us.",
}

function getBotReply(message) {
  const msg = message.toLowerCase()
  if (msg.includes('service') || msg.includes('offer') || msg.includes('work')) return BOT_RESPONSES.services
  if (msg.includes('quote') || msg.includes('price') || msg.includes('cost') || msg.includes('rate')) return BOT_RESPONSES.quote
  if (msg.includes('experience') || msg.includes('year') || msg.includes('project')) return BOT_RESPONSES.experience
  if (msg.includes('contact') || msg.includes('phone') || msg.includes('email') || msg.includes('address')) return BOT_RESPONSES.contact
  return BOT_RESPONSES.default
}

export default function AIChatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: 'bot',
      text: "👋 Hello! I'm Prime AI, your virtual assistant. How can I help you today?",
      time: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const sendMessage = (text) => {
    const userMsg = text || input.trim()
    if (!userMsg) return

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), from: 'user', text: userMsg, time: new Date() },
    ])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      setTyping(false)
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, from: 'bot', text: getBotReply(userMsg), time: new Date() },
      ])
    }, 1000 + Math.random() * 500)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="fixed bottom-24 left-6 z-50">
      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-3 w-80 bg-dark-900 border border-gold-500/20 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden flex flex-col"
            style={{ height: '420px' }}
          >
            {/* Header */}
            <div className="bg-gold-gradient px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-dark-900/30 flex items-center justify-center">
                  <FiMessageSquare size={16} className="text-dark-900" />
                </div>
                <div>
                  <div className="text-dark-900 font-bold text-sm">{BOT_NAME}</div>
                  <div className="text-dark-900/70 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-700 inline-block" />
                    Online
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-dark-900/70 hover:text-dark-900 transition-colors"
              >
                <FiX size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                      msg.from === 'user'
                        ? 'bg-gold-gradient text-dark-900 rounded-br-sm'
                        : 'bg-white/10 text-white rounded-bl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="bg-white/10 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-gold-500"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick Replies */}
            <div className="px-3 pb-2 flex gap-2 overflow-x-auto scrollbar-hide">
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="flex-shrink-0 text-xs px-3 py-1.5 rounded-full border border-gold-500/30 text-gold-400 hover:bg-gold-500/10 transition-colors whitespace-nowrap"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/10 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Type a message..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-gold-500/50 text-sm"
              />
              <button
                onClick={() => sendMessage()}
                disabled={!input.trim()}
                className="w-9 h-9 rounded-xl bg-gold-gradient flex items-center justify-center disabled:opacity-40 hover:scale-105 transition-transform"
              >
                <FiSend size={14} className="text-dark-900" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-full bg-dark-800 border border-gold-500/40 flex items-center justify-center shadow-lg hover:border-gold-500 transition-colors"
        aria-label="Open AI Chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
              <FiX size={20} className="text-gold-500" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
              <FiMessageSquare size={20} className="text-gold-500" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
