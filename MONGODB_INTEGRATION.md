# MongoDB Integration

The backend connects to MongoDB with Mongoose. Set `MONGO_URI` in `backend/.env`; the connection is initialized by `backend/config/db.js` when the server starts.

## Collections

- `products` stores the product catalog, including descriptions, specifications, policies, reviews, and image URLs.
- `newsletters` stores email subscriptions and their subscribed or unsubscribed status.

## API Routes

- `GET /api/products` lists products and supports the optional `filter` query parameter.
- `GET /api/products/:id` returns a product by ID.
- `POST /api/newsletter/subscribe` subscribes an email address.
- `GET /api/newsletter/subscribers` lists subscribed email addresses.
- `POST /api/newsletter/unsubscribe` unsubscribes an email address.

The product and newsletter schemas are defined in `backend/models/Product.js` and `backend/models/Newsletter.js`.
