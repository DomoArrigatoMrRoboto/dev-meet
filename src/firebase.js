import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAl941qFkEXgUBM2nTEQjoBphKzY-hmqz4",
  authDomain: "devmeet-d3ba2.firebaseapp.com",
  projectId: "devmeet-d3ba2",
  storageBucket: "devmeet-d3ba2.firebasestorage.app",
  messagingSenderId: "446606179105",
  appId: "1:446606179105:web:ebc62d37f49362d2fddc60",
  measurementId: "G-QJMSKCLWST"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
