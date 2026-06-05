# 🗄️ MongoDB Integration - Complete Setup

## ✅ What's Already Implemented

### 1. **MongoDB Atlas Connection** ✓
- **Database Name**: `lingo_toys`
- **Connection**: Configured in `backend/.env`
- **Status**: Connected and running

### 2. **User Model** ✓
**File**: `backend/models/User.js`

```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required, unique, lowercase),
  password: String (required, hashed with bcrypt),
  role: String (default: "user"),
  createdAt: Date,
  updatedAt: Date
}
```

**Features:**
- ✅ Email is unique at database level
- ✅ Password automatically hashed before saving
- ✅ Timestamps automatically managed
- ✅ Role-based access (default: "user")

### 3. **Authentication API** ✓
**File**: `backend/controllers/authController.js`

**Endpoints:**
- `POST /api/auth/register` - Creates new user in MongoDB
- `POST /api/auth/login` - Queries user from MongoDB, verifies password
- `GET /api/auth/profile` - Retrieves user data from MongoDB (protected)
- `POST /api/auth/logout` - Clears session (no DB needed)

### 4. **JWT Middleware** ✓
**File**: `backend/middleware/auth.js`

- Verifies JWT tokens
- Protects routes
- Attaches user data to requests

### 5. **Routes** ✓
**File**: `backend/routes/authRoutes.js`

```javascript
POST   /api/auth/register  (public)
POST   /api/auth/login     (public)
GET    /api/auth/profile   (protected)
POST   /api/auth/logout    (protected)
```

---

## 🔄 How Data Flows to MongoDB

### Registration Flow
```
User submits form
    ↓
Frontend POST /api/auth/register
    ↓
Backend validates input
    ↓
Backend hashes password with bcryptjs
    ↓
Backend saves to MongoDB: db.users.insertOne({...})
    ↓
JWT generated and returned
    ↓
Frontend stores JWT in localStorage
```

### Login Flow
```
User enters email/password
    ↓
Frontend POST /api/auth/login
    ↓
Backend queries MongoDB: db.users.findOne({ email })
    ↓
Backend compares password with bcrypt
    ↓
If match: generate JWT and return
    ↓
Frontend stores JWT and redirects to home
```

### Profile Retrieval Flow
```
Frontend sends GET /api/auth/profile with JWT
    ↓
Backend verifies JWT
    ↓
Backend extracts user ID from token
    ↓
Backend queries: db.users.findById(userId)
    ↓
Returns user data (no password)
```

---

## 🧪 Test the Database Integration

### Option 1: Using REST Client (VSCode Extension)

Create file `test-auth.http`:
```http
### Register new user
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}

### Login
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}

### Get Profile (replace TOKEN with actual JWT)
GET http://localhost:5000/api/auth/profile
Authorization: Bearer YOUR_JWT_TOKEN_HERE
```

### Option 2: Using cURL

```bash
# Register
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","password":"password123","confirmPassword":"password123"}'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'

# Get Profile
curl -X GET http://localhost:5000/api/auth/profile \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```

### Option 3: Using MongoDB Compass

1. Download [MongoDB Compass](https://www.mongodb.com/products/compass)
2. Connect to: `mongodb://Moiz:06072004@ac-lx3tkbv-shard-00-00.hkbcp2r.mongodb.net`
3. Navigate to database: `lingo_toys`
4. View collection: `users`
5. See all registered users!

---

## 📊 MongoDB Collections

### `users` Collection
```javascript
// Example document
{
  "_id": ObjectId("6768a1b2c3d4e5f6g7h8i9j0"),
  "name": "John Doe",
  "email": "john@example.com",
  "password": "$2a$10$...", // bcrypt hashed
  "role": "user",
  "createdAt": ISODate("2026-06-06T10:30:00Z"),
  "updatedAt": ISODate("2026-06-06T10:30:00Z")
}
```

### Existing Collections (Preserved)
- `products` - Product catalog
- `newsletters` - Newsletter subscribers

---

## 🔒 Security Features Implemented

✅ **Password Hashing**: Bcrypt with 10 salt rounds
✅ **Email Unique Constraint**: Database level validation
✅ **JWT Tokens**: 30-day expiration
✅ **Protected Routes**: Middleware verification
✅ **Input Validation**: Frontend + Backend
✅ **CORS Enabled**: For cross-origin requests

---

## 🚀 Current Status

**Backend**: ✅ Running on port 5000
**Database**: ✅ Connected to MongoDB Atlas
**User Model**: ✅ Created and ready
**Auth APIs**: ✅ Fully functional
**Frontend**: ✅ Integrated with APIs

---

## 📝 Next Steps

1. **Start Frontend**:
   ```bash
   cd frontend
   npm run dev
   ```

2. **Test Registration**:
   - Go to http://localhost:5173/register
   - Fill form and submit
   - User will be saved to MongoDB

3. **Test Login**:
   - Go to http://localhost:5173/login
   - Use registered credentials
   - Will be authenticated via JWT

4. **View in MongoDB**:
   - Open MongoDB Compass
   - Connect and view the new users in `db.users`

---

## 🎯 Summary

- **MongoDB Database**: Connected ✓
- **User Model**: Created with all required fields ✓
- **Password Hashing**: Bcrypt implemented ✓
- **User Registration**: Saves to MongoDB ✓
- **User Login**: Queries and validates from MongoDB ✓
- **JWT Tokens**: Generated and verified ✓
- **Protected Routes**: Middleware protection ✓
- **Frontend Integration**: Connected to APIs ✓

**Users are now being stored in MongoDB!** 🎉
