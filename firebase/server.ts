import admin from 'firebase-admin';
import serviceAccount from '../secrets/service-account.json';

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });
}

const auth = admin.auth();

const serverVariables = {
  auth,
};

export default serverVariables;
