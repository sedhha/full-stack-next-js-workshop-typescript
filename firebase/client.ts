import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import firebaseConfig from '@/secrets/frontend-secrets.json';

if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

const app = getApp();
const auth = getAuth(app);

const Client = { auth };
export default Client;
