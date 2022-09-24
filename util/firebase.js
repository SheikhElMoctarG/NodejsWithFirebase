const firebase = require("firebase");
require("dotenv").config();
// firebase configration
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.SENDER,
    appId: process.env.APP_ID,
    measurementId: process.env.MESUREMENTID
  };

  firebase.initializeApp(firebaseConfig); 
  module.exports = { firebase }; 