import firebase from "firebase";
import configuration from "../configuration";

const { apiKey, authDomain, projectId } = configuration.firebase;

firebase.initializeApp({
  apiKey,
  authDomain,
  projectId
});

export default firebase.firestore();
