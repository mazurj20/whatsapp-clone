import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDBaXZ89OdgMO8HMkoEyBqK1YlIWzGh45c",
  authDomain: "whatsapp-clone-47661.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-47661.firebaseio.com",
  projectId: "whatsapp-clone-47661",
  storageBucket: "whatsapp-clone-47661.appspot.com",
  messagingSenderId: "222392720285",
  appId: "1:222392720285:web:dd01178e169bfef9542d74",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
