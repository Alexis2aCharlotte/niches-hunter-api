import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { webhookRouter } from './routes/webhook';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    service: 'Niches Hunter API',
    timestamp: new Date().toISOString()
  });
});

// Routes
app.use('/webhook', webhookRouter);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Niches Hunter API running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/health`);
  console.log(`📍 Webhook: POST http://localhost:${PORT}/webhook/subscribe`);
});

