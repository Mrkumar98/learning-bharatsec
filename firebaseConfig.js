import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCZzkkofDFFdaRjQfDMg6nueLrFQ3q5_Wg",
  authDomain: "learning-bharatsec-44bae.firebaseapp.com",
  projectId: "learning-bharatsec-44bae",
  storageBucket: "learning-bharatsec-44bae.appspot.com",
  messagingSenderId: "935784739808",
  appId: "1:935784739808:web:619bbb397d4a8da6633185",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
