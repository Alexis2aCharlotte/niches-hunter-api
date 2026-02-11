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

// Graceful shutdown handling
process.on('SIGTERM', () => {
  console.log('⚠️ SIGTERM received, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('⚠️ SIGINT received, shutting down gracefully...');
  process.exit(0);
});

// Start server - bind to 0.0.0.0 for Railway/Docker compatibility
app.listen(Number(PORT), '0.0.0.0', () => {
  console.log(`🚀 Niches Hunter API running on port ${PORT}`);
  console.log(`📍 Health check: http://0.0.0.0:${PORT}/health`);
  console.log(`📍 Webhook: POST http://0.0.0.0:${PORT}/webhook/subscribe`);
});

