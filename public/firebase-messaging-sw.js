/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/8.7.1/firebase-messaging.js'
);

firebase.initializeApp({
    apiKey: 'AIzaSyDg6Wt2MvFQVGaGBB4AkifLpWIUoXHGpuI',
    authDomain: 'chat-app-58bf3.firebaseapp.com',
    databaseURL: 'https://chat-app-58bf3-default-rtdb.firebaseio.com',
    projectId: 'chat-app-58bf3',
    storageBucket: 'chat-app-58bf3.appspot.com',
    messagingSenderId: '370621442376',
    appId: '1:370621442376:web:565004d915c27cb3326b7d',
  });

firebase.messaging();
