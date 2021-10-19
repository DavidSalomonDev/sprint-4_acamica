// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

// Add SDKs for Firebase products that you want to use
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_FIREBASE_APPID
// }

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
const db = getFirestore(app)

export default db