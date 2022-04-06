import firebase from 'firebase/app';
import 'firebase/auth';

// Important firebase stuff for initializing authenication API
const app = firebase.initializeApp({
    apiKey: "AIzaSyCQeHDCFK7ucNWXYzpk1JIQzPFBETw0eqE",
    authDomain: "interactive-roadmap-cb8c0.firebaseapp.com",
    projectId: "interactive-roadmap-cb8c0",
    storageBucket: "interactive-roadmap-cb8c0.appspot.com",
    messagingSenderId: "801535585620",
    appId: "1:801535585620:web:39a8267412cf14e9baacc1"
});

// Export to be used in different components
export const auth = app.auth();
export default app;
