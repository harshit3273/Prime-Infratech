# Prime Infratech — Frontend

React + Vite frontend for Prime Infratech website.

## Tech Stack
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Environment Variables

Create a `.env` file in the root:

```
VITE_API_URL=http://localhost:5000/api
```

## Deploy on Vercel

1. Import this repo on [vercel.com](https://vercel.com)
2. Set Root Directory to `frontend`
3. Add environment variable: `VITE_API_URL` = your backend URL
4. Deploy
