import firebase from "firebase";
 var firebaseConfig = {
    apiKey: "AIzaSyADUTIHlVz9eB45S26GP9Jz7jduREBtss8",
    authDomain: "login-7c287.firebaseapp.com",
    databaseURL: "https://login-7c287.firebaseio.com",
    projectId: "login-7c287",
    storageBucket: "login-7c287.appspot.com",
    messagingSenderId: "828797383259",
    appId: "1:828797383259:web:ee5e8c15c9213bdaa0c57e"
  };

  const Fire=firebase.initializeApp(firebaseConfig);
  export default Fire;