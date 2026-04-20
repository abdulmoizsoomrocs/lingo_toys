import express from 'express';
import { 
  subscribeNewsletter, 
  getSubscribers, 
  unsubscribeNewsletter 
} from '../controllers/newsletterController.js';

const router = express.Router();

// Subscribe to newsletter
router.post('/subscribe', subscribeNewsletter);

// Get all subscribers (admin)
router.get('/subscribers', getSubscribers);

// Unsubscribe from newsletter
router.post('/unsubscribe', unsubscribeNewsletter);

export default router;
