import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCDFfurjUcr18SyEvVjh57rrBAT7i3QjGE",
  authDomain: "dolce-q.firebaseapp.com",
  projectId: "dolce-q",
  storageBucket: "dolce-q.appspot.com",
  messagingSenderId: "602825840156",
  appId: "1:602825840156:web:17cc996b8b7d2b93d0b1d9"
};
export const initFirebase = initializeApp(firebaseConfig);
