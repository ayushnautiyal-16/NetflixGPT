// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVifP8edqlONfvtyIUQ9PwJeLjNQ0hO_Q",
    authDomain: "netflixgpt-c725a.firebaseapp.com",
    projectId: "netflixgpt-c725a",
    storageBucket: "netflixgpt-c725a.appspot.com",
    messagingSenderId: "966850435769",
    appId: "1:966850435769:web:4648a0f93dc9a6ee471968",
    measurementId: "G-6752GPTX5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();