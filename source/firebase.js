import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB-HGhj3YJkyacFKpHndYP44FCryP6Fzkk',
  authDomain: 'expense-tracker-d04a0.firebaseapp.com',
  projectId: 'expense-tracker-d04a0',
  storageBucket: 'expense-tracker-d04a0.appspot.com',
  messagingSenderId: '48669336584',
  appId: '1:48669336584:web:02f9840fa0c618fd515dbd',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
