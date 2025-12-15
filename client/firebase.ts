import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

console.log("🔥 Firebase Configuration:");
console.log("Project ID:", import.meta.env.VITE_FIREBASE_PROJECT_ID);
console.log("Auth Domain:", import.meta.env.VITE_FIREBASE_AUTH_DOMAIN);
console.log("Storage Bucket:", import.meta.env.VITE_FIREBASE_STORAGE_BUCKET);
console.log("Full Config:", firebaseConfig);

export const app = initializeApp(firebaseConfig);

// Initialize Firestore with long polling to fix hanging requests
// AND connect to the new named database "spacement-blog"
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
}, "spacement-blog");

export const storage = getStorage(app);
export const auth = getAuth(app);

console.log("✅ Firebase initialized!");
console.log("Database:", db);
console.log("Database ID:", (db as any)._databaseId);

