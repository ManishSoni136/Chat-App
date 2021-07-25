import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyDg6Wt2MvFQVGaGBB4AkifLpWIUoXHGpuI',
  authDomain: 'chat-app-58bf3.firebaseapp.com',
  databaseURL: 'https://chat-app-58bf3-default-rtdb.firebaseio.com',
  projectId: 'chat-app-58bf3',
  storageBucket: 'chat-app-58bf3.appspot.com',
  messagingSenderId: '370621442376',
  appId: '1:370621442376:web:565004d915c27cb3326b7d',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
