# Prime Infratech — Backend

Node.js + Express REST API for Prime Infratech website.

## Tech Stack
- Node.js
- Express
- MongoDB (Mongoose)
- JWT Authentication
- Nodemailer

## Setup

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in the root:

```
PORT=5000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d
ADMIN_EMAIL=admin@primeinfratech.com
ADMIN_PASSWORD=your_admin_password
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_FROM=Prime Infratech <your_gmail@gmail.com>
CONTACT_EMAIL=primeinfratech0295@gmail.com
FRONTEND_URL=http://localhost:5173
MAX_FILE_SIZE=5242880
UPLOAD_PATH=./uploads
```

## Deploy on Render

1. Import this repo on [render.com](https://render.com)
2. Set Root Directory to `backend`
3. Build Command: `npm install`
4. Start Command: `node server.js`
5. Add all environment variables above
6. Deploy
