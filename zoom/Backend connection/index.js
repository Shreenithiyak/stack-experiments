import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connect from './route/approute.js'
import {Base} from './config/dbconn.js'

dotenv.config()
const app =express()
const allowedOrigins = [
  'https://stack-experiments.onrender.com',
  'https://stack-experiment.vercel.app',
  'http://localhost:5173',
  'http://localhost:5174'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json())

// Security header for Google OAuth Popups
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
  next();
});

app.use('/api/user',connect)
const startServer = async () => {
  try {
    await Base();
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`server connected http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
};

startServer();

//http://localhost:5000/api/user