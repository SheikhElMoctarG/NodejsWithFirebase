require("dotenv").config();
const admin = require("firebase-admin");

const serviceAccount = require("../dataPrivateKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
module.exports =  {db, admin};