import jwt from 'jsonwebtoken';

export const getToken = () => {
  try {
    return localStorage.getItem('authToken') || '';
  } catch {}
};

export const setToken = (token: string) => {
  try {
    localStorage.setItem('authToken', token);
  } catch {}
};

export const logout = () => {
  try {
    localStorage.setItem('authToken', '');
    if (window.location.pathname.includes('/app/')) {
      window.location.replace('/');
    }
  } catch {}
};

export const decodeToken = () => {
  const authToken = getToken();
  if (!authToken) return;
  return jwt.decode(authToken) as Utils.AuthToken;
};
