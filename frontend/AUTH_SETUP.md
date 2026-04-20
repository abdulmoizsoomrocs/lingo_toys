# Authentication System Setup Guide

## 📁 File Structure

```
src/
├── auth/
│   ├── Login.jsx              # Login page
│   ├── Register.jsx           # Register page
│   ├── AuthNavbar.jsx         # Nav with auth buttons
│   └── ProtectedRoute.jsx     # Route protection wrapper
├── pages/
│   ├── AuthHome.jsx           # Auth home page (shows login/register if not authenticated)
│   └── Home.jsx               # (Existing main home)
├── utils/
│   └── authHelper.js          # Auth helper functions
├── App.jsx                    # (Existing routing)
└── AppWithAuth.jsx            # NEW: Updated routing with auth (use this as reference)
```

## 🚀 Integration Steps

### Step 1: Copy All New Files
- `src/auth/Login.jsx`
- `src/auth/Register.jsx`
- `src/auth/AuthNavbar.jsx`
- `src/auth/ProtectedRoute.jsx`
- `src/pages/AuthHome.jsx`
- `src/utils/authHelper.js`

### Step 2: Update Your App.jsx
Replace your current `App.jsx` with the routing setup from `AppWithAuth.jsx`:

```jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AuthHome from "./pages/AuthHome";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ProtectedRoute from "./auth/ProtectedRoute";
import { isAuthenticated } from "./utils/authHelper";

// ... other imports

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuthenticated() ? <Home /> : <AuthHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Your existing routes */}
        <Route path="/products" element={<ProductGridPage />} />
        <Route path="/shop" element={<Shop />} />
        {/* ... etc */}
        
        {/* Optional: Protect checkout route */}
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckOut />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### Step 3: Update Navigation Component
Import and use `AuthNavbar` on pages that need auth buttons (optional):

```jsx
import AuthNavbar from '../auth/AuthNavbar';

export default function MyPage() {
  return (
    <>
      <AuthNavbar />
      {/* Your page content */}
    </>
  );
}
```

## 🔐 Features

### Authentication Helper Functions
Located in `src/utils/authHelper.js`:

```javascript
// Check if user is logged in
isAuthenticated() // returns boolean

// Set authentication state
setAuthenticated(true) // logs user in
setAuthenticated(false) // logs user out

// Validate email
validateEmail(email) // returns boolean

// Logout helper
logout() // clears localStorage
```

### Protected Routes
Use `ProtectedRoute` to protect pages:

```jsx
import ProtectedRoute from './auth/ProtectedRoute';

<Route
  path="/checkout"
  element={
    <ProtectedRoute>
      <CheckOut />
    </ProtectedRoute>
  }
/>
```

If user is not authenticated, they'll be redirected to `/login`.

## 📝 Demo Credentials
- Email: `demo@example.com`
- Password: `demo123`

(No backend needed - it's all UI-based)

## 🎨 Customization

### Change Colors
- Login page: Edit gradient colors in `Login.jsx` (purple/pink theme)
- Register page: Edit gradient colors in `Register.jsx` (cyan/blue theme)
- Buttons: Modify Tailwind classes for different colors

### Change Logo Text
Search for "LingoToys" in auth components and replace with your brand

### Add More Pages
Use `ProtectedRoute` to protect any page:

```jsx
<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>
```

## 🔄 Flow

1. **Not Logged In:**
   - User visits `/` → Shows `AuthHome` with Login/Register buttons
   - User clicks Login → Goes to `/login` page
   - After successful login → Redirected to `/`
   - Now sees main `Home` page

2. **Logged In:**
   - Navbar shows "✓ Logged In" + Logout button
   - Protected routes accessible
   - Logout clears localStorage and redirects home

3. **Registration:**
   - User fills form with email, password, confirm password
   - Validation checks all fields and password match
   - Success message → Redirect to login
   - Can now login with credentials

## 📱 Mobile Responsive
All components are fully responsive:
- Forms centered and scaled for mobile
- Buttons have proper touch targets
- Typography scales with screen size
- Gradients and shadows work on all devices

## ⚙️ localStorage Keys
- `auth`: Stores authentication state (`"true"` or removed)

You can inspect in browser DevTools → Application → localStorage

## 🐛 Troubleshooting

**"Can't access checkout"**
- Make sure you've wrapped it with `ProtectedRoute`
- Check that localStorage has `auth="true"`

**"Stuck on login page"**
- Check browser console for errors
- Verify email format is valid
- Password must be 6+ characters

**"Need to change redirect URL"**
- Edit the `navigate()` calls in `Login.jsx` and `Register.jsx`
- Currently redirects to `/` after login, `/login` after register
