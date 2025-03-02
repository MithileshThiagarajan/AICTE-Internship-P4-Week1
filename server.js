import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { connectDB } from './Database.js';
import userRouter from './routes/userRouter.js';
import transactionRouter from './routes/Transactions.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use('/api/users', userRouter);
app.use('/api/transactions', transactionRouter);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});