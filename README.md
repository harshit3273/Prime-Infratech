# Prime Infratech Ventures — Full Stack Website

A luxury, modern, fully responsive website for a premium construction company.

---

## 🗂️ Project Structure

```
Prime-Infratech/
├── frontend/          # React + Vite + Tailwind CSS
└── backend/           # Node.js + Express + MongoDB
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (free tier works)
- Gmail account (for email notifications)

---

### 1. Backend Setup

```bash
cd backend
npm install
```

Edit `.env` and fill in your values:
```
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/prime-infratech
JWT_SECRET=your_secret_key_here
ADMIN_EMAIL=admin@primeinfratech.com
ADMIN_PASSWORD=Admin@123456
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
```

Start the backend:
```bash
npm run dev
```

Seed the admin account (run once):
```
POST http://localhost:5000/api/auth/seed
```

---

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Open: http://localhost:3000

---

## 🔐 Admin Panel

URL: http://localhost:3000/admin/login

Default credentials (set in backend `.env`):
- Email: `admin@primeinfratech.com`
- Password: `Admin@123456`

**Change these before deploying to production.**

---

## 📄 Pages

| Page | Route |
|------|-------|
| Home | `/` |
| About | `/about` |
| Services | `/services` |
| Projects | `/projects` |
| Contact | `/contact` |
| Admin Login | `/admin/login` |
| Admin Dashboard | `/admin` |
| Admin Projects | `/admin/projects` |
| Admin Contacts | `/admin/contacts` |
| Admin Testimonials | `/admin/testimonials` |
| Admin Gallery | `/admin/gallery` |

---

## 🌐 API Endpoints

### Public
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/login` | Admin login |
| GET | `/api/projects` | Get all projects |
| GET | `/api/projects/:id` | Get single project |
| GET | `/api/testimonials` | Get approved testimonials |
| GET | `/api/gallery` | Get gallery images |
| POST | `/api/contacts` | Submit contact form |
| POST | `/api/callbacks` | Request callback |
| GET | `/api/health` | Health check |

### Admin (JWT required)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/auth/me` | Get current user |
| POST | `/api/projects` | Create project |
| PUT | `/api/projects/:id` | Update project |
| DELETE | `/api/projects/:id` | Delete project |
| GET | `/api/contacts` | Get all contacts |
| PATCH | `/api/contacts/:id/read` | Mark contact read |
| DELETE | `/api/contacts/:id` | Delete contact |
| POST | `/api/testimonials` | Add testimonial |
| PATCH | `/api/testimonials/:id/approve` | Toggle approve |
| DELETE | `/api/testimonials/:id` | Delete testimonial |
| POST | `/api/gallery` | Upload images |
| DELETE | `/api/gallery/:id` | Delete image |
| GET | `/api/stats` | Dashboard stats |

---

## 🎨 Tech Stack

**Frontend**
- React 18 + Vite
- Tailwind CSS (dark luxury theme)
- Framer Motion (animations)
- Swiper.js (sliders)
- React Hook Form + Zod (validation)
- React Router v6
- Axios

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs (password hashing)
- Nodemailer (email)
- Multer (file uploads)
- Helmet + Rate Limiting (security)

---

## 🚢 Deployment

**Frontend → Vercel / Netlify**
```bash
cd frontend
npm run build
# Upload dist/ folder
```

Set environment variable:
```
VITE_API_URL=https://your-backend.onrender.com/api
```

**Backend → Render / Railway**
- Set all `.env` variables in the platform dashboard
- Set `NODE_ENV=production`
- Build command: `npm install`
- Start command: `npm start`

**Database → MongoDB Atlas**
- Create free cluster
- Whitelist `0.0.0.0/0` for Render/Railway
- Copy connection string to `MONGO_URI`

---

## 🔒 Security Features

- JWT authentication with expiry
- bcrypt password hashing (12 rounds)
- Rate limiting (100 req/15min, 10 login/15min)
- Helmet security headers
- CORS restricted to frontend URL
- Input validation on all routes
- Protected admin routes
- Environment variables for all secrets

---

## 📱 Features

- ✅ Luxury dark gold theme
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth Framer Motion animations
- ✅ AI Chatbot (rule-based)
- ✅ WhatsApp floating button
- ✅ Working contact form with email notification
- ✅ Project gallery with filter & modal
- ✅ Animated counters
- ✅ Admin dashboard (CRUD for all content)
- ✅ Image upload system
- ✅ SEO meta tags, sitemap, robots.txt
- ✅ Page loader animation
- ✅ Scroll to top button

---

## 📞 Contact Info to Update

Search and replace these placeholders before going live:

| Placeholder | Replace With |
|-------------|-------------|
| `+91 99999 99999` | Your actual phone number |
| `919999999999` | Your WhatsApp number (no +) |
| `info@primeinfratech.com` | Your email |
| `Sector 18, Noida` | Your actual address |
| `primeinfratech.com` | Your actual domain |
