import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connect from './route/approute.js'
import {Base} from './config/dbconn.js'

dotenv.config()
const app =express()
app.use(cors({
  origin: true,
  credentials: true
}))
app.use(express.json())

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