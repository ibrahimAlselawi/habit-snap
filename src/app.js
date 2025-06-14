import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getAuth, signInAnonymously } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyAn05jbLQDFZ1pIALncWbjk2imxvDdVMN0",
  authDomain: "habbit-snap.firebaseapp.com",
  projectId: "habbit-snap",
  storageBucket: "habbit-snap.firebasestorage.app",
  messagingSenderId: "196873147037",
  appId: "1:196873147037:web:6d2dd61218a982f5e8fa74"

};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

signInAnonymously(auth).then(() => {
  console.log('Signed in anonymously!');
});




if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(() => {
    console.log('SW registered');
  });
}