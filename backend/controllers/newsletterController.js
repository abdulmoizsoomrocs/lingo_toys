import Newsletter from '../models/Newsletter.js';

// Subscribe to newsletter
export const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    // Validate email
    if (!email || !email.trim()) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Email regex validation
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Please provide a valid email' });
    }

    // Check if email already exists
    const existingSubscriber = await Newsletter.findOne({ email: email.toLowerCase() });
    if (existingSubscriber) {
      if (existingSubscriber.status === 'subscribed') {
        return res.status(400).json({ message: 'Email already subscribed' });
      }
      // If previously unsubscribed, resubscribe
      existingSubscriber.status = 'subscribed';
      await existingSubscriber.save();
      return res.status(200).json({ 
        message: 'Welcome back! You have been resubscribed',
        email: existingSubscriber.email,
      });
    }

    // Create new subscriber
    const newSubscriber = new Newsletter({
      email: email.toLowerCase(),
      status: 'subscribed',
    });

    await newSubscriber.save();

    res.status(201).json({ 
      message: 'Successfully subscribed to newsletter! Get 15% off your first order.',
      email: newSubscriber.email,
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

// Get all subscribers (for admin)
export const getSubscribers = async (req, res) => {
  try {
    const subscribers = await Newsletter.find({ status: 'subscribed' }).select('email subscribedAt');
    res.status(200).json({ count: subscribers.length, subscribers });
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Unsubscribe from newsletter
export const unsubscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const subscriber = await Newsletter.findOne({ email: email.toLowerCase() });
    if (!subscriber) {
      return res.status(404).json({ message: 'Email not found' });
    }

    subscriber.status = 'unsubscribed';
    await subscriber.save();

    res.status(200).json({ message: 'You have been unsubscribed from our newsletter' });
  } catch (error) {
    console.error('Unsubscribe error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
