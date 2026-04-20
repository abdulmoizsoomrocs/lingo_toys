// Auth Helper Functions

export const isAuthenticated = () => {
  return localStorage.getItem('auth') === 'true';
};

export const setAuthenticated = (value) => {
  if (value) {
    localStorage.setItem('auth', 'true');
  } else {
    localStorage.removeItem('auth');
  }
};

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const logout = () => {
  localStorage.removeItem('auth');
};
