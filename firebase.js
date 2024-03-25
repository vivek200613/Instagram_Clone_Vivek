import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyD8N4hco7jh_IXrkoGPe36WB7hkj_vwmN8",
  authDomain: "rn-ig-clone-instgram-b3dfe.firebaseapp.com",
  projectId: "rn-ig-clone-instgram-b3dfe",
  storageBucket: "rn-ig-clone-instgram-b3dfe.appspot.com",
  messagingSenderId: "328446849833",
  appId: "1:328446849833:web:81d19cf18152154c1b7d38"
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()


export default firebase