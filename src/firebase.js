import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/**
 * Save a participant's completed survey responses to Firestore.
 *
 * @param {string} sessionId  - UUID generated at session start
 * @param {Array}  rankings   - Array of { sample_id, rank1, rank2, rank3 } objects
 * @returns {Promise<string>} - Firestore document ID
 */
export async function saveResponse(sessionId, rankings) {
  const docRef = await addDoc(collection(db, "responses"), {
    session_id: sessionId,
    submitted_at: serverTimestamp(),
    rankings,
  });
  return docRef.id;
}
