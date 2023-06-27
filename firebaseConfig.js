// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpNeU3S4BszoViujoAsngsNy5TF-Di-wg",
  authDomain: "rc-marketplace-social-logins.firebaseapp.com",
  projectId: "rc-marketplace-social-logins",
  storageBucket: "rc-marketplace-social-logins.appspot.com",
  messagingSenderId: "54913059949",
  appId: "1:54913059949:web:80e70cea8264ce37260364",
  measurementId: "G-CH86M3FBN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;