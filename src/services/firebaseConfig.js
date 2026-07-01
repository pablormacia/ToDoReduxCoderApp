import { initializeApp } from "firebase/app";

import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";

import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyB1dWnRTfTVd3Hw3gAGZSHvKToO0XqAVx8",
  authDomain: "todoreduxcoderapp.firebaseapp.com",
  databaseURL:
    "https://todoreduxcoderapp-default-rtdb.firebaseio.com",
  projectId: "todoreduxcoderapp",
  storageBucket: "todoreduxcoderapp.firebasestorage.app",
  messagingSenderId: "522511036826",
  appId: "1:522511036826:web:532ac5d88292b1e1208a23",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export default app;