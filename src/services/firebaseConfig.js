// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//Las claves deberían ir en archivos de variables de entorno. Cuidado. Proyecto con fines educativos.
const firebaseConfig = {
  apiKey: "AIzaSyB1dWnRTfTVd3Hw3gAGZSHvKToO0XqAVx8",
  authDomain: "todoreduxcoderapp.firebaseapp.com",
  databaseURL: "https://todoreduxcoderapp-default-rtdb.firebaseio.com",
  projectId: "todoreduxcoderapp",
  storageBucket: "todoreduxcoderapp.firebasestorage.app",
  messagingSenderId: "522511036826",
  appId: "1:522511036826:web:532ac5d88292b1e1208a23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;