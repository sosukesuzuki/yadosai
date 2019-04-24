import firebase from "firebase";
import configuration from "../configuration";

const { apiKey, authDomain, projectId } = configuration.firebase;

firebase.initializeApp({
  apiKey,
  authDomain,
  projectId
});

const db = firebase.firestore();

export const melonpanice = db.collection("food").doc("melonpanice");

export default db;
