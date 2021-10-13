// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCuu31LDJr3a4c80TXK_FB_G4fyGuglwjg',
  authDomain: 'devs-united-f1635.firebaseapp.com',
  projectId: 'devs-united-f1635',
  storageBucket: 'devs-united-f1635.appspot.com',
  messagingSenderId: '486873967894',
  appId: '1:486873967894:web:f2d20efd1997162e1a7437',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firestore
export const db = getFirestore(app)
