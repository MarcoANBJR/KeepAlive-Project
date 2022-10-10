import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAG5xOi2ikQnEzD1wSXIGhsKdW5ijtrXB8",
    authDomain: "keepalive-49b72.firebaseapp.com",
    databaseURL: "https://keepalive-49b72-default-rtdb.firebaseio.com",
    projectId: "keepalive-49b72",
    storageBucket: "keepalive-49b72.appspot.com",
    messagingSenderId: "656963504013",
    appId: "1:656963504013:web:5d74d0cc0e8d59d5cb9fc4",
    measurementId: "G-HVCHEQFGXQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);