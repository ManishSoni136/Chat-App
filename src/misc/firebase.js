/* eslint-disable no-console */
import { Notification as Toast } from 'rsuite';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';
import 'firebase/functions';
import { isLocalhost } from './Helpers';

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
export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;
export const functions = app.functions('europe-west3');

if (messaging) {
  messaging.usePublicVapidKey(
    'BKUQP66ItXi8skPqvg38Oro4gd4M-00C7Xu_KiWuklNC8FK5MGkns3y0_hulNo0kPgGMZ_j5mXKzVOzOVWiHq_Y'
  );

  messaging.onMessage(({ notification }) => {
    const { title, body } = notification;
    Toast.info({ title, description: body, duration: 0 });
  });
}

if(isLocalhost) {
  functions.useFunctionsEmulator('http://localhost:5001');
}